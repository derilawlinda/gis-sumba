import React, { Component } from 'react';
import '../../css/builder_embed.css';
import '../../css/deep_insights_new.css'
import '../../css/custom.css'

class Peta extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRoadMap: false,
            isSatelliteMap: true,
            map : window.map
        }
        this.onRoadButtonClick = this.onRoadButtonClick.bind(this);
        this.onSatelliteButtonClick = this.onSatelliteButtonClick.bind(this);
    }

    
    

    componentWillMount(){
          window.vizJSON = {
            "bounds": [
              [
                -9.602103986041728,
                118.69972229003906
              ],
              [
                -9.161755687904076,
                119.71389770507814
              ]
            ],
            "center": [
              -9.381999733931789,
              119.20680999755861
            ],
            "datasource": {
              "user_name": "prod",
              "maps_api_template": "https://layers.gis-sbd.com:443/user/{user}",
              "stat_tag": "6b6596cc-00f0-4f98-ad55-7661c8844914",
              "template_name": "tpl_6b6596cc_00f0_4f98_ad55_7661c8844914"
            },
            "description": null,
            "options": {
              "legends": true,
              "scrollwheel": true,
              "layer_selector": true,
              "dashboard_menu": false
            },
            "id": "6b6596cc-00f0-4f98-ad55-7661c8844914",
            "layers": [
              {
                "id": "146bc0cc-1e1d-429b-b947-d303af69895e",
                "type": "tiled",
                "options": {
                  "type": "Tiled",
                  "category": "Custom",
                  "urlTemplate": "https://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}",
                  "attribution": null,
                  "maxZoom": 21,
                  "minZoom": 0,
                  "name": "",
                  "tms": false,
                  "className": "httpsmt0googlecomvtlyrsshlenxxyyzz"
                }
              },
              {
                "id": "a985ba1c-46ff-4b19-bb5f-cb29ed24fed2",
                "type": "CartoDB",
                "attribution": null,
                "visible": true,
                "options": {
                  "layer_name": "Ruas Jalan",
                  "attribution": null,
                  "cartocss": "#layer {\n  line-width: 1.5;\n  line-color: ramp([kondisi], (#2fd51c, #d50e07, #dbd40c), (\"Baik\", \"Rusak Berat\", \"Rusak Ringan\"), \"=\");\n}",
                  "source": "b0"
                },
                "infowindow": {
                  "template_name": "",
                  "fields": [
                    {
                      "name": "objectid",
                      "title": true,
                      "position": 0
                    },
                    {
                      "name": "id",
                      "title": true,
                      "position": 1
                    },
                    {
                      "name": "status",
                      "title": true,
                      "position": 2
                    },
                    {
                      "name": "rec_fungsi",
                      "title": true,
                      "position": 3
                    },
                    {
                      "name": "nama_ruas",
                      "title": true,
                      "position": 4
                    },
                    {
                      "name": "nomor_ruas",
                      "title": true,
                      "position": 5
                    },
                    {
                      "name": "nama_jalan",
                      "title": true,
                      "position": 6
                    },
                    {
                      "name": "panjang",
                      "title": true,
                      "position": 7
                    },
                    {
                      "name": "sumber_dan",
                      "title": true,
                      "position": 8
                    },
                    {
                      "name": "perkerasan",
                      "title": true,
                      "position": 9
                    },
                    {
                      "name": "kondisi",
                      "title": true,
                      "position": 10
                    },
                    {
                      "name": "bahu_kanan",
                      "title": true,
                      "position": 11
                    },
                    {
                      "name": "bahu_kiri",
                      "title": true,
                      "position": 12
                    },
                    {
                      "name": "slrn_ka",
                      "title": true,
                      "position": 13
                    },
                    {
                      "name": "slrn_ki",
                      "title": true,
                      "position": 14
                    },
                    {
                      "name": "median_1",
                      "title": true,
                      "position": 15
                    },
                    {
                      "name": "trotoar_ka",
                      "title": true,
                      "position": 16
                    },
                    {
                      "name": "trotoar_ki",
                      "title": true,
                      "position": 17
                    },
                    {
                      "name": "lebar_jln",
                      "title": true,
                      "position": 18
                    },
                    {
                      "name": "id_foto_aw",
                      "title": true,
                      "position": 19
                    },
                    {
                      "name": "id_foto_ak",
                      "title": true,
                      "position": 20
                    },
                    {
                      "name": "east_awal",
                      "title": true,
                      "position": 21
                    },
                    {
                      "name": "north_awal",
                      "title": true,
                      "position": 22
                    },
                    {
                      "name": "east_akhir",
                      "title": true,
                      "position": 23
                    },
                    {
                      "name": "north_akhr",
                      "title": true,
                      "position": 24
                    },
                    {
                      "name": "panjang_jl",
                      "title": true,
                      "position": 25
                    },
                    {
                      "name": "n_kec",
                      "title": true,
                      "position": 26
                    },
                    {
                      "name": "kecamatan",
                      "title": true,
                      "position": 27
                    }
                  ],
                  "maxHeight": 180,
                  "template": `<div class=\"CDB-infowindow\" style=\"width:600px\">
                    <div class=\"CDB-infowindow-close js-close\"></div>\
                    <div class=\"CDB-infowindow-container\">    
                    <div class=\"CDB-infowindow-bg\">      
                    <div class=\"CDB-infowindow-inner js-inner\">        
                    <table style=\"border-collapse: collapse ; width: 100%\">   
                    <tbody>
                    <tr>    
                        <td colspan=\"2\" style=\"vertical-align: middle ; text-align: center\"><img src=\"foto_jalan/{{id_foto_aw}}.jpg\" style=\"padding: 5px\" height=\"200px\"></td>
                        <td colspan=\"2\" style=\"vertical-align: middle ; text-align: center\"><img src=\"foto_jalan/{{id_foto_ak}}.jpg\" style=\"padding: 5px\" height=\"200px\"></td>  
                    </tr>
                    <tr style=\"background-color: #f2f2f2\"><td>Nomor Ruas</td><td> {{nomor_ruas}} </td> 
                        <td>Nama Ruas</td><td> {{nama_ruas}}  </td>
                    </tr>  <tr style=\"background-color: #f2f2f2\">     </tr>  
                    <tr>    
                        <td>Jalan</td><td> {{nama_jalan}}  </td>  
                    </tr>  
                    <tr style=\"background-color: #f2f2f2\">    
                        <td>Status</td><td> {{status}} </td>    
                        <td>Perkerasan</td><td> {{perkerasan}} </td>  
                    </tr>  
                    <tr>    
                        <td>Rec. Fungsi</td><td> {{rec_fungsi}} </td>    
                        <td>Kondisi</td><td> {{kondisi}} </td>  
                    </tr>  
                    <tr style=\"background-color: #f2f2f2\">    
                        <td>Panjang</td><td> {{panjang_jl}} km</td>    
                        <td>Lebar</td><td> {{lebar_jln}}  m</td>  
                    </tr>  
                    <tr>    
                        <td>Bahu Kiri</td><td> {{bahu_kiri}} m</td>    
                        <td>Bahu Kanan</td><td> {{bahu_kanan}} m</td>  </tr>  
                    <tr style=\"background-color: #f2f2f2\">    
                        <td>Trotoar Kiri</td><td> {{trotoar_ka}} m</td>    
                        <td>Trotoar Kanan</td><td> {{trotoar_ki}}  m</td>  
                    </tr>  
                    <tr>    
                        <td>Saluran Kiri</td><td> {{slrn_ki}} m </td>    
                        <td>Saluran Kanan</td><td> {{slrn_ka}} m</td>  
                    </tr>
                    <tr style=\"background-color: #f2f2f2\">    
                        <td>Koordinat Awal (UTM 50S)</td><td> {{east_awal}} , {{north_awal}} </td>    
                        <td>Koordinat Akhir (UTM 50S)</td><td> {{east_akhir}} , {{north_akhr}} </td>  
                    </tr>  
                    </tbody>
                    </table>      
                    </div>    
                    </div>    
                        <div class=\"CDB-hook\">      
                            <div class=\"CDB-hook-inner\"></div>
                        </div>  
                    </div>
                    </div>`,
                  "alternative_names": {},
                  "width": 226,
                  "headerColor": {
                    "color": {
                      "fixed": "#35AAE5",
                      "opacity": 1
                    }
                  },
                  "template_type": "mustache"
                },
                "legends": [
                  {
                    "conf": {},
                    "created_at": null,
                    "definition": {
                      "categories": [
                        {
                          "title": "Baik",
                          "color": "#2fd51c",
                          "icon": ""
                        },
                        {
                          "title": "Rusak Berat",
                          "color": "#d50e07",
                          "icon": ""
                        },
                        {
                          "title": "Rusak Ringan",
                          "color": "#dbd40c",
                          "icon": ""
                        }
                      ],
                      "html": "<h3 class=\"CDB-Text CDB-Size-small u-upperCase u-bSpace u-altTextColor u-ellipsis \" title=\"Tipe Jembatan\">\n  Kerusakan\n</h3>\n<ul>\n  \n    <li class=\"Legend-categoryListItem u-flex u-alignCenter\">\n      \n        <div style=\"width: 5%;\nheight: 2px;\nmargin-left: 0;\nbackground-color:#666;\nborder: 0 none; background: #21c40f;\"></div>\n      \n\n      <p class=\"Legend-categoryTitle CDB-Text CDB-Size-small u-upperCase u-ellipsis\" title=\"Baik\">Baik</p>\n    </li>\n  \n    <li class=\"Legend-categoryListItem u-flex u-alignCenter\">\n      \n         <div style=\"width: 5%;\nheight: 2px;\nmargin-left: 0;\nbackground-color:#666;\nborder: 0 none; background: #cc1313;\"></div>\n      \n\n      <p class=\"Legend-categoryTitle CDB-Text CDB-Size-small u-upperCase u-ellipsis\" title=\"Rusak Berat\">Rusak Berat</p>\n    </li>\n  \n    <li class=\"Legend-categoryListItem u-flex u-alignCenter\">\n      \n         <div style=\"width: 5%;\nheight: 2px;\nmargin-left: 0;\nbackground-color:#666;\nborder: 0 none; background: #dfae0c;\"></div>\n\n\n      \n\n      <p class=\"Legend-categoryTitle CDB-Text CDB-Size-small u-upperCase u-ellipsis\" title=\"Rusak Ringan\">Rusak Ringan</p>\n    </li>\n  \n    \n  \n</ul>\n"
                    },
                    "id": null,
                    "layer_id": null,
                    "post_html": "",
                    "pre_html": "",
                    "title": "",
                    "type": "custom",
                    "updated_at": null
                  }
                ]
              },
              {
                "id": "a1acb084-5805-4ace-83bc-02653da2fe47",
                "type": "CartoDB",
                "visible": true,
                "options": {
                  "layer_name": "Jembatan",
                  "attribution": "",
                  "cartocss": "#layer {\n  marker-width: 10;\n  marker-fill: ramp([tipe], (#011edb, #eb0202), (\"Beton\", \"Kerangka Baja\"), \"=\");\n  marker-fill-opacity: 1;\n  marker-file: ramp([tipe], (url('https://s3.amazonaws.com/com.cartodb.users-assets.production/maki-icons/water-18.svg'), url('https://s3.amazonaws.com/com.cartodb.users-assets.production/maki-icons/water-18.svg')), (\"Beton\", \"Kerangka Baja\"), \"=\");\n  marker-allow-overlap: true;\n  marker-line-width: 1;\n  marker-line-color: #FFFFFF;\n  marker-line-opacity: 1;\n}",
                  "source": "a0"
                },
                "infowindow": {
                  "template_name": "",
                  "fields": [
                    {
                      "name": "trotoar_ka",
                      "title": true,
                      "position": 0
                    },
                    {
                      "name": "nama_jemba",
                      "title": true,
                      "position": 1
                    },
                    {
                      "name": "name_code",
                      "title": true,
                      "position": 2
                    },
                    {
                      "name": "panjang",
                      "title": true,
                      "position": 3
                    },
                    {
                      "name": "lebar",
                      "title": true,
                      "position": 4
                    },
                    {
                      "name": "trotoar_ki",
                      "title": true,
                      "position": 5
                    },
                    {
                      "name": "tipe",
                      "title": true,
                      "position": 6
                    },
                    {
                      "name": "id_foto_aw",
                      "title": true,
                      "position": 7
                    },
                    {
                      "name": "id_foto_ak",
                      "title": true,
                      "position": 8
                    },
                    {
                      "name": "id_jembata",
                      "title": true,
                      "position": 9
                    },
                    {
                      "name": "url_awal",
                      "title": true,
                      "position": 10
                    },
                    {
                      "name": "url_akhir",
                      "title": true,
                      "position": 11
                    }
                  ],
                  "maxHeight": 180,
                  "template": `<div class=\"CDB-infowindow\" style=\"width:600px\">
                    <div class=\"CDB-infowindow-close js-close\"></div>\
                    <div class=\"CDB-infowindow-container\">    
                    <div class=\"CDB-infowindow-bg\">      
                    <div class=\"CDB-infowindow-inner js-inner\">        
                    <table style=\"border-collapse: collapse ; width: 100%\">   
                    <tbody>
                    <tr>    
                        <td colspan=\"2\" style=\"vertical-align: middle ; text-align: center\"><img src=\"ternak/{{id}}.jpg\" style=\"padding: 5px\" height=\"200px\"></td>
                    </tr>
                    <tr style=\"background-color: #f2f2f2\"><td>Nomor Ruas</td><td> {{nomor_ruas}} </td> 
                        <td>Nama Ruas</td><td> {{nama_ruas}}  </td>
                    </tr>  <tr style=\"background-color: #f2f2f2\">     </tr>  
                    <tr>    
                        <td>Jalan</td><td> {{nama_jalan}}  </td>  
                    </tr>  
                    <tr style=\"background-color: #f2f2f2\">    
                        <td>Status</td><td> {{status}} </td>    
                        <td>Perkerasan</td><td> {{perkerasan}} </td>  
                    </tr>  
                    <tr>    
                        <td>Rec. Fungsi</td><td> {{rec_fungsi}} </td>    
                        <td>Kondisi</td><td> {{kondisi}} </td>  
                    </tr>  
                    <tr style=\"background-color: #f2f2f2\">    
                        <td>Panjang</td><td> {{panjang_jl}} km</td>    
                        <td>Lebar</td><td> {{lebar_jln}}  m</td>  
                    </tr>  
                    <tr>    
                        <td>Bahu Kiri</td><td> {{bahu_kiri}} m</td>    
                        <td>Bahu Kanan</td><td> {{bahu_kanan}} m</td>  </tr>  
                    <tr style=\"background-color: #f2f2f2\">    
                        <td>Trotoar Kiri</td><td> {{trotoar_ka}} m</td>    
                        <td>Trotoar Kanan</td><td> {{trotoar_ki}}  m</td>  
                    </tr>  
                    <tr>    
                        <td>Saluran Kiri</td><td> {{slrn_ki}} m </td>    
                        <td>Saluran Kanan</td><td> {{slrn_ka}} m</td>  
                    </tr>
                    <tr style=\"background-color: #f2f2f2\">    
                        <td>Koordinat Awal (UTM 50S)</td><td> {{east_awal}} , {{north_awal}} </td>    
                        <td>Koordinat Akhir (UTM 50S)</td><td> {{east_akhir}} , {{north_akhr}} </td>  
                    </tr>  
                    </tbody>
                    </table>      
                    </div>    
                    </div>    
                        <div class=\"CDB-hook\">      
                            <div class=\"CDB-hook-inner\"></div>
                        </div>  
                    </div>
                    </div>`,
                  "alternative_names": {},
                  "width": 226,
                  "headerColor": {
                    "color": {
                      "fixed": "#35AAE5",
                      "opacity": 1
                    }
                  },
                  "template_type": "mustache"
                },
                "legends": [
                  {
                    "conf": {},
                    "created_at": null,
                    "definition": {},
                    "id": null,
                    "layer_id": null,
                    "post_html": "",
                    "pre_html": "",
                    "title": "Jenis",
                    "type": "category",
                    "updated_at": null
                  }
                ]
              },
              {
                "id": "2750a4e3-516c-405a-bca8-8733d415755a",
                "type": "CartoDB",
                "visible": true,
                "options": {
                  "layer_name": "Kelompok Ternak",
                  "attribution": "",
                  "cartocss": "#layer {\n  marker-width: 7;\n  marker-fill: #EE4D5A;\n  marker-fill-opacity: 0.9;\n  marker-allow-overlap: true;\n  marker-line-width: 1;\n  marker-line-color: #FFFFFF;\n  marker-line-opacity: 1;\n}",
                  "source": "a0"
                },
                "infowindow": {
                  "template_name": "",
                  "maxHeight": 180,
                  "template": "<div class=\"CDB-infowindow CDB-infowindow--light js-infowindow\">\n  <div class=\"CDB-infowindow-close js-close\"></div>\n  <div class=\"CDB-infowindow-container\">\n    <div class=\"CDB-infowindow-bg\">\n      <div class=\"CDB-infowindow-inner js-inner\">\n        <ul class=\"CDB-infowindow-list js-content\">\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">id</h5>\n            <h4 class=\"CDB-infowindow-title\">{{id}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">kecamatan</h5>\n            <h4 class=\"CDB-infowindow-title\">{{kecamatan}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">desa</h5>\n            <h4 class=\"CDB-infowindow-title\">{{desa}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">kelompok</h5>\n            <h4 class=\"CDB-infowindow-title\">{{kelompok}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">jenis_usah</h5>\n            <h4 class=\"CDB-infowindow-title\">{{jenis_usah}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">ketua</h5>\n            <h4 class=\"CDB-infowindow-title\">{{ketua}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">foto</h5>\n            <h4 class=\"CDB-infowindow-title\">{{foto}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">foto_jpg</h5>\n            <h4 class=\"CDB-infowindow-title\">{{foto_jpg}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">anggota_1</h5>\n            <h4 class=\"CDB-infowindow-title\">{{anggota_1}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">anggota_2</h5>\n            <h4 class=\"CDB-infowindow-title\">{{anggota_2}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">anggota_3</h5>\n            <h4 class=\"CDB-infowindow-title\">{{anggota_3}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">anggota_5</h5>\n            <h4 class=\"CDB-infowindow-title\">{{anggota_5}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">anggota_7</h5>\n            <h4 class=\"CDB-infowindow-title\">{{anggota_7}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">anggota_8</h5>\n            <h4 class=\"CDB-infowindow-title\">{{anggota_8}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">anggota_9</h5>\n            <h4 class=\"CDB-infowindow-title\">{{anggota_9}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">anggota_11</h5>\n            <h4 class=\"CDB-infowindow-title\">{{anggota_11}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">anggota_13</h5>\n            <h4 class=\"CDB-infowindow-title\">{{anggota_13}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">anggota_14</h5>\n            <h4 class=\"CDB-infowindow-title\">{{anggota_14}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">anggota_15</h5>\n            <h4 class=\"CDB-infowindow-title\">{{anggota_15}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">anggota_16</h5>\n            <h4 class=\"CDB-infowindow-title\">{{anggota_16}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">anggota_4</h5>\n            <h4 class=\"CDB-infowindow-title\">{{anggota_4}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">anggota_6</h5>\n            <h4 class=\"CDB-infowindow-title\">{{anggota_6}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">anggota_10</h5>\n            <h4 class=\"CDB-infowindow-title\">{{anggota_10}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">anggota_12</h5>\n            <h4 class=\"CDB-infowindow-title\">{{anggota_12}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">anggota_17</h5>\n            <h4 class=\"CDB-infowindow-title\">{{anggota_17}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">anggota_18</h5>\n            <h4 class=\"CDB-infowindow-title\">{{anggota_18}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">anggota_19</h5>\n            <h4 class=\"CDB-infowindow-title\">{{anggota_19}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">anggota_20</h5>\n            <h4 class=\"CDB-infowindow-title\">{{anggota_20}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">anggota_21</h5>\n            <h4 class=\"CDB-infowindow-title\">{{anggota_21}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">anggota_22</h5>\n            <h4 class=\"CDB-infowindow-title\">{{anggota_22}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">anggota_23</h5>\n            <h4 class=\"CDB-infowindow-title\">{{anggota_23}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">anggota_24</h5>\n            <h4 class=\"CDB-infowindow-title\">{{anggota_24}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">anggota_25</h5>\n            <h4 class=\"CDB-infowindow-title\">{{anggota_25}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">anggota_26</h5>\n            <h4 class=\"CDB-infowindow-title\">{{anggota_26}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">anggota_27</h5>\n            <h4 class=\"CDB-infowindow-title\">{{anggota_27}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">anggota_28</h5>\n            <h4 class=\"CDB-infowindow-title\">{{anggota_28}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">anggota_29</h5>\n            <h4 class=\"CDB-infowindow-title\">{{anggota_29}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">anggota_30</h5>\n            <h4 class=\"CDB-infowindow-title\">{{anggota_30}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">anggota_31</h5>\n            <h4 class=\"CDB-infowindow-title\">{{anggota_31}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">anggota_32</h5>\n            <h4 class=\"CDB-infowindow-title\">{{anggota_32}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">anggota_33</h5>\n            <h4 class=\"CDB-infowindow-title\">{{anggota_33}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">anggota_34</h5>\n            <h4 class=\"CDB-infowindow-title\">{{anggota_34}}</h4>\n          </li>\n          <li class=\"CDB-infowindow-listItem\">\n              <h5 class=\"CDB-infowindow-subtitle\">sumber_dan</h5>\n            <h4 class=\"CDB-infowindow-title\">{{sumber_dan}}</h4>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"CDB-hook\">\n      <div class=\"CDB-hook-inner\"></div>\n    </div>\n  </div>\n</div>\n",
                  "alternative_names": {},
                  "fields": [
                    {
                      "name": "id",
                      "title": true,
                      "position": 0
                    },
                    {
                      "name": "kecamatan",
                      "title": true,
                      "position": 1
                    },
                    {
                      "name": "desa",
                      "title": true,
                      "position": 2
                    },
                    {
                      "name": "kelompok",
                      "title": true,
                      "position": 3
                    },
                    {
                      "name": "jenis_usah",
                      "title": true,
                      "position": 4
                    },
                    {
                      "name": "ketua",
                      "title": true,
                      "position": 5
                    },
                    {
                      "name": "foto",
                      "title": true,
                      "position": 6
                    },
                    {
                      "name": "foto_jpg",
                      "title": true,
                      "position": 7
                    },
                    {
                      "name": "anggota_1",
                      "title": true,
                      "position": 8
                    },
                    {
                      "name": "anggota_2",
                      "title": true,
                      "position": 9
                    },
                    {
                      "name": "anggota_3",
                      "title": true,
                      "position": 10
                    },
                    {
                      "name": "anggota_5",
                      "title": true,
                      "position": 11
                    },
                    {
                      "name": "anggota_7",
                      "title": true,
                      "position": 12
                    },
                    {
                      "name": "anggota_8",
                      "title": true,
                      "position": 13
                    },
                    {
                      "name": "anggota_9",
                      "title": true,
                      "position": 14
                    },
                    {
                      "name": "anggota_11",
                      "title": true,
                      "position": 15
                    },
                    {
                      "name": "anggota_13",
                      "title": true,
                      "position": 16
                    },
                    {
                      "name": "anggota_14",
                      "title": true,
                      "position": 17
                    },
                    {
                      "name": "anggota_15",
                      "title": true,
                      "position": 18
                    },
                    {
                      "name": "anggota_16",
                      "title": true,
                      "position": 19
                    },
                    {
                      "name": "anggota_4",
                      "title": true,
                      "position": 20
                    },
                    {
                      "name": "anggota_6",
                      "title": true,
                      "position": 21
                    },
                    {
                      "name": "anggota_10",
                      "title": true,
                      "position": 22
                    },
                    {
                      "name": "anggota_12",
                      "title": true,
                      "position": 23
                    },
                    {
                      "name": "anggota_17",
                      "title": true,
                      "position": 24
                    },
                    {
                      "name": "anggota_18",
                      "title": true,
                      "position": 25
                    },
                    {
                      "name": "anggota_19",
                      "title": true,
                      "position": 26
                    },
                    {
                      "name": "anggota_20",
                      "title": true,
                      "position": 27
                    },
                    {
                      "name": "anggota_21",
                      "title": true,
                      "position": 28
                    },
                    {
                      "name": "anggota_22",
                      "title": true,
                      "position": 29
                    },
                    {
                      "name": "anggota_23",
                      "title": true,
                      "position": 30
                    },
                    {
                      "name": "anggota_24",
                      "title": true,
                      "position": 31
                    },
                    {
                      "name": "anggota_25",
                      "title": true,
                      "position": 32
                    },
                    {
                      "name": "anggota_26",
                      "title": true,
                      "position": 33
                    },
                    {
                      "name": "anggota_27",
                      "title": true,
                      "position": 34
                    },
                    {
                      "name": "anggota_28",
                      "title": true,
                      "position": 35
                    },
                    {
                      "name": "anggota_29",
                      "title": true,
                      "position": 36
                    },
                    {
                      "name": "anggota_30",
                      "title": true,
                      "position": 37
                    },
                    {
                      "name": "anggota_31",
                      "title": true,
                      "position": 38
                    },
                    {
                      "name": "anggota_32",
                      "title": true,
                      "position": 39
                    },
                    {
                      "name": "anggota_33",
                      "title": true,
                      "position": 40
                    },
                    {
                      "name": "anggota_34",
                      "title": true,
                      "position": 41
                    },
                    {
                      "name": "sumber_dan",
                      "title": true,
                      "position": 42
                    }
                  ],
                  "width": 226,
                  "headerColor": {
                    "color": {
                      "fixed": "#35AAE5",
                      "opacity": 1
                    }
                  },
                  "template_type": "mustache"
                },
                "legends": []
              }
              
            ],
            "map_provider": "leaflet",
            "overlays": [
              
              {
                "type": "search",
                "order": 2,
                "options": {
                  "display": true,
                  "x": 60,
                  "y": 20
                },
                "template": ""
              },
              {
                "type": "zoom",
                "order": 3,
                "options": {
                  "display": true,
                  "x": 20,
                  "y": 20
                },
                "template": "<a href=\"#zoom_in\" class=\"zoom_in\">+</a> <a href=\"#zoom_out\" class=\"zoom_out\">-</a>"
              },
              {
                "type": "loader",
                "order": 4,
                "options": {
                  "display": true,
                  "x": 20,
                  "y": 150
                },
                "template": "<div class=\"loader\" original-title=\"\"></div>"
              }
            ],
            "title": "Peta Jalan dan Jembatan Kab. Sumba Barat Daya",
            "updated_at": "2019-11-09 18:59:58 UTC",
            "user": {
              "fullname": "prod",
              "avatar_url": "/assets/unversioned/images/avatars/avatar_marker_red.png",
              "profile_url": "https://layers.gis-sbd.com/user/prod"
            },
            "version": "3.0.0",
            "widgets": [
              {
                "id": "ae28948a-edad-4192-adc0-6e8345936cf3",
                "type": "category",
                "title": "Ruas (km)",
                "order": 0,
                "layer_id": "a985ba1c-46ff-4b19-bb5f-cb29ed24fed2",
                "options": {
                  "column": "nama_ruas",
                  "aggregation_column": "nama_ruas",
                  "aggregation": "count",
                  "column_type": "string",
                  "sync_on_bbox_change": true
                },
                "style": {
                  "widget_style": {
                    "definition": {
                      "color": {
                        "fixed": "#9DE0AD",
                        "opacity": 1
                      }
                    },
                    "widget_color_changed": false
                  },
                  "auto_style": {
                    "custom": false,
                    "allowed": true
                  }
                },
                "source": {
                  "id": "b0"
                }
              },
              {
                "id": "789f311a-f29a-4d2c-ba84-dfd43ee1da04",
                "type": "category",
                "title": "Perkerasan (km)",
                "order": 1,
                "layer_id": "a985ba1c-46ff-4b19-bb5f-cb29ed24fed2",
                "options": {
                  "column": "perkerasan",
                  "aggregation_column": "panjang_jl",
                  "aggregation": "sum",
                  "column_type": "string",
                  "sync_on_bbox_change": true,
                  "schema": {},
                  "aggregate": {
                    "operator": "sum",
                    "attribute": "panjang_jl",
                    "visible": true
                  }
                },
                "style": {
                  "widget_style": {
                    "definition": {
                      "color": {
                        "fixed": "#9DE0AD",
                        "opacity": 1
                      }
                    },
                    "widget_color_changed": false
                  },
                  "auto_style": {
                    "custom": true,
                    "allowed": true,
                    "definition": {
                      "color": {
                        "attribute": "perkerasan",
                        "quantification": "category",
                        "range": [
                          "#5F4690",
                          "#1D6996",
                          "#38A6A5",
                          "#0F8554",
                          "#73AF48",
                          "#EDAD08",
                          "#E17C05",
                          "#CC503E",
                          "#94346E",
                          "#6F4070",
                          "#666666"
                        ]
                      }
                    },
                    "cartocss": "#layer {\n  line-width: 1.5;\n  line-color: ramp([kondisi], (#2fd51c, #d50e07, #dbd40c), (\"Baik\", \"Rusak Berat\", \"Rusak Ringan\"), \"=\");\n}"
                  }
                },
                "source": {
                  "id": "b0"
                }
              },
              {
                "id": "60e67d1c-b089-4368-a82e-51cc4f07e036",
                "type": "category",
                "title": "Kondisi (km)",
                "order": 2,
                "layer_id": "a985ba1c-46ff-4b19-bb5f-cb29ed24fed2",
                "options": {
                  "column": "kondisi",
                  "aggregation_column": "panjang_jl",
                  "aggregation": "sum",
                  "column_type": "string",
                  "sync_on_bbox_change": true,
                  "schema": {},
                  "aggregate": {
                    "operator": "sum",
                    "attribute": "panjang_jl",
                    "visible": true
                  },
                  "suffix": "",
                  "prefix": ""
                },
                "style": {
                  "widget_style": {
                    "definition": {
                      "color": {
                        "fixed": "#9DE0AD",
                        "opacity": 1
                      }
                    },
                    "widget_color_changed": false
                  },
                  "auto_style": {
                    "custom": true,
                    "allowed": true,
                    "definition": {
                      "color": {
                        "attribute": "kondisi",
                        "quantification": "category",
                        "range": [
                          "#5F4690",
                          "#1D6996",
                          "#38A6A5",
                          "#0F8554",
                          "#73AF48",
                          "#EDAD08",
                          "#E17C05",
                          "#CC503E",
                          "#94346E",
                          "#6F4070",
                          "#666666"
                        ]
                      }
                    },
                    "cartocss": "#layer {\n  line-width: 1.5;\n  line-color: ramp([kondisi], (#2fd51c, #d50e07, #dbd40c), (\"Baik\", \"Rusak Berat\", \"Rusak Ringan\"), \"=\");\n}"
                  }
                },
                "source": {
                  "id": "b0"
                }
              },
              {
                "id": "badfa297-2f02-46bc-b5d7-ed9b97072048",
                "type": "category",
                "title": "Status (km)",
                "order": 3,
                "layer_id": "a985ba1c-46ff-4b19-bb5f-cb29ed24fed2",
                "options": {
                  "column": "status",
                  "aggregation_column": "panjang_jl",
                  "aggregation": "sum",
                  "column_type": "string",
                  "sync_on_bbox_change": true,
                  "schema": {},
                  "aggregate": {
                    "operator": "sum",
                    "attribute": "panjang_jl"
                  },
                  "suffix": "",
                  "prefix": ""
                },
                "style": {
                  "widget_style": {
                    "definition": {
                      "color": {
                        "fixed": "#9DE0AD",
                        "opacity": 1
                      }
                    },
                    "widget_color_changed": false
                  },
                  "auto_style": {
                    "custom": true,
                    "allowed": true,
                    "definition": {
                      "color": {
                        "attribute": "panjang_jl",
                        "quantification": "category",
                        "range": [
                          "#5F4690",
                          "#1D6996",
                          "#38A6A5",
                          "#0F8554",
                          "#73AF48",
                          "#EDAD08",
                          "#E17C05",
                          "#CC503E",
                          "#94346E",
                          "#6F4070",
                          "#666666"
                        ]
                      }
                    },
                    "cartocss": "#layer {\n  line-width: 1.5;\n  line-color: ramp([kondisi], (#2fd51c, #d50e07, #dbd40c), (\"Baik\", \"Rusak Berat\", \"Rusak Ringan\"), \"=\");\n}"
                  }
                },
                "source": {
                  "id": "b0"
                }
              }
            ],
            "zoom": 11,
            "analyses": [
              {
                "id": "a0",
                "type": "source",
                "options": {
                  "table_name": "jembatan_1",
                  "simple_geom": "point"
                }
              },
              {
                "id": "b0",
                "type": "source",
                "options": {
                  "table_name": "ruas_jalan_sumba_bd",
                  "simple_geom": "line"
                }
              }
            ]
          }
            window.layersData = JSON.parse('[{\"id\":\"146bc0cc-1e1d-429b-b947-d303af69895e\",\"options\":{}},{\"id\":\"a985ba1c-46ff-4b19-bb5f-cb29ed24fed2\",\"options\":{\"style_version\":\"2.1.1\",\"tile_style\":\"#layer {\\n  line-width: 1.5;\\n  line-color: ramp([kondisi], (#2fd51c, #d50e07, #dbd40c), (\\\"Baik\\\", \\\"Rusak Berat\\\", \\\"Rusak Ringan\\\"), \\\"=\\\");\\n}\"}},{\"id\":\"a1acb084-5805-4ace-83bc-02653da2fe47\",\"options\":{\"style_version\":\"2.1.1\",\"tile_style\":\"#layer {\\n  marker-width: 10;\\n  marker-fill: ramp([tipe], (#011edb, #eb0202), (\\\"Beton\\\", \\\"Kerangka Baja\\\"), \\\"=\\\");\\n  marker-fill-opacity: 1;\\n  marker-file: ramp([tipe], (url(\'https://s3.amazonaws.com/com.cartodb.users-assets.production/maki-icons/water-18.svg\'), url(\'https://s3.amazonaws.com/com.cartodb.users-assets.production/maki-icons/water-18.svg\')), (\\\"Beton\\\", \\\"Kerangka Baja\\\"), \\\"=\\\");\\n  marker-allow-overlap: true;\\n  marker-line-width: 1;\\n  marker-line-color: #FFFFFF;\\n  marker-line-opacity: 1;\\n}\"}}]');
            window.stateJSON = JSON.parse('{\"map\":{\"ne\":[-9.838979375579331,118.80889892578126],\"sw\":[-9.216660186892877,119.52644348144531],\"center\":[-9.527961595300471,119.1676712036133],\"zoom\":11},\"widgets\":{\"ae28948a-edad-4192-adc0-6e8345936cf3\":{\"collapsed\":true},\"789f311a-f29a-4d2c-ba84-dfd43ee1da04\":{\"collapsed\":true},\"60e67d1c-b089-4368-a82e-51cc4f07e036\":{\"collapsed\":true},\"badfa297-2f02-46bc-b5d7-ed9b97072048\":{\"collapsed\":true}}}');
            window.authTokens = JSON.parse('[]');
            window.geocoderConfiguration = JSON.parse('{\"provider\":null,\"mapbox\":{\"search_bar_api_key\":\"\"},\"tomtom\":{\"search_bar_api_key\":\"\"}}');
            window.ownerData = JSON.parse('{\"base_url\":\"https://layers.gis-sbd.com/user/prod\",\"account_type\":\"[DEDICATED]\"}');
        let scripts = [
            { src: "https://layers.gis-sbd.com/assets/1.0.0-assets.136/javascripts/builder_embed.js" }
        ]


            scripts.map(item => {
                const script = document.createElement("script")
                script.src = item.src
                script.async = true
                document.body.appendChild(script)
            });
        
    
    }

    componentDidMount() {
        
       


       
    };

    componentDidUpdate() {

    }

    onRoadButtonClick() {
        var map = window.mapsPlaceholder[0];
        if (map){
            if (!this.state.isRoadMap) {
                map.eachLayer(function (layer) {
                    console.log(layer);
                    if (layer._leaflet_id == 19) {
                        layer.setUrl("http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}");
                    }
                });
                    
            }
            this.setState({ isRoadMap: true, isSatelliteMap: false });
        }
       
    }

    onSatelliteButtonClick() {

        var map = window.mapsPlaceholder[0];
        if (map) {
            if (!this.state.isSatelliteMap) {
                map.eachLayer(function (layer) {
                    console.log(layer);
                    if (layer._leaflet_id == 19) {
                        layer.setUrl("http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}");
                    }
                });

            }
            this.setState({ isRoadMap: false, isSatelliteMap: true });
        }
    }
    
    render() {
        return (
            


            <div>
               
                <div id="dashboard" style={{
                    height : "70vh"
                }}>
                    <div className="BasemapSwitcher-container">
                        <div className="CDB-Overlay">
                            <button onClick={this.onRoadButtonClick} className="CDB-Attribution-button js-button" 
                                style= {{
                                    width : "50%",
                                    borderLeft: "1px solid #EEE"
                                }} >Map</button>
                            <button onClick={this.onSatelliteButtonClick}  className="CDB-Attribution-button js-button"
                                style={{
                                    width: "50%",
                                    borderLeft: "1px solid #EEE"
                                }}>Satellite</button>

                        </div>
                    </div>
                </div>         
            </div>
        );
    }
}
export default Peta;