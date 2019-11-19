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
        const cdbDataPanjangJalanByStatus = `SELECT
            row_number() over () as id,
            status,
            SUM (panjang_jl) AS total
        FROM
            ruas_jalan_sumba_bd
        GROUP BY
            status`
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
                        orderable: true
                    },
                    {
                        title: 'Panjang (km)',
                        data: 'total',
                        searchable: true,
                        orderable: true,
                        width: '250px'
                    }                    
                ]

        })

        function rowOnClcik(d) {
            // `d` is the original data object for the row
            const ruas = [];
            const cdbQuery = "SELECT DISTINCT nama_ruas FROM ruas_jalan_sumba_bd WHERE status = '"+ d.status +"'";
            const queryURIencoded = cdbEndpoint + encodeURI(cdbQuery);
            $.ajax({
                type: "GET",
                url: queryURIencoded,
                dataType: 'json',
                success: function (response) {
                    
                    console.log(response);

                }
            });   

            
            return (
                '<div style="height:250px;overflow-y:scroll">' +
                '<table  cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;width:100%">' +
                '<tr>' +
                '<td>Ruas</td>' + '<td>' + d.nama_ruas + '</td>' +
                '<td rowspan="4" style="vertical-align:middle;text-align:center;width:60%"><div id="map' + d.id + '" style="height:250px;padding:10px;" ></div></td>' +
                '</tr>' +
                '<tr style="background-color: #f2f2f2">' +
                '<td>Baik</td>' + '<td>' + d.baik + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Rusak Ringan</td>' + '<td>' + d.rusak_ringan + '</td>' +
                '</tr>' +
                '<tr style="background-color: #f2f2f2">' +
                '<td>Rusak Berat </td>' + '<td>' + d.rusak_berat + ' km</td>' +
                '</tr>' +
                '</table>' +
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
            <table id="tabelStatus" className="display compact nowrap" width="100%" ref={el => this.el = el}>

            </table>

        </div>
    }


}

export default Tbl;