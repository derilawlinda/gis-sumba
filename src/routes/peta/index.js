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
        window.vizJSON = JSON.parse('{\"bounds\":[[-9.70875,118.994],[-9.39239,119.376]],\"center\":\"[-9.550570049817905,119.1849390309615]\",\"datasource\":{\"user_name\":\"prod\",\"maps_api_template\":\"https://layers.gis-sbd.com:443/user/{user}\",\"stat_tag\":\"6b6596cc-00f0-4f98-ad55-7661c8844914\",\"template_name\":\"tpl_6b6596cc_00f0_4f98_ad55_7661c8844914\"},\"description\":null,\"options\":{\"legends\":true,\"scrollwheel\":true,\"layer_selector\":true,\"dashboard_menu\":false},\"id\":\"6b6596cc-00f0-4f98-ad55-7661c8844914\",\"layers\":[{\"id\":\"146bc0cc-1e1d-429b-b947-d303af69895e\",\"type\":\"tiled\",\"options\":{\"type\":\"Tiled\",\"category\":\"Custom\",\"urlTemplate\":\"https://mt0.google.com/vt/lyrs=s\\u0026hl=en\\u0026x={x}\\u0026y={y}\\u0026z={z}\",\"attribution\":null,\"maxZoom\":21,\"minZoom\":0,\"name\":\"\",\"tms\":false,\"className\":\"httpsmt0googlecomvtlyrsshlenxxyyzz\"}},{\"id\":\"a985ba1c-46ff-4b19-bb5f-cb29ed24fed2\",\"type\":\"CartoDB\",\"visible\":true,\"options\":{\"layer_name\":\"Ruas Jalan\",\"attribution\":\"\",\"cartocss\":\"#layer {\\n  line-width: 1.5;\\n  line-color: ramp([kondisi], (#2fd51c, #d50e07, #dbd40c), (\\\"Baik\\\", \\\"Rusak Berat\\\", \\\"Rusak Ringan\\\"), \\\"=\\\");\\n}\",\"source\":\"b0\"},\"infowindow\":{\"template_name\":\"\",\"fields\":[{\"name\":\"bahu_kanan\",\"title\":true,\"position\":0},{\"name\":\"bahu_kiri\",\"title\":true,\"position\":1},{\"name\":\"id\",\"title\":true,\"position\":2},{\"name\":\"status\",\"title\":true,\"position\":3},{\"name\":\"rec_fungsi\",\"title\":true,\"position\":4},{\"name\":\"nama_ruas\",\"title\":true,\"position\":5},{\"name\":\"nomor_ruas\",\"title\":true,\"position\":6},{\"name\":\"nama_jalan\",\"title\":true,\"position\":7},{\"name\":\"panjang\",\"title\":true,\"position\":8},{\"name\":\"sumber_dan\",\"title\":true,\"position\":9},{\"name\":\"perkerasan\",\"title\":true,\"position\":10},{\"name\":\"kondisi\",\"title\":true,\"position\":11},{\"name\":\"slrn_ka\",\"title\":true,\"position\":12},{\"name\":\"slrn_ki\",\"title\":true,\"position\":13},{\"name\":\"median_1\",\"title\":true,\"position\":14},{\"name\":\"trotoar_ka\",\"title\":true,\"position\":15},{\"name\":\"trotoar_ki\",\"title\":true,\"position\":16},{\"name\":\"lebar_jln\",\"title\":true,\"position\":17},{\"name\":\"id_foto_aw\",\"title\":true,\"position\":18},{\"name\":\"id_foto_ak\",\"title\":true,\"position\":19},{\"name\":\"east_awal\",\"title\":true,\"position\":20},{\"name\":\"north_awal\",\"title\":true,\"position\":21},{\"name\":\"east_akhir\",\"title\":true,\"position\":22},{\"name\":\"north_akhr\",\"title\":true,\"position\":23},{\"name\":\"url_awal\",\"title\":true,\"position\":24},{\"name\":\"url_akhir\",\"title\":true,\"position\":25},{\"name\":\"kecamatan\",\"title\":true,\"position\":26}],\"maxHeight\":180,\"template\":\"\\u003cdiv class=\\\"CDB-infowindow\\\" style=\\\"width:600px\\\"\\u003e\\n  \\u003cdiv class=\\\"CDB-infowindow-close js-close\\\"\\u003e\\u003c/div\\u003e\\n  \\u003cdiv class=\\\"CDB-infowindow-container\\\"\\u003e\\n    \\u003cdiv class=\\\"CDB-infowindow-bg\\\"\\u003e\\n      \\u003cdiv class=\\\"CDB-infowindow-inner js-inner\\\"\\u003e\\n        \\u003ctable style=\\\"border-collapse: collapse ; width: 100%\\\"\\u003e\\n \\n  \\u003ctbody\\u003e\\u003ctr\\u003e\\n    \\n\\u003ctd colspan=\\\"2\\\" style=\\\"vertical-align: middle ; text-align: center\\\"\\u003e\\u003cimg src=\\\"{{url_awal}}\\\" style=\\\"padding: 5px\\\" height=\\\"200px\\\"\\u003e\\u003c/td\\u003e\\n\\u003ctd colspan=\\\"2\\\" style=\\\"vertical-align: middle ; text-align: center\\\"\\u003e\\u003cimg src=\\\"{{url_akhir}}\\\" style=\\\"padding: 5px\\\" height=\\\"200px\\\"\\u003e\\u003c/td\\u003e\\n  \\u003c/tr\\u003e\\n\\u003ctr style=\\\"background-color: #f2f2f2\\\"\\u003e\\n\\u003ctd\\u003eNomor Ruas\\u003c/td\\u003e\\n\\u003ctd\\u003e {{nomor_ruas}} \\u003c/td\\u003e\\n \\u003ctd\\u003eNama Ruas\\u003c/td\\u003e\\n\\u003ctd\\u003e {{nama_ruas}}  \\u003c/td\\u003e\\n\\u003c/tr\\u003e\\n  \\u003ctr style=\\\"background-color: #f2f2f2\\\"\\u003e\\n   \\n  \\u003c/tr\\u003e\\n  \\u003ctr\\u003e\\n    \\u003ctd\\u003eJalan\\u003c/td\\u003e\\n\\u003ctd\\u003e {{nama_jalan}}  \\u003c/td\\u003e\\n  \\u003c/tr\\u003e\\n  \\u003ctr style=\\\"background-color: #f2f2f2\\\"\\u003e\\n    \\u003ctd\\u003eStatus\\u003c/td\\u003e\\n\\u003ctd\\u003e {{status}} \\u003c/td\\u003e\\n    \\u003ctd\\u003ePerkerasan\\u003c/td\\u003e\\n\\u003ctd\\u003e {{perkerasan}} \\u003c/td\\u003e\\n  \\u003c/tr\\u003e\\n  \\u003ctr\\u003e\\n    \\u003ctd\\u003eRec. Fungsi\\u003c/td\\u003e\\n\\u003ctd\\u003e {{rec_fungsi}} \\u003c/td\\u003e\\n    \\u003ctd\\u003eKondisi\\u003c/td\\u003e\\n\\u003ctd\\u003e {{kondisi}} \\u003c/td\\u003e\\n  \\u003c/tr\\u003e\\n  \\u003ctr style=\\\"background-color: #f2f2f2\\\"\\u003e\\n    \\u003ctd\\u003ePanjang\\u003c/td\\u003e\\n\\u003ctd\\u003e {{panjang_jl}} km\\u003c/td\\u003e\\n    \\u003ctd\\u003eLebar\\u003c/td\\u003e\\n\\u003ctd\\u003e {{lebar_jln}}  m\\u003c/td\\u003e\\n  \\u003c/tr\\u003e\\n  \\u003ctr\\u003e\\n    \\u003ctd\\u003eBahu Kiri\\u003c/td\\u003e\\n\\u003ctd\\u003e {{bahu_kiri}} m\\u003c/td\\u003e\\n    \\u003ctd\\u003eBahu Kanan\\u003c/td\\u003e\\n    \\u003ctd\\u003e {{bahu_kanan}} m\\u003c/td\\u003e\\n  \\u003c/tr\\u003e\\n  \\u003ctr style=\\\"background-color: #f2f2f2\\\"\\u003e\\n    \\u003ctd\\u003eTrotoar Kiri\\u003c/td\\u003e\\n\\u003ctd\\u003e {{trotoar_ka}} m\\u003c/td\\u003e\\n    \\u003ctd\\u003eTrotoar Kanan\\u003c/td\\u003e\\n\\u003ctd\\u003e {{trotoar_ki}}  m\\u003c/td\\u003e\\n  \\u003c/tr\\u003e\\n  \\u003ctr\\u003e\\n    \\u003ctd\\u003eSaluran Kiri\\u003c/td\\u003e\\n\\u003ctd\\u003e {{slrn_ki}} m \\u003c/td\\u003e\\n    \\u003ctd\\u003eSaluran Kanan\\u003c/td\\u003e\\n\\u003ctd\\u003e {{slrn_ka}} m\\u003c/td\\u003e\\n  \\u003c/tr\\u003e\\n\\u003ctr style=\\\"background-color: #f2f2f2\\\"\\u003e\\n    \\u003ctd\\u003eKoordinat Awal (UTM 50S)\\u003c/td\\u003e\\n\\u003ctd\\u003e {{east_awal}} , {{north_awal}} \\u003c/td\\u003e\\n    \\u003ctd\\u003eKoordinat Akhir (UTM 50S)\\u003c/td\\u003e\\n\\u003ctd\\u003e {{east_akhir}} , {{north_akhr}} \\u003c/td\\u003e\\n  \\u003c/tr\\u003e\\n\\n\\n  \\n\\u003c/tbody\\u003e\\u003c/table\\u003e\\n      \\u003c/div\\u003e\\n    \\u003c/div\\u003e\\n    \\u003cdiv class=\\\"CDB-hook\\\"\\u003e\\n      \\u003cdiv class=\\\"CDB-hook-inner\\\"\\u003e\\u003c/div\\u003e\\n    \\u003c/div\\u003e\\n  \\u003c/div\\u003e\\n\\u003c/div\\u003e\\n\",\"alternative_names\":{},\"width\":226,\"headerColor\":{\"color\":{\"fixed\":\"#35AAE5\",\"opacity\":1}},\"template_type\":\"mustache\"},\"legends\":[{\"conf\":{},\"created_at\":null,\"definition\":{\"categories\":[{\"title\":\"Baik\",\"color\":\"#2fd51c\",\"icon\":\"\"},{\"title\":\"Rusak Berat\",\"color\":\"#d50e07\",\"icon\":\"\"},{\"title\":\"Rusak Ringan\",\"color\":\"#dbd40c\",\"icon\":\"\"}],\"html\":\"\\u003ch3 class=\\\"CDB-Text CDB-Size-small u-upperCase u-bSpace u-altTextColor u-ellipsis \\\" title=\\\"Tipe Jembatan\\\"\\u003e\\n  Kerusakan\\n\\u003c/h3\\u003e\\n\\u003cul\\u003e\\n  \\n    \\u003cli class=\\\"Legend-categoryListItem u-flex u-alignCenter\\\"\\u003e\\n      \\n        \\u003cdiv style=\\\"width: 5%;\\nheight: 2px;\\nmargin-left: 0;\\nbackground-color:#666;\\nborder: 0 none; background: #21c40f;\\\"\\u003e\\u003c/div\\u003e\\n      \\n\\n      \\u003cp class=\\\"Legend-categoryTitle CDB-Text CDB-Size-small u-upperCase u-ellipsis\\\" title=\\\"Baik\\\"\\u003eBaik\\u003c/p\\u003e\\n    \\u003c/li\\u003e\\n  \\n    \\u003cli class=\\\"Legend-categoryListItem u-flex u-alignCenter\\\"\\u003e\\n      \\n         \\u003cdiv style=\\\"width: 5%;\\nheight: 2px;\\nmargin-left: 0;\\nbackground-color:#666;\\nborder: 0 none; background: #cc1313;\\\"\\u003e\\u003c/div\\u003e\\n      \\n\\n      \\u003cp class=\\\"Legend-categoryTitle CDB-Text CDB-Size-small u-upperCase u-ellipsis\\\" title=\\\"Rusak Berat\\\"\\u003eRusak Berat\\u003c/p\\u003e\\n    \\u003c/li\\u003e\\n  \\n    \\u003cli class=\\\"Legend-categoryListItem u-flex u-alignCenter\\\"\\u003e\\n      \\n         \\u003cdiv style=\\\"width: 5%;\\nheight: 2px;\\nmargin-left: 0;\\nbackground-color:#666;\\nborder: 0 none; background: #dfae0c;\\\"\\u003e\\u003c/div\\u003e\\n\\n\\n      \\n\\n      \\u003cp class=\\\"Legend-categoryTitle CDB-Text CDB-Size-small u-upperCase u-ellipsis\\\" title=\\\"Rusak Ringan\\\"\\u003eRusak Ringan\\u003c/p\\u003e\\n    \\u003c/li\\u003e\\n  \\n    \\n  \\n\\u003c/ul\\u003e\\n\"},\"id\":null,\"layer_id\":null,\"post_html\":\"\",\"pre_html\":\"\",\"title\":\"\",\"type\":\"custom\",\"updated_at\":null}]},{\"id\":\"a1acb084-5805-4ace-83bc-02653da2fe47\",\"type\":\"CartoDB\",\"visible\":true,\"options\":{\"layer_name\":\"Jembatan\",\"attribution\":\"\",\"cartocss\":\"#layer {\\n  marker-width: 10;\\n  marker-fill: ramp([tipe], (#011edb, #eb0202), (\\\"Beton\\\", \\\"Kerangka Baja\\\"), \\\"=\\\");\\n  marker-fill-opacity: 1;\\n  marker-file: ramp([tipe], (url(\'https://s3.amazonaws.com/com.cartodb.users-assets.production/maki-icons/water-18.svg\'), url(\'https://s3.amazonaws.com/com.cartodb.users-assets.production/maki-icons/water-18.svg\')), (\\\"Beton\\\", \\\"Kerangka Baja\\\"), \\\"=\\\");\\n  marker-allow-overlap: true;\\n  marker-line-width: 1;\\n  marker-line-color: #FFFFFF;\\n  marker-line-opacity: 1;\\n}\",\"source\":\"a0\"},\"infowindow\":{\"template_name\":\"\",\"fields\":[{\"name\":\"trotoar_ka\",\"title\":true,\"position\":0},{\"name\":\"nama_jemba\",\"title\":true,\"position\":1},{\"name\":\"name_code\",\"title\":true,\"position\":2},{\"name\":\"panjang\",\"title\":true,\"position\":3},{\"name\":\"lebar\",\"title\":true,\"position\":4},{\"name\":\"trotoar_ki\",\"title\":true,\"position\":5},{\"name\":\"tipe\",\"title\":true,\"position\":6},{\"name\":\"id_foto_aw\",\"title\":true,\"position\":7},{\"name\":\"id_foto_ak\",\"title\":true,\"position\":8},{\"name\":\"id_jembata\",\"title\":true,\"position\":9},{\"name\":\"url_awal\",\"title\":true,\"position\":10},{\"name\":\"url_akhir\",\"title\":true,\"position\":11}],\"maxHeight\":180,\"template\":\"\\u003cdiv class=\\\"CDB-infowindow CDB-infowindow--light\\\" style=\\\"width:600px\\\"\\u003e\\n  \\u003cdiv class=\\\"CDB-infowindow-close js-close\\\"\\u003e\\u003c/div\\u003e\\n  \\u003cdiv class=\\\"CDB-infowindow-container\\\"\\u003e\\n    \\u003cdiv class=\\\"CDB-infowindow-bg\\\"\\u003e\\n      \\u003cdiv class=\\\"CDB-infowindow-inner js-inner\\\"\\u003e\\n        \\u003ctable style=\\\"border-collapse: collapse ; width: 100%\\\"\\u003e\\n \\n  \\u003ctbody\\u003e\\u003ctr\\u003e\\n   \\n\\u003ctd colspan=\\\"2\\\" style=\\\"vertical-align: middle ; text-align: center\\\"\\u003e\\u003cimg src=\\\"{{url_awal}}\\\" style=\\\"padding: 5px\\\" height=\\\"200px\\\"\\u003e\\u003c/td\\u003e\\n\\u003ctd colspan=\\\"2\\\" style=\\\"vertical-align: middle ; text-align: center\\\"\\u003e\\u003cimg src=\\\"{{url_akhir}}\\\" style=\\\"padding: 5px\\\" height=\\\"200px\\\"\\u003e\\u003c/td\\u003e\\n  \\u003c/tr\\u003e\\n  \\u003ctr style=\\\"background-color: #f2f2f2\\\"\\u003e\\n \\u003ctd\\u003eKode\\u003c/td\\u003e\\n\\u003ctd\\u003e {{name_code}} \\u003c/td\\u003e\\n    \\u003ctd\\u003eNama\\u003c/td\\u003e\\n\\u003ctd\\u003e {{nama_jemba}}  \\u003c/td\\u003e\\n  \\u003c/tr\\u003e\\n  \\u003ctr\\u003e\\n    \\u003ctd\\u003eTipe\\u003c/td\\u003e\\n\\u003ctd\\u003e {{tipe}}  \\u003c/td\\u003e\\n  \\u003c/tr\\u003e\\n  \\u003ctr style=\\\"background-color: #f2f2f2\\\"\\u003e\\n    \\u003ctd\\u003ePanjang\\u003c/td\\u003e\\n\\u003ctd\\u003e {{panjang}} m\\u003c/td\\u003e\\n    \\u003ctd\\u003eLebar\\u003c/td\\u003e\\n\\u003ctd\\u003e {{lebar}} m\\u003c/td\\u003e\\n  \\u003c/tr\\u003e\\n  \\u003ctr\\u003e\\n    \\u003ctd\\u003eTrotoar Kanan\\u003c/td\\u003e\\n\\u003ctd\\u003e {{trotoar_ka}} m \\u003c/td\\u003e\\n    \\u003ctd\\u003eTrotoar Kiri\\u003c/td\\u003e\\n\\u003ctd\\u003e {{trotoar_ki}} m \\u003c/td\\u003e\\n  \\u003c/tr\\u003e \\n\\n  \\n\\u003c/tbody\\u003e\\u003c/table\\u003e\\n      \\u003c/div\\u003e\\n    \\u003c/div\\u003e\\n    \\u003cdiv class=\\\"CDB-hook\\\"\\u003e\\n      \\u003cdiv class=\\\"CDB-hook-inner\\\"\\u003e\\u003c/div\\u003e\\n    \\u003c/div\\u003e\\n  \\u003c/div\\u003e\\n\\u003c/div\\u003e\\n\",\"alternative_names\":{},\"width\":226,\"headerColor\":{\"color\":{\"fixed\":\"#35AAE5\",\"opacity\":1}},\"template_type\":\"mustache\"},\"legends\":[{\"conf\":{},\"created_at\":null,\"definition\":{},\"id\":null,\"layer_id\":null,\"post_html\":\"\",\"pre_html\":\"\",\"title\":\"Jenis\",\"type\":\"category\",\"updated_at\":null}]}],\"map_provider\":\"leaflet\",\"overlays\":[{\"type\":\"share\",\"order\":1,\"options\":{\"display\":true,\"x\":20,\"y\":20},\"template\":\"\"},{\"type\":\"search\",\"order\":2,\"options\":{\"display\":true,\"x\":60,\"y\":20},\"template\":\"\"},{\"type\":\"zoom\",\"order\":3,\"options\":{\"display\":true,\"x\":20,\"y\":20},\"template\":\"\\u003ca href=\\\"#zoom_in\\\" class=\\\"zoom_in\\\"\\u003e+\\u003c/a\\u003e \\u003ca href=\\\"#zoom_out\\\" class=\\\"zoom_out\\\"\\u003e-\\u003c/a\\u003e\"},{\"type\":\"loader\",\"order\":4,\"options\":{\"display\":true,\"x\":20,\"y\":150},\"template\":\"\\u003cdiv class=\\\"loader\\\" original-title=\\\"\\\"\\u003e\\u003c/div\\u003e\"},{\"type\":\"logo\",\"order\":5,\"options\":{\"display\":true,\"x\":10,\"y\":40},\"template\":\"\"}],\"title\":\"Peta Jalan dan Jembatan Kab. Sumba Barat Daya\",\"updated_at\":\"2019-11-09 18:59:58 UTC\",\"user\":{\"fullname\":\"prod\",\"avatar_url\":\"/assets/unversioned/images/avatars/avatar_marker_red.png\",\"profile_url\":\"https://layers.gis-sbd.com/user/prod\"},\"version\":\"3.0.0\",\"widgets\":[{\"id\":\"ae28948a-edad-4192-adc0-6e8345936cf3\",\"type\":\"category\",\"title\":\"Ruas (km)\",\"order\":0,\"layer_id\":\"a985ba1c-46ff-4b19-bb5f-cb29ed24fed2\",\"options\":{\"column\":\"nama_ruas\",\"aggregation_column\":\"nama_ruas\",\"aggregation\":\"count\",\"column_type\":\"string\",\"sync_on_bbox_change\":true},\"style\":{\"widget_style\":{\"definition\":{\"color\":{\"fixed\":\"#9DE0AD\",\"opacity\":1}},\"widget_color_changed\":false},\"auto_style\":{\"custom\":false,\"allowed\":true}},\"source\":{\"id\":\"b0\"}},{\"id\":\"789f311a-f29a-4d2c-ba84-dfd43ee1da04\",\"type\":\"category\",\"title\":\"Perkerasan (km)\",\"order\":1,\"layer_id\":\"a985ba1c-46ff-4b19-bb5f-cb29ed24fed2\",\"options\":{\"column\":\"perkerasan\",\"aggregation_column\":\"panjang_jl\",\"aggregation\":\"sum\",\"column_type\":\"string\",\"sync_on_bbox_change\":true,\"schema\":{},\"aggregate\":{\"operator\":\"sum\",\"attribute\":\"panjang_jl\",\"visible\":true}},\"style\":{\"widget_style\":{\"definition\":{\"color\":{\"fixed\":\"#9DE0AD\",\"opacity\":1}},\"widget_color_changed\":false},\"auto_style\":{\"custom\":true,\"allowed\":true,\"definition\":{\"color\":{\"attribute\":\"perkerasan\",\"quantification\":\"category\",\"range\":[\"#5F4690\",\"#1D6996\",\"#38A6A5\",\"#0F8554\",\"#73AF48\",\"#EDAD08\",\"#E17C05\",\"#CC503E\",\"#94346E\",\"#6F4070\",\"#666666\"]}}}},\"source\":{\"id\":\"b0\"}},{\"id\":\"60e67d1c-b089-4368-a82e-51cc4f07e036\",\"type\":\"category\",\"title\":\"Kondisi (km)\",\"order\":2,\"layer_id\":\"a985ba1c-46ff-4b19-bb5f-cb29ed24fed2\",\"options\":{\"column\":\"kondisi\",\"aggregation_column\":\"panjang_jl\",\"aggregation\":\"sum\",\"column_type\":\"string\",\"sync_on_bbox_change\":true,\"schema\":{},\"aggregate\":{\"operator\":\"sum\",\"attribute\":\"panjang_jl\",\"visible\":true},\"suffix\":\"\",\"prefix\":\"\"},\"style\":{\"widget_style\":{\"definition\":{\"color\":{\"fixed\":\"#9DE0AD\",\"opacity\":1}},\"widget_color_changed\":false},\"auto_style\":{\"custom\":true,\"allowed\":true,\"definition\":{\"color\":{\"attribute\":\"kondisi\",\"quantification\":\"category\",\"range\":[\"#5F4690\",\"#1D6996\",\"#38A6A5\",\"#0F8554\",\"#73AF48\",\"#EDAD08\",\"#E17C05\",\"#CC503E\",\"#94346E\",\"#6F4070\",\"#666666\"]}}}},\"source\":{\"id\":\"b0\"}},{\"id\":\"badfa297-2f02-46bc-b5d7-ed9b97072048\",\"type\":\"category\",\"title\":\"Status (km)\",\"order\":3,\"layer_id\":\"a985ba1c-46ff-4b19-bb5f-cb29ed24fed2\",\"options\":{\"column\":\"panjang_jl\",\"aggregation_column\":\"panjang_jl\",\"aggregation\":\"sum\",\"column_type\":\"string\",\"sync_on_bbox_change\":true,\"schema\":{},\"aggregate\":{\"operator\":\"sum\",\"attribute\":\"panjang_jl\",\"visible\":true},\"suffix\":\"\",\"prefix\":\"\"},\"style\":{\"widget_style\":{\"definition\":{\"color\":{\"fixed\":\"#9DE0AD\",\"opacity\":1}},\"widget_color_changed\":false},\"auto_style\":{\"custom\":true,\"allowed\":true,\"definition\":{\"color\":{\"attribute\":\"panjang_jl\",\"quantification\":\"category\",\"range\":[\"#5F4690\",\"#1D6996\",\"#38A6A5\",\"#0F8554\",\"#73AF48\",\"#EDAD08\",\"#E17C05\",\"#CC503E\",\"#94346E\",\"#6F4070\",\"#666666\"]}}}},\"source\":{\"id\":\"b0\"}}],\"zoom\":10,\"analyses\":[{\"id\":\"b0\",\"type\":\"source\",\"options\":{\"table_name\":\"ruas_jalan_sumba_bd\",\"simple_geom\":\"line\"}},{\"id\":\"a0\",\"type\":\"source\",\"options\":{\"table_name\":\"jembatan_1\",\"simple_geom\":\"point\"}}]}');
        window.layersData = JSON.parse('[{\"id\":\"146bc0cc-1e1d-429b-b947-d303af69895e\",\"options\":{}},{\"id\":\"a985ba1c-46ff-4b19-bb5f-cb29ed24fed2\",\"options\":{\"style_version\":\"2.1.1\",\"tile_style\":\"#layer {\\n  line-width: 1.5;\\n  line-color: ramp([kondisi], (#2fd51c, #d50e07, #dbd40c), (\\\"Baik\\\", \\\"Rusak Berat\\\", \\\"Rusak Ringan\\\"), \\\"=\\\");\\n}\"}},{\"id\":\"a1acb084-5805-4ace-83bc-02653da2fe47\",\"options\":{\"style_version\":\"2.1.1\",\"tile_style\":\"#layer {\\n  marker-width: 10;\\n  marker-fill: ramp([tipe], (#011edb, #eb0202), (\\\"Beton\\\", \\\"Kerangka Baja\\\"), \\\"=\\\");\\n  marker-fill-opacity: 1;\\n  marker-file: ramp([tipe], (url(\'https://s3.amazonaws.com/com.cartodb.users-assets.production/maki-icons/water-18.svg\'), url(\'https://s3.amazonaws.com/com.cartodb.users-assets.production/maki-icons/water-18.svg\')), (\\\"Beton\\\", \\\"Kerangka Baja\\\"), \\\"=\\\");\\n  marker-allow-overlap: true;\\n  marker-line-width: 1;\\n  marker-line-color: #FFFFFF;\\n  marker-line-opacity: 1;\\n}\"}}]');
        window.stateJSON = JSON.parse('{\"map\":{\"ne\":[-9.86604011578546,118.8494110107422],\"sw\":[-9.243770374375032,119.56695556640626],\"center\":[-9.555047447251532,119.20818328857422],\"zoom\":11},\"widgets\":{\"ae28948a-edad-4192-adc0-6e8345936cf3\":{\"collapsed\":true},\"789f311a-f29a-4d2c-ba84-dfd43ee1da04\":{\"collapsed\":true},\"60e67d1c-b089-4368-a82e-51cc4f07e036\":{\"collapsed\":true},\"badfa297-2f02-46bc-b5d7-ed9b97072048\":{\"collapsed\":true}}}');
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
                    height : "500px"
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