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
        const tableName = 'jembatan_1';
        const cdbEndpoint = 'https://layers.gis-sbd.com/user/prod/api/v2/sql?api_key=flYIQpNn1yHrnVuWXfQypg&q=';
        const cdbQuery = "SELECT cartodb_id, ST_AsText(the_geom) as wkt, nama_jemba,tipe,name_code,panjang,lebar,trotoar_ka,trotoar_ki,url_awal,url_akhir FROM " + tableName;
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
                        defaultContent: '',
                        width: '10px'
                    },
                    {
                        title: 'Nomor',
                        data: 'name_code',
                        searchable: true,
                        orderable: true
                    },
                    {
                        title: 'Nama',
                        data: 'nama_jemba',
                        searchable: true,
                        orderable: true,
                        width: '250px'
                    },
                    {
                        title: 'Panjang (m)',
                        data: 'panjang',
                        searchable: true,
                        orderable: true
                    },
                    {
                        title: 'Lebar (m)',
                        data: 'lebar',
                        searchable: true,
                        orderable: true
                    },
                    {
                        title: 'Tipe',
                        data: 'tipe',
                        searchable: true,
                        orderable: true,
                        width: '90px'
                    }
                ]

        })

        function rowOnClcik(d) {
            // `d` is the original data object for the row
            return +
               
                '<table  cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;>' +
                '<tr>' +
                '<td colspan="2"><img class="backup_picture" height="250px" src=' + d.url_awal + ' onError="this.onerror=null;this.src=\'images/nopicture.jpg\';" /></td>' +
                '<td colspan="2"><img class="backup_picture" height="250px" src=' + d.url_akhir + ' onError="this.onerror=null;this.src=\'images/nopicture.jpg\';" /></td>' +
                '<td rowspan="5" style="vertical-align:middle;text-align:center;"><div id="map' + d.cartodb_id + '" style="height:300px;width:500px;" ></div></td>' +
                '</tr>' +
                '<tr style="background-color: #f2f2f2">' +
                '<td>Kode</td>' + '<td>' + d.name_code + '</td>' +
                '<td>Nama </td>' + '<td>' + d.nama_jemba + '</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Tipe</td>' + '<td>' + d.tipe + '</td>' +
                '</tr>' +
                '<tr style="background-color: #f2f2f2">' +
                '<td>Panjang </td>' + '<td>' + d.panjang + ' km</td>' +
                '<td>Lebar</td>' + '<td>' + d.lebar + ' m</td>' +
                '</tr>' +
                '<tr>' +
                '<td>Trotoar Kanan </td>' + '<td>' + d.trotoar_ka + ' m</td>' +
                '<td>Trotoar Kiri</td>' + '<td>' + d.trotoar_ki + ' m</td>' +
                '</tr>' +
                '</table>';

        }

        $(".backup_picture").on("error", function () {
            $(this).attr('src', './images/nopicture.png');
        });

        

        $('#tabelJembatan tbody').on('click', 'td.details-control', function () {
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
                console.log(stringWkt);

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
                let obj = wkt.toObject({
                    icon: new L.Icon({
                        iconUrl: 'images/red_dot.png',
                        iconSize: [16, 16],
                        iconAnchor: [8, 8],
                        shadowUrl: 'images/dot_shadow.png',
                        shadowSize: [16, 16],
                        shadowAnchor: [8, 8]
                    }),
                    editable: true,
                    color: '#AA0000',
                    weight: 3,
                    opacity: 1.0,
                    editable: true,
                    fillColor: '#AA0000',
                    fillOpacity: 0.2
                });
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
            <table id="tabelJembatan" className="display" width="100%" ref={el => this.el = el}>

            </table>

        </div>
    }


}

export default Tbl;