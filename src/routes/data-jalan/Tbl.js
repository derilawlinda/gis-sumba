import '../../css/jquery.dataTables.css'
import React, {Component} from 'react'
import L from "leaflet"


var Wkt = require("wicket")
require("wicket/wicket-leaflet")


const format = require('string-format')

const $ = require('jquery')
$.Datatable = require('datatables.net')


export class Tbl extends Component{
    componentDidMount(){
        this.$el = $(this.el);
        const tableName = 'ruas_jalan_sumba_bd';
        const cdbEndpoint = 'https://layers.gis-sbd.com/user/prod/api/v2/sql?api_key=flYIQpNn1yHrnVuWXfQypg&q=';
        const cdbQuery = "SELECT ST_AsText(the_geom) as wkt,id_foto_aw,id_foto_ak,cartodb_id,bahu_kiri,bahu_kanan,cartodb_id, id,kecamatan,kondisi,lebar_jln,median_1,nama_jalan,nama_ruas,nomor_ruas,panjang,panjang_jl,perkerasan,rec_fungsi,slrn_ka,slrn_ki,status,sumber_dan,trotoar_ka,trotoar_ki FROM " + tableName;
        const queryURIencoded = cdbEndpoint + encodeURI(cdbQuery);
              
        var table = this.$el.DataTable(
        {
                ajax: {
                    url: queryURIencoded,
                    type: 'GET',
                    dataSrc: 'rows'
                },
                order: [[0, "desc"]],
                
                columns:  [
                    {
                        className: 'details-control',
                        orderable: false,
                        data: null,
                        defaultContent: ''                     
                    },
                    {
                        title: 'Nama Jalan',
                        data: 'nama_jalan',
                        searchable: true,
                        orderable: true,
                        width: '200px'
                    },
                    {
                        title: 'Ruas',
                        data: 'nama_ruas',
                        searchable: true,
                        orderable: true,
                        width: '150px'
                    },
                    {
                        title: 'Kecamatan',
                        data: 'kecamatan',
                        searchable: true,
                        orderable: true,
                    },
                    {
                        title: "Kondisi",
                        data: 'kondisi',
                        searchable: true,
                        orderable: true
                    },
                    {
                        title: "Status",
                        data: 'status',
                        searchable: true,
                        orderable: true
                    },
                    {
                        title: "Perkerasan",
                        data: 'perkerasan',
                        searchable: true,
                        orderable: true
                    }, {
                        title: "Panjang (km)",
                        data: 'panjang_jl',
                        searchable: true,
                        orderable: true
                    }
                ]

        });
        function rowOnClcik(d) {
            // `d` is the original data object for the row
            return '<div style="height:350px;overflow-y:scroll">' +
            '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
                '<tr>' +
                '<td colspan="2">' + 
                    '<img height="250px" src="foto_jalan/' + d.id_foto_aw + '.jpg" onError="this.onerror=null;this.src=\'images/nopicture.jpg\';" />'+
                '</td>' +
                '<td colspan="2">' +
                    '<img height="250px" src="foto_jalan/' + d.id_foto_ak + '.jpg" onError="this.onerror=null;this.src=\'images/nopicture.jpg\';" />'+
                '</td>' +
                    '<td rowspan="10" style="vertical-align:middle;text-align:center;width:80%;"><div id="map'+ d.cartodb_id +'" style="height:500px;" ></div></td>' +
                '</tr>' +
                '<tr style="background-color: #f2f2f2">' +
                    '<td>Nomor Ruas</td>' + '<td>'+d.nomor_ruas+'</td>' +
                    '<td>Nama Ruas </td>' + '<td>' + d.nama_ruas + '</td>' +
                '</tr>'+
                '<tr>' +
                    '<td>Jalan</td>' + '<td>' + d.nama_jalan + '</td>' +
                    '<td>Status</td>' + '<td>' + d.status + '</td>' +
                '</tr>' +
                '<tr style="background-color: #f2f2f2">' +
                    '<td>Perkerasan</td>' + '<td>' + d.perkerasan + '</td>' +
                    '<td>Rec. Fungsi </td>' + '<td>' + d.rec_fungsi + '</td>' +
                '</tr>' +
                '<tr >' +
                    '<td>Panjang </td>' + '<td>' + d.panjang_jl + ' km</td>' +
                    '<td>Lebar</td>' + '<td>' + d.lebar_jln + ' m</td>' +                    
                '</tr>' +
                '<tr style="background-color: #f2f2f2">' +
                    '<td>Kondisi</td>' + '<td>' + d.kondisi + '</td>' +
                '</tr>' +
                '<tr >' +
                    '<td>Bahu Kiri </td>' + '<td>' + d.bahu_kiri + ' m </td>' +
                    '<td>Bahu Kanan</td>' + '<td>' + d.bahu_kanan + ' m </td>' +
                '</tr>' +
                '<tr style="background-color: #f2f2f2">' +
                    '<td>Trotoar Kiri </td>' + '<td>' + d.trotoar_ki + ' m </td>' +
                    '<td>Trotoar Kanan</td>' + '<td>' + d.trotoar_ka + ' m </td>' +
                '</tr>' +
                '<tr >' +
                    '<td>Saluran Kiri </td>' + '<td>' + d.slrn_ki + ' m </td>' +
                    '<td>Saluran Kanan</td>' + '<td>' + d.slrn_ka + ' m </td>' +
                '</tr>' +
            '</table>' +
            '</div>';
            
        }
        
        $('#tabelJalan tbody').on('click', 'td.details-control', function () {
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
                const map = L.map('map' + row.data().cartodb_id).setZoom(17);
                var wkt = new Wkt.Wkt();
                var stringWkt = format('{}', row.data().wkt);

                try { // Catch any malformed WKT strings
                    wkt.read(stringWkt);
                } catch (e1) {
                    try {
                        wkt.read(stringWkt.replace('\n', '').replace('\r', '').replace('\t', ''));
                    } catch (e2) {
                        if (e2.name === 'WKTError') {
                            alert('Wicket could not understand the WKT string you entered. Check that you have parentheses balanced, and try removing tabs and newline characters.');
                            return;
                        }
                    }
                }
                var features = [];
                var i;
                let obj = wkt.toObject();
                if (Wkt.isArray(obj)) { // Distinguish multigeometries (Arrays) from objects
                    for (i in obj) {
                        if (obj.hasOwnProperty(i) && !wkt.isArray(obj[i])) {
                            obj[i].addTo(this.map);
                            features.push(obj[i]);
                        }
                    }
                } else {
                    obj.addTo(map); // Add it to the map
                    features.push(obj);
                }
                if (obj.getBounds !== undefined && typeof obj.getBounds === 'function') {
                    // For objects that have defined bounds or a way to get them
                    map.fitBounds(obj.getBounds());
                } else {
                    if (obj.getLatLng !== undefined && typeof obj.getLatLng === 'function') {
                        map.panTo(obj.getLatLng());
                    }
                }            


                L.tileLayer('http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}').addTo(map)
            }
        });
    }

    
    componentWillUnmount(){
        this.$el.DataTable.destroy(true);
    }

    render() {
        return <div>
            <table id="tabelJalan" className="display" width="100%" ref={el => this.el = el}>

            </table>

        </div>
    }


}

export default Tbl;