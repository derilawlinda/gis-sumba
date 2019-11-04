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
        window.vizJSON = JSON.parse('{\"bounds\":[[-9.7158,118.927],[-9.35715,119.395]],\"center\":\"[-9.536472314031041,119.1611696089035]\",\"datasource\":{\"user_name\":\"dev\",\"maps_api_template\":\"http://demo.zenit.id:80/user/{user}\",\"stat_tag\":\"1890e8ce-04ff-45f8-a250-8ed01f20f08a\",\"template_name\":\"tpl_1890e8ce_04ff_45f8_a250_8ed01f20f08a\"},\"description\":null,\"options\":{\"legends\":true,\"scrollwheel\":true,\"layer_selector\":true,\"dashboard_menu\":false},\"id\":\"1890e8ce-04ff-45f8-a250-8ed01f20f08a\",\"layers\":[{\"id\":\"9a8173ef-18bd-4c77-9057-22112ebcb81f\",\"type\":\"tiled\",\"options\":{\"type\":\"Tiled\",\"urlTemplate\":\"http://mt0.google.com/vt/lyrs=s\\u0026hl=en\\u0026x={x}\\u0026y={y}\\u0026z={z}\",\"minZoom\":0,\"maxZoom\":21,\"name\":\"Custom basemap 1\",\"className\":\"httpmt0googlecomvtlyrsshlenxxyyzz\",\"attribution\":null,\"category\":\"Custom\",\"tms\":false,\"selected\":true,\"val\":\"httpmt0googlecomvtlyrsshlenxxyyzz\",\"label\":\"Custom basemap 1\",\"default\":false,\"highlighted\":true}},{\"id\":\"e37d17c9-2770-49c4-975c-20765077da67\",\"type\":\"CartoDB\",\"visible\":true,\"options\":{\"layer_name\":\"Ruas Jalan\",\"attribution\":\"\",\"cartocss\":\"#layer {\\n  line-width: 1.5;\\n  line-color: ramp([kondisi], (#21c40f, #cc1313, #dfae0c, #060eef), (\\\"Baik\\\", \\\"Rusak Berat\\\", \\\"Rusak Ringan\\\", \\\"Sedang Dikerjakan\\\"), \\\"=\\\");\\n}\",\"source\":\"a0\"},\"infowindow\":{\"template_name\":\"\",\"fields\":[{\"name\":\"objectid\",\"title\":true,\"position\":0},{\"name\":\"id\",\"title\":true,\"position\":1},{\"name\":\"status\",\"title\":true,\"position\":2},{\"name\":\"rec_fungsi\",\"title\":true,\"position\":3},{\"name\":\"nama_ruas\",\"title\":true,\"position\":4},{\"name\":\"nomor_ruas\",\"title\":true,\"position\":5},{\"name\":\"nama_jalan\",\"title\":true,\"position\":6},{\"name\":\"panjang\",\"title\":true,\"position\":7},{\"name\":\"sumber_dan\",\"title\":true,\"position\":8},{\"name\":\"perkerasan\",\"title\":true,\"position\":9},{\"name\":\"kondisi\",\"title\":true,\"position\":10},{\"name\":\"bahu_kanan\",\"title\":true,\"position\":11},{\"name\":\"bahu_kiri\",\"title\":true,\"position\":12},{\"name\":\"slrn_ka\",\"title\":true,\"position\":13},{\"name\":\"slrn_ki\",\"title\":true,\"position\":14},{\"name\":\"median_1\",\"title\":true,\"position\":15},{\"name\":\"trotoar_ka\",\"title\":true,\"position\":16},{\"name\":\"trotoar_ki\",\"title\":true,\"position\":17},{\"name\":\"lebar_jln\",\"title\":true,\"position\":18},{\"name\":\"id_foto_aw\",\"title\":true,\"position\":19},{\"name\":\"id_foto_ak\",\"title\":true,\"position\":20},{\"name\":\"shape_leng\",\"title\":true,\"position\":21},{\"name\":\"kecamatan\",\"title\":true,\"position\":22},{\"name\":\"panjang_jl\",\"title\":true,\"position\":23},{\"name\":\"url_awal\",\"title\":true,\"position\":24},{\"name\":\"url_akhir\",\"title\":true,\"position\":25}],\"maxHeight\":180,\"template\":\"\\u003cdiv class=\\\"CDB-infowindow\\\" style=\\\"width:600px\\\"\\u003e\\n  \\u003cdiv class=\\\"CDB-infowindow-close js-close\\\"\\u003e\\u003c/div\\u003e\\n  \\u003cdiv class=\\\"CDB-infowindow-container\\\"\\u003e\\n    \\u003cdiv class=\\\"CDB-infowindow-bg\\\"\\u003e\\n      \\u003cdiv class=\\\"CDB-infowindow-inner js-inner\\\"\\u003e\\n        \\u003ctable style=\\\"border-collapse: collapse ; width: 100%\\\"\\u003e\\n \\n  \\u003ctbody\\u003e\\u003ctr\\u003e\\n    \\n\\u003ctd colspan=\\\"2\\\" style=\\\"vertical-align: middle ; text-align: center\\\"\\u003e\\u003cimg src=\\\"{{url_awal}}\\\" style=\\\"padding: 5px\\\" height=\\\"200px\\\"\\u003e\\u003c/td\\u003e\\n \\n\\u003ctd colspan=\\\"2\\\" style=\\\"vertical-align: middle ; text-align: center\\\"\\u003e\\u003cimg src=\\\"{{url_akhir}}\\\" style=\\\"padding: 5px\\\" height=\\\"200px\\\"\\u003e\\u003c/td\\u003e\\n \\u003c/tr\\u003e\\n\\u003ctr style=\\\"background-color: #f2f2f2\\\"\\u003e\\n\\u003ctd\\u003eNomor Ruas\\u003c/td\\u003e\\n\\u003ctd\\u003e {{nomor_ruas}} \\u003c/td\\u003e\\n \\u003ctd\\u003eNama Ruas\\u003c/td\\u003e\\n\\u003ctd\\u003e {{nama_ruas}}  \\u003c/td\\u003e\\n\\u003c/tr\\u003e\\n  \\u003ctr style=\\\"background-color: #f2f2f2\\\"\\u003e\\n   \\n  \\u003c/tr\\u003e\\n  \\u003ctr\\u003e\\n    \\u003ctd\\u003eJalan\\u003c/td\\u003e\\n\\u003ctd\\u003e {{nama_jalan}}  \\u003c/td\\u003e\\n  \\u003c/tr\\u003e\\n  \\u003ctr style=\\\"background-color: #f2f2f2\\\"\\u003e\\n    \\u003ctd\\u003eStatus\\u003c/td\\u003e\\n\\u003ctd\\u003e {{status}} \\u003c/td\\u003e\\n    \\u003ctd\\u003ePerkerasan\\u003c/td\\u003e\\n\\u003ctd\\u003e {{perkerasan}} \\u003c/td\\u003e\\n  \\u003c/tr\\u003e\\n  \\u003ctr\\u003e\\n    \\u003ctd\\u003eRec. Fungsi\\u003c/td\\u003e\\n\\u003ctd\\u003e {{rec_fungsi}} \\u003c/td\\u003e\\n    \\u003ctd\\u003eKondisi\\u003c/td\\u003e\\n\\u003ctd\\u003e {{kondisi}} \\u003c/td\\u003e\\n  \\u003c/tr\\u003e\\n  \\u003ctr style=\\\"background-color: #f2f2f2\\\"\\u003e\\n    \\u003ctd\\u003ePanjang\\u003c/td\\u003e\\n\\u003ctd\\u003e {{panjang_jl}} km\\u003c/td\\u003e\\n    \\u003ctd\\u003eLebar\\u003c/td\\u003e\\n\\u003ctd\\u003e {{lebar_jln}}  m\\u003c/td\\u003e\\n  \\u003c/tr\\u003e\\n  \\u003ctr\\u003e\\n    \\u003ctd\\u003eBahu Kiri\\u003c/td\\u003e\\n\\u003ctd\\u003e {{bahu_kiri}} m\\u003c/td\\u003e\\n    \\u003ctd\\u003eBahu Kanan\\u003c/td\\u003e\\n    \\u003ctd\\u003e {{bahu_kanan}} m\\u003c/td\\u003e\\n  \\u003c/tr\\u003e\\n  \\u003ctr style=\\\"background-color: #f2f2f2\\\"\\u003e\\n    \\u003ctd\\u003eTrotoar Kiri\\u003c/td\\u003e\\n\\u003ctd\\u003e {{trotoar_ka}} m\\u003c/td\\u003e\\n    \\u003ctd\\u003eTrotoar Kanan\\u003c/td\\u003e\\n\\u003ctd\\u003e {{trotoar_ki}}  m\\u003c/td\\u003e\\n  \\u003c/tr\\u003e\\n  \\u003ctr\\u003e\\n    \\u003ctd\\u003eSaluran Kiri\\u003c/td\\u003e\\n\\u003ctd\\u003e {{slrn_ki}} m \\u003c/td\\u003e\\n    \\u003ctd\\u003eSaluran Kanan\\u003c/td\\u003e\\n\\u003ctd\\u003e {{slrn_ka}} m\\u003c/td\\u003e\\n  \\u003c/tr\\u003e\\n\\n  \\n\\u003c/tbody\\u003e\\u003c/table\\u003e\\n      \\u003c/div\\u003e\\n    \\u003c/div\\u003e\\n    \\u003cdiv class=\\\"CDB-hook\\\"\\u003e\\n      \\u003cdiv class=\\\"CDB-hook-inner\\\"\\u003e\\u003c/div\\u003e\\n    \\u003c/div\\u003e\\n  \\u003c/div\\u003e\\n\\u003c/div\\u003e\\n\",\"alternative_names\":{\"nama_jalan\":\"Jalan\",\"perkerasan\":\"Perkerasan\",\"nama_ruas\":\"Ruas\",\"objectid\":\"\"},\"width\":226,\"headerColor\":{\"color\":{\"fixed\":\"#35AAE5\",\"opacity\":1}},\"template_type\":\"mustache\"},\"legends\":[{\"conf\":{},\"created_at\":null,\"definition\":{\"categories\":[{\"title\":\"Baik\",\"color\":\"#21c40f\",\"icon\":\"\"},{\"title\":\"Rusak Berat\",\"color\":\"#cc1313\",\"icon\":\"\"},{\"title\":\"Rusak Ringan\",\"color\":\"#dfae0c\",\"icon\":\"\"},{\"title\":\"Sedang Dikerjakan\",\"color\":\"#060eef\",\"icon\":\"\"}],\"html\":\"\\u003ch3 class=\\\"CDB-Text CDB-Size-small u-upperCase u-bSpace u-altTextColor u-ellipsis \\\" title=\\\"Tipe Jembatan\\\"\\u003e\\n  Kerusakan\\n\\u003c/h3\\u003e\\n\\u003cul\\u003e\\n  \\n    \\u003cli class=\\\"Legend-categoryListItem u-flex u-alignCenter\\\"\\u003e\\n      \\n        \\u003cdiv style=\\\"width: 5%;\\nheight: 2px;\\nmargin-left: 0;\\nbackground-color:#666;\\nborder: 0 none; background: #21c40f;\\\"\\u003e\\u003c/div\\u003e\\n      \\n\\n      \\u003cp class=\\\"Legend-categoryTitle CDB-Text CDB-Size-small u-upperCase u-ellipsis\\\" title=\\\"Baik\\\"\\u003eBaik\\u003c/p\\u003e\\n    \\u003c/li\\u003e\\n  \\n    \\u003cli class=\\\"Legend-categoryListItem u-flex u-alignCenter\\\"\\u003e\\n      \\n         \\u003cdiv style=\\\"width: 5%;\\nheight: 2px;\\nmargin-left: 0;\\nbackground-color:#666;\\nborder: 0 none; background: #cc1313;\\\"\\u003e\\u003c/div\\u003e\\n      \\n\\n      \\u003cp class=\\\"Legend-categoryTitle CDB-Text CDB-Size-small u-upperCase u-ellipsis\\\" title=\\\"Rusak Berat\\\"\\u003eRusak Berat\\u003c/p\\u003e\\n    \\u003c/li\\u003e\\n  \\n    \\u003cli class=\\\"Legend-categoryListItem u-flex u-alignCenter\\\"\\u003e\\n      \\n         \\u003cdiv style=\\\"width: 5%;\\nheight: 2px;\\nmargin-left: 0;\\nbackground-color:#666;\\nborder: 0 none; background: #dfae0c;\\\"\\u003e\\u003c/div\\u003e\\n\\n\\n      \\n\\n      \\u003cp class=\\\"Legend-categoryTitle CDB-Text CDB-Size-small u-upperCase u-ellipsis\\\" title=\\\"Rusak Ringan\\\"\\u003eRusak Ringan\\u003c/p\\u003e\\n    \\u003c/li\\u003e\\n  \\n    \\u003cli class=\\\"Legend-categoryListItem u-flex u-alignCenter\\\"\\u003e\\n      \\n        \\n         \\u003cdiv style=\\\"width: 5%;\\nheight: 2px;\\nmargin-left: 0;\\nbackground-color:#060eef;\\nborder: 0 none; background: #060eef;\\\"\\u003e\\u003c/div\\u003e\\n      \\n\\n      \\u003cp class=\\\"Legend-categoryTitle CDB-Text CDB-Size-small u-upperCase u-ellipsis\\\" title=\\\"Sedang Dikerjakan\\\"\\u003eSedang Dikerjakan\\u003c/p\\u003e\\n    \\u003c/li\\u003e\\n  \\n\\u003c/ul\\u003e\\n\"},\"id\":null,\"layer_id\":null,\"post_html\":\"\",\"pre_html\":\"\",\"title\":\"\",\"type\":\"custom\",\"updated_at\":null}]},{\"id\":\"3c92fcaa-7bbd-4ccc-8488-6eaffb78a330\",\"type\":\"CartoDB\",\"visible\":true,\"options\":{\"layer_name\":\"Jembatan\",\"attribution\":\"\",\"cartocss\":\"#layer {\\n  marker-width: 16;\\n  marker-fill: ramp([tipe], (#4d00e4, #d72a07), (\\\"Beton\\\", \\\"Kerangka Baja\\\"), \\\"=\\\");\\n  marker-fill-opacity: 1;\\n  marker-file: ramp([tipe], (url(\'https://s3.amazonaws.com/com.cartodb.users-assets.production/maki-icons/marker-18.svg\'), url(\'https://s3.amazonaws.com/com.cartodb.users-assets.production/maki-icons/marker-18.svg\')), (\\\"Beton\\\", \\\"Kerangka Baja\\\"), \\\"=\\\");\\n  marker-allow-overlap: true;\\n  marker-line-width: 2;\\n  marker-line-color: #FFFFFF;\\n  marker-line-opacity: 1;\\n}\",\"source\":\"b0\"},\"infowindow\":{\"template_name\":\"\",\"maxHeight\":180,\"template\":\"\\u003cdiv class=\\\"CDB-infowindow CDB-infowindow--light\\\" style=\\\"width:575px\\\"\\u003e\\n  \\u003cdiv class=\\\"CDB-infowindow-close js-close\\\"\\u003e\\u003c/div\\u003e\\n  \\u003cdiv class=\\\"CDB-infowindow-container\\\"\\u003e\\n    \\u003cdiv class=\\\"CDB-infowindow-bg\\\"\\u003e\\n      \\u003cdiv class=\\\"CDB-infowindow-inner js-inner\\\"\\u003e\\n        \\u003ctable style=\\\"border-collapse: collapse ; width: 100%\\\"\\u003e\\n \\n  \\u003ctbody\\u003e\\u003ctr\\u003e\\n   \\n\\u003ctd colspan=\\\"2\\\" style=\\\"vertical-align: middle ; text-align: center\\\"\\u003e\\u003cimg src=\\\"{{url_awal}}\\\" style=\\\"padding: 5px\\\" height=\\\"200px\\\"\\u003e\\u003c/td\\u003e\\n \\n\\u003ctd colspan=\\\"2\\\" style=\\\"vertical-align: middle ; text-align: center\\\"\\u003e\\u003cimg src=\\\"{{url_akhir}}\\\" style=\\\"padding: 5px\\\" height=\\\"200px\\\"\\u003e\\u003c/td\\u003e\\n \\u003c/tr\\u003e\\n  \\u003ctr style=\\\"background-color: #f2f2f2\\\"\\u003e\\n \\u003ctd\\u003eKode\\u003c/td\\u003e\\n\\u003ctd\\u003e {{name_code}} \\u003c/td\\u003e\\n    \\u003ctd\\u003eNama\\u003c/td\\u003e\\n\\u003ctd\\u003e {{nama_jemba}}  \\u003c/td\\u003e\\n  \\u003c/tr\\u003e\\n  \\u003ctr\\u003e\\n    \\u003ctd\\u003eTipe\\u003c/td\\u003e\\n\\u003ctd\\u003e {{tipe}}  \\u003c/td\\u003e\\n  \\u003c/tr\\u003e\\n  \\u003ctr style=\\\"background-color: #f2f2f2\\\"\\u003e\\n    \\u003ctd\\u003ePanjang\\u003c/td\\u003e\\n\\u003ctd\\u003e {{panjang}} m\\u003c/td\\u003e\\n    \\u003ctd\\u003eLebar\\u003c/td\\u003e\\n\\u003ctd\\u003e {{lebar}} m\\u003c/td\\u003e\\n  \\u003c/tr\\u003e\\n  \\u003ctr\\u003e\\n    \\u003ctd\\u003eTrotoar Kanan\\u003c/td\\u003e\\n\\u003ctd\\u003e {{trotoar_ka}} m \\u003c/td\\u003e\\n    \\u003ctd\\u003eTrotoar Kiri\\u003c/td\\u003e\\n\\u003ctd\\u003e {{trotoar_ki}} m \\u003c/td\\u003e\\n  \\u003c/tr\\u003e \\n\\n  \\n\\u003c/tbody\\u003e\\u003c/table\\u003e\\n      \\u003c/div\\u003e\\n    \\u003c/div\\u003e\\n    \\u003cdiv class=\\\"CDB-hook\\\"\\u003e\\n      \\u003cdiv class=\\\"CDB-hook-inner\\\"\\u003e\\u003c/div\\u003e\\n    \\u003c/div\\u003e\\n  \\u003c/div\\u003e\\n\\u003c/div\\u003e\\n\",\"alternative_names\":{\"panjang\":\"Panjang\",\"tipe\":\"Tipe\",\"nama_jemba\":\"Nama\",\"lebar\":\"Lebar\"},\"fields\":[{\"name\":\"url_awal\",\"title\":true,\"position\":0},{\"name\":\"nama_jemba\",\"title\":true,\"position\":1},{\"name\":\"tipe\",\"title\":true,\"position\":2},{\"name\":\"panjang\",\"title\":true,\"position\":3},{\"name\":\"lebar\",\"title\":true,\"position\":4},{\"name\":\"name_code\",\"title\":true,\"position\":5},{\"name\":\"trotoar_ka\",\"title\":true,\"position\":6},{\"name\":\"trotoar_ki\",\"title\":true,\"position\":7},{\"name\":\"id_foto_aw\",\"title\":true,\"position\":8},{\"name\":\"id_foto_ak\",\"title\":true,\"position\":9},{\"name\":\"id_jembata\",\"title\":true,\"position\":10},{\"name\":\"url_akhir\",\"title\":true,\"position\":11}],\"width\":226,\"headerColor\":{\"color\":{\"fixed\":\"#35AAE5\",\"opacity\":1}},\"template_type\":\"mustache\"},\"legends\":[{\"conf\":{},\"created_at\":null,\"definition\":{\"categories\":[{\"title\":\"Beton\",\"color\":\"#4d00e4\",\"icon\":\"https://s3.amazonaws.com/com.cartodb.users-assets.production/maki-icons/marker-18.svg\"},{\"title\":\"Kerangka Baja\",\"color\":\"#d72a07\",\"icon\":\"https://s3.amazonaws.com/com.cartodb.users-assets.production/maki-icons/marker-18.svg\"}]},\"id\":null,\"layer_id\":null,\"post_html\":\"\",\"pre_html\":\"\",\"title\":\"Tipe Jembatan\",\"type\":\"custom\",\"updated_at\":null}]}],\"map_provider\":\"leaflet\",\"overlays\":[{\"type\":\"share\",\"order\":1,\"options\":{\"display\":true,\"x\":20,\"y\":20},\"template\":\"\"},{\"type\":\"search\",\"order\":2,\"options\":{\"display\":true,\"x\":60,\"y\":20},\"template\":\"\"},{\"type\":\"zoom\",\"order\":3,\"options\":{\"display\":true,\"x\":20,\"y\":20},\"template\":\"\\u003ca href=\\\"#zoom_in\\\" class=\\\"zoom_in\\\"\\u003e+\\u003c/a\\u003e \\u003ca href=\\\"#zoom_out\\\" class=\\\"zoom_out\\\"\\u003e-\\u003c/a\\u003e\"},{\"type\":\"loader\",\"order\":4,\"options\":{\"display\":true,\"x\":20,\"y\":150},\"template\":\"\\u003cdiv class=\\\"loader\\\" original-title=\\\"\\\"\\u003e\\u003c/div\\u003e\"},{\"type\":\"logo\",\"order\":5,\"options\":{\"display\":true,\"x\":10,\"y\":40},\"template\":\"\"}],\"title\":\"Peta Jalan dan Jembatan Kab. Sumba Barat Daya\",\"updated_at\":\"2019-10-30 16:03:16 UTC\",\"user\":{\"fullname\":\"dev\",\"avatar_url\":\"/assets/unversioned/images/avatars/avatar_mountain_green.png\",\"profile_url\":\"http://demo.zenit.id/user/dev\"},\"version\":\"3.0.0\",\"widgets\":[{\"id\":\"4ad108e5-448d-4e95-abea-7e8f72ee0769\",\"type\":\"category\",\"title\":\"Nama Ruas (km)\",\"order\":-1,\"layer_id\":\"e37d17c9-2770-49c4-975c-20765077da67\",\"options\":{\"column\":\"nama_ruas\",\"aggregation_column\":\"panjang_jl\",\"aggregation\":\"sum\",\"column_type\":\"string\",\"sync_on_bbox_change\":true,\"schema\":{},\"aggregate\":{\"operator\":\"sum\",\"attribute\":\"panjang_jl\",\"visible\":true}},\"style\":{\"widget_style\":{\"definition\":{\"color\":{\"fixed\":\"#9DE0AD\",\"opacity\":1}},\"widget_color_changed\":false},\"auto_style\":{\"custom\":true,\"allowed\":true,\"definition\":{\"color\":{\"attribute\":\"nama_ruas\",\"quantification\":\"category\",\"range\":[\"#5F4690\",\"#1D6996\",\"#38A6A5\",\"#0F8554\",\"#73AF48\",\"#EDAD08\",\"#E17C05\",\"#CC503E\",\"#94346E\",\"#6F4070\",\"#666666\"]}}}},\"source\":{\"id\":\"a0\"}},{\"id\":\"40a4d560-cb30-4a18-a064-dd252fdd3925\",\"type\":\"category\",\"title\":\"Perkerasan (km)\",\"order\":1,\"layer_id\":\"e37d17c9-2770-49c4-975c-20765077da67\",\"options\":{\"column\":\"perkerasan\",\"aggregation_column\":\"panjang_jl\",\"aggregation\":\"sum\",\"column_type\":\"string\",\"sync_on_bbox_change\":true,\"schema\":{},\"aggregate\":{\"operator\":\"sum\",\"attribute\":\"panjang_jl\",\"visible\":true}},\"style\":{\"widget_style\":{\"definition\":{\"color\":{\"fixed\":\"#9DE0AD\",\"opacity\":1}},\"widget_color_changed\":false},\"auto_style\":{\"custom\":true,\"allowed\":true,\"definition\":{\"color\":{\"attribute\":\"perkerasan\",\"quantification\":\"category\",\"range\":[\"#5F4690\",\"#1D6996\",\"#38A6A5\",\"#0F8554\",\"#73AF48\",\"#EDAD08\",\"#E17C05\",\"#CC503E\",\"#94346E\",\"#6F4070\",\"#666666\"]}}}},\"source\":{\"id\":\"a0\"}},{\"id\":\"ee7843bb-252d-44b9-8ab4-4ce360ad44a3\",\"type\":\"category\",\"title\":\"Kondisi (km)\",\"order\":2,\"layer_id\":\"e37d17c9-2770-49c4-975c-20765077da67\",\"options\":{\"column\":\"kondisi\",\"aggregation_column\":\"panjang_jl\",\"aggregation\":\"sum\",\"column_type\":\"string\",\"sync_on_bbox_change\":true,\"schema\":{},\"aggregate\":{\"operator\":\"sum\",\"attribute\":\"panjang_jl\",\"visible\":true}},\"style\":{\"widget_style\":{\"definition\":{\"color\":{\"fixed\":\"#9DE0AD\",\"opacity\":1}},\"widget_color_changed\":false},\"auto_style\":{\"custom\":true,\"allowed\":true,\"definition\":{\"color\":{\"attribute\":\"kondisi\",\"quantification\":\"category\",\"range\":[\"#5F4690\",\"#1D6996\",\"#38A6A5\",\"#0F8554\",\"#73AF48\",\"#EDAD08\",\"#E17C05\",\"#CC503E\",\"#94346E\",\"#6F4070\",\"#666666\"]}}}},\"source\":{\"id\":\"a0\"}},{\"id\":\"fd967212-a696-4078-9cf3-8f38f579bf7e\",\"type\":\"category\",\"title\":\"Status (km)\",\"order\":3,\"layer_id\":\"e37d17c9-2770-49c4-975c-20765077da67\",\"options\":{\"column\":\"status\",\"aggregation_column\":\"panjang_jl\",\"aggregation\":\"sum\",\"column_type\":\"string\",\"sync_on_bbox_change\":true,\"schema\":{},\"aggregate\":{\"operator\":\"sum\",\"attribute\":\"panjang_jl\",\"visible\":true}},\"style\":{\"widget_style\":{\"definition\":{\"color\":{\"fixed\":\"#9DE0AD\",\"opacity\":1}},\"widget_color_changed\":false},\"auto_style\":{\"custom\":true,\"allowed\":true,\"definition\":{\"color\":{\"attribute\":\"status\",\"quantification\":\"category\",\"range\":[\"#5F4690\",\"#1D6996\",\"#38A6A5\",\"#0F8554\",\"#73AF48\",\"#EDAD08\",\"#E17C05\",\"#CC503E\",\"#94346E\",\"#6F4070\",\"#666666\"]}}}},\"source\":{\"id\":\"a0\"}}],\"zoom\":10,\"analyses\":[{\"id\":\"a0\",\"type\":\"source\",\"options\":{\"table_name\":\"ruas_jalan_sumba_bd\",\"simple_geom\":\"line\"}},{\"id\":\"b0\",\"type\":\"source\",\"options\":{\"table_name\":\"jembatan_1\",\"simple_geom\":\"point\"}}]}');
        window.layersData = JSON.parse('[{\"id\":\"9a8173ef-18bd-4c77-9057-22112ebcb81f\",\"options\":{}},{\"id\":\"e37d17c9-2770-49c4-975c-20765077da67\",\"options\":{\"style_version\":\"2.1.1\",\"tile_style\":\"#layer {\\n  line-width: 1.5;\\n  line-color: ramp([kondisi], (#21c40f, #cc1313, #dfae0c, #060eef), (\\\"Baik\\\", \\\"Rusak Berat\\\", \\\"Rusak Ringan\\\", \\\"Sedang Dikerjakan\\\"), \\\"=\\\");\\n}\"}},{\"id\":\"3c92fcaa-7bbd-4ccc-8488-6eaffb78a330\",\"options\":{\"style_version\":\"2.1.1\",\"tile_style\":\"#layer {\\n  marker-width: 16;\\n  marker-fill: ramp([tipe], (#4d00e4, #d72a07), (\\\"Beton\\\", \\\"Kerangka Baja\\\"), \\\"=\\\");\\n  marker-fill-opacity: 1;\\n  marker-file: ramp([tipe], (url(\'https://s3.amazonaws.com/com.cartodb.users-assets.production/maki-icons/marker-18.svg\'), url(\'https://s3.amazonaws.com/com.cartodb.users-assets.production/maki-icons/marker-18.svg\')), (\\\"Beton\\\", \\\"Kerangka Baja\\\"), \\\"=\\\");\\n  marker-allow-overlap: true;\\n  marker-line-width: 2;\\n  marker-line-color: #FFFFFF;\\n  marker-line-opacity: 1;\\n}\"}}]');
        window.stateJSON = JSON.parse('{\"map\":{\"ne\":[-9.746730665726163,118.93409735988826],\"sw\":[-9.377031585459717,119.30763251613828],\"center\":[-9.561931355804065,119.12086493801328],\"zoom\":11},\"widgets\":{\"4ad108e5-448d-4e95-abea-7e8f72ee0769\":{\"collapsed\":true},\"40a4d560-cb30-4a18-a064-dd252fdd3925\":{\"collapsed\":true},\"ee7843bb-252d-44b9-8ab4-4ce360ad44a3\":{\"collapsed\":true},\"fd967212-a696-4078-9cf3-8f38f579bf7e\":{\"collapsed\":true}}}');
        window.authTokens = JSON.parse('[]');
        window.baseURL = 'http://demo.zenit.id/user/dev';
        window.geocoderConfiguration = JSON.parse('{\"provider\":null,\"mapbox\":{\"search_bar_api_key\":\"\"},\"tomtom\":{\"search_bar_api_key\":\"\"}}');
        
        let scripts = [
            { src: "http://demo.zenit.id/assets/1.0.0-assets.109/javascripts/builder_embed.js" }
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