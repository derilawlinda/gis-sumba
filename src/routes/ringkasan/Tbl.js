import '../../css/jquery.dataTables.css'
import React, { Component } from 'react'
import L from "leaflet"


var Wkt = require("wicket")
require("wicket/wicket-leaflet")


const format = require('string-format')

const $ = require('jquery')
$.Datatable = require('datatables.net')

export class Tbl extends Component{

    componentDidMount(){
        this.$el = $(this.el);
        const cdbEndpoint = 'https://layers.gis-sbd.com/user/prod/api/v2/sql?api_key=flYIQpNn1yHrnVuWXfQypg&q=';
        const cdbDataPanjangJalanByStatus = `SELECT status, COUNT(*) as jumlah_ruas, SUM(total) as panjang_total
        FROM (
        SELECT
                    status,
                    nama_ruas,            
                    ROUND(SUM(panjang_jl)::numeric ,2) AS total
                FROM
                    ruas_jalan_sumba_bd
                GROUP BY
                    status, nama_ruas
        
        )a
        GROUP BY status`
        const queryURIencodedDataPanjangJalanByStatus = cdbEndpoint + encodeURI(cdbDataPanjangJalanByStatus);
           
        var table = this.$el.DataTable(
        {
                ajax: {
                    url: queryURIencodedDataPanjangJalanByStatus,
                    type: 'GET',
                    dataSrc: 'rows'
                },
                searching : false,
                paging:false,
                info : false,
                scrollY : "25vh",
                scrollCollapse : true,
                order: [[0, "desc"]],
                columns:  [
                    {
                        className: 'details-control',
                        orderable: false,
                        data: null,
                        defaultContent: '',
                        width: '10px'
                    },
                    {
                        title: 'Status',
                        data: 'status',
                        searchable: true,
                        orderable: true,
                        width: '250px'
                    },
                    {
                        title: 'Panjang (km)',
                        data: 'panjang_total',
                        searchable: true,
                        orderable: true,
                        width: '250px'
                    },
                    {
                        title: 'Jumlah Ruas',
                        data: 'jumlah_ruas',
                        searchable: true,
                        orderable: true,
                        width: '250px'
                    }                      
                ]

        })

        function rowOnClcik(d) {
            // `d` is the original data object for the row
            

            
            return (
                '<div style="height:250px;overflow-y:scroll" >' +
                    '<div class="row"> ' +
                        '<div class="col-sm-6">' +
                            '<div >'+
                            '<table  cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;width:100%;" id="table' + d.id + '" >' +
                            '<thead style="display: block;width: 50%;">' +
                                '<tr>' +
                                '<th style="width: 84%;"> Ruas </th>' +
                                '<th> Panjang </th>' +
                                '</tr>' +
                            '</thead>' +
                            '<tbody style="height:150px;overflow-y:auto;width: 51%;display: block;">' +
                            '</tbody>' +
                            '</table>' +
                            '</div>'+
                        '</div>' +
                        '<div class="col-sm-5">' +
                            '<div id="map' + d.id + '" style="height:250px;padding:10px;" ></div>' +
                        '</div>' +
                    '</div>'+
                '</div>'
            ) 
            
            
        }

        $(".backup_picture").on("error", function () {
            $(this).attr('src', './images/nopicture.png');
        });

        

        $('#tabelStatus tbody').on('click', 'td.details-control', function () {
            var tr = $(this).closest('tr');
            var row = table.row(tr);


            if (row.child.isShown()) {
                // This row is already open - close it
                row.child.hide();
                tr.removeClass('shown');

            }
            else {
                // Open this row
                row.child(rowOnClcik(row.data())).show();
                tr.addClass('shown');
                const cdbSpatialQuery = `SELECT rowjsonb_to_geojson(to_jsonb(subq.*)) AS geojson 
                FROM ( 
                SELECT ST_Union(the_geom) as geom, kondisi
                FROM ruas_jalan_sumba_bd 
                WHERE status = '`+ row.data().status + `'
                GROUP BY kondisi
                ) AS subq`;
                const queryURIencoded = cdbEndpoint + encodeURI(cdbSpatialQuery);
                const garisJalan = [];
                const map = L.map('map' + row.data().id).setZoom(17);

                const ruas = [];
                const cdbQuery = "SELECT SUM(panjang_jl) as panjang,nama_ruas FROM ruas_jalan_sumba_bd WHERE status = '"+ row.data().status +"' GROUP BY nama_ruas";
                const queryURIencodedStatus = cdbEndpoint + encodeURI(cdbQuery);
                $.ajax({
                    type: "GET",
                    url: queryURIencodedStatus,
                    dataType: 'json',
                    success: function (response) {
                        
                        response.rows.map(function(feature){
                            $('#table'+row.data().id + ' tbody').append('<tr><td style="width: 84%;">'+feature.nama_ruas+'</td><td style="width: 1%;">'+feature.panjang+'</td></tr>');
                        })

                    }
                });   

                $.ajax({
                    type: "GET",
                    url: queryURIencoded,
                    dataType: 'json',
                    success: function (response) {
                        response.rows.map(function(feature){
                            garisJalan.push(JSON.parse(feature.geojson));
                        })
                        var layerJalan = L.geoJSON(garisJalan, {
                            style: function (garisJalan) {
                                switch (garisJalan.properties.kondisi) {
                                    case 'Baik': return { color: "#2fd51c" };
                                    case 'Rusak Berat': return { color: "#d50e07" };
                                    case 'Rusak Ringan': return { color: "#dbd40c" };
                                }
                            }
                        }).addTo(map);

                        map.fitBounds(layerJalan.getBounds());
                        
                    }
                });                
                L.tileLayer('http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}').addTo(map)
            }
        });
    }

    componentWillUnmount(){
        this.$el.DataTable.destroy(true);
    }

    render() {
        return <div>
            <table id="tabelStatus" className="display" width="100%" height="20vh" ref={el => this.el = el}>

            </table>

        </div>
    }


}

export default Tbl;