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
        window.vizJSON = JSON.parse('{\"bounds\":[[-9.7158,118.927],[-9.35715,119.395]],\"center\":\"[-9.52672010197287,119.2231750348583]\",\"datasource\":{\"user_name\":\"dev\",\"maps_api_template\":\"http://demo.zenit.id:80/user/{user}\",\"stat_tag\":\"596322e4-b557-4682-a286-5e84bac3541d\",\"template_name\":\"tpl_596322e4_b557_4682_a286_5e84bac3541d\"},\"description\":null,\"options\":{\"legends\":true,\"scrollwheel\":true,\"layer_selector\":true,\"dashboard_menu\":false},\"id\":\"596322e4-b557-4682-a286-5e84bac3541d\",\"layers\":[{\"id\":\"4c175d0d-ecf9-4ad5-bbb1-6d8034f5b11b\",\"type\":\"tiled\",\"options\":{\"type\":\"Tiled\",\"urlTemplate\":\"http://mt0.google.com/vt/lyrs=s\\u0026hl=en\\u0026x={x}\\u0026y={y}\\u0026z={z}\",\"minZoom\":0,\"maxZoom\":21,\"name\":\"Custom basemap 1\",\"className\":\"httpmt0googlecomvtlyrsshlenxxyyzz\",\"attribution\":null,\"category\":\"Custom\",\"tms\":false,\"selected\":true,\"val\":\"httpmt0googlecomvtlyrsshlenxxyyzz\",\"label\":\"Custom basemap 1\",\"default\":false,\"highlighted\":true}},{\"id\":\"68357475-3622-4d13-a149-c836352d2b78\",\"type\":\"CartoDB\",\"visible\":true,\"options\":{\"layer_name\":\"Ruas Jalan\",\"attribution\":\"\",\"cartocss\":\"#layer {\\n  line-width: 1.5;\\n  line-color: ramp([kondisi], (#21c40f, #cc1313, #dfae0c, #060eef), (\\\"Baik\\\", \\\"Rusak Berat\\\", \\\"Rusak Ringan\\\", \\\"Sedang Dikerjakan\\\"), \\\"=\\\");\\n}\",\"source\":\"a0\"},\"infowindow\":{\"template_name\":\"infowindow_header_with_image\",\"fields\":[{\"name\":\"url_awal\",\"title\":true,\"position\":0},{\"name\":\"nama_jalan\",\"title\":true,\"position\":1},{\"name\":\"perkerasan\",\"title\":true,\"position\":2},{\"name\":\"nama_ruas\",\"title\":true,\"position\":3}],\"maxHeight\":180,\"template\":\"\\u003cdiv class=\\\"CDB-infowindow CDB-infowindow--light js-infowindow\\\" data-cover=\\\"true\\\"\\u003e\\n  \\u003cdiv class=\\\"CDB-infowindow-close js-close\\\"\\u003e\\u003c/div\\u003e\\n  \\u003cdiv class=\\\"CDB-infowindow-container\\\"\\u003e\\n    \\u003cdiv class=\\\"CDB-infowindow-header CDB-infowindow-headerMedia js-header js-cover\\\"\\u003e\\n      {{#loading}}\\u003cdiv class=\\\"CDB-Loader js-loader\\\"\\u003e\\u003c/div\\u003e{{/loading}}\\n      \\u003cdiv class=\\\"CDB-infowindow-mediaTitle\\\"\\u003e\\n        {{#content.fields.1}}\\n          {{#value}}\\n            \\u003ch4 class=\\\"CDB-infowindow-title\\\"\\u003e\\n              \\u003cspan\\u003e{{{ value }}}\\u003c/span\\u003e\\n            \\u003c/h4\\u003e\\n          {{/value}}\\n        {{/content.fields.1}}\\n      \\u003c/div\\u003e\\n    \\u003c/div\\u003e\\n    \\u003cdiv class=\\\"CDB-infowindow-inner js-inner\\\"\\u003e\\n      {{#loading}}\\u003cdiv class=\\\"CDB-Loader js-loader\\\"\\u003e\\u003c/div\\u003e{{/loading}}\\n      \\u003cdiv class=\\\"CDB-infowindow-list js-content\\\"\\u003e\\n        {{#content.fields}}\\n          {{#index}}\\n            \\u003cdiv class=\\\"CDB-infowindow-listItem CDB-infowindow-listItem--order{{index}}\\\"\\u003e\\n              {{#title}}\\u003ch5 class=\\\"CDB-infowindow-subtitle\\\"\\u003e{{title}}\\u003c/h5\\u003e{{/title}}\\n              {{#value}}\\u003ch4 class=\\\"CDB-infowindow-title\\\"\\u003e{{{ value }}}\\u003c/h4\\u003e{{/value}}\\n              {{^value}}\\u003ch4 class=\\\"CDB-infowindow-title\\\"\\u003enull\\u003c/h4\\u003e{{/value}}\\n            \\u003c/div\\u003e\\n          {{/index}}\\n        {{/content.fields}}\\n      \\u003c/div\\u003e\\n    \\u003c/div\\u003e\\n    \\u003cdiv class=\\\"CDB-hook\\\"\\u003e\\n      \\u003cdiv class=\\\"CDB-hook-inner\\\"\\u003e\\u003c/div\\u003e\\n    \\u003c/div\\u003e\\n  \\u003c/div\\u003e\\n\\u003c/div\\u003e\\n\",\"alternative_names\":{\"nama_jalan\":\"Jalan\",\"perkerasan\":\"Perkerasan\",\"nama_ruas\":\"Ruas\"},\"width\":226,\"headerColor\":{\"color\":{\"fixed\":\"#35AAE5\",\"opacity\":1}},\"template_type\":\"mustache\"},\"legends\":[{\"conf\":{},\"created_at\":null,\"definition\":{\"categories\":[{\"title\":\"Baik\",\"color\":\"#21c40f\",\"icon\":\"\"},{\"title\":\"Rusak Berat\",\"color\":\"#cc1313\",\"icon\":\"\"},{\"title\":\"Rusak Ringan\",\"color\":\"#dfae0c\",\"icon\":\"\"},{\"title\":\"Sedang Dikerjakan\",\"color\":\"#060eef\",\"icon\":\"\"}],\"html\":\"\\u003ch3 class=\\\"CDB-Text CDB-Size-small u-upperCase u-bSpace u-altTextColor u-ellipsis \\\" title=\\\"Tipe Jembatan\\\"\\u003e\\n  Kerusakan\\n\\u003c/h3\\u003e\\n\\u003cul\\u003e\\n  \\n    \\u003cli class=\\\"Legend-categoryListItem u-flex u-alignCenter\\\"\\u003e\\n      \\n        \\u003cdiv style=\\\"width: 5%;\\nheight: 2px;\\nmargin-left: 0;\\nbackground-color:#666;\\nborder: 0 none; background: #21c40f;\\\"\\u003e\\u003c/div\\u003e\\n      \\n\\n      \\u003cp class=\\\"Legend-categoryTitle CDB-Text CDB-Size-small u-upperCase u-ellipsis\\\" title=\\\"Baik\\\"\\u003eBaik\\u003c/p\\u003e\\n    \\u003c/li\\u003e\\n  \\n    \\u003cli class=\\\"Legend-categoryListItem u-flex u-alignCenter\\\"\\u003e\\n      \\n         \\u003cdiv style=\\\"width: 5%;\\nheight: 2px;\\nmargin-left: 0;\\nbackground-color:#666;\\nborder: 0 none; background: #cc1313;\\\"\\u003e\\u003c/div\\u003e\\n      \\n\\n      \\u003cp class=\\\"Legend-categoryTitle CDB-Text CDB-Size-small u-upperCase u-ellipsis\\\" title=\\\"Rusak Berat\\\"\\u003eRusak Berat\\u003c/p\\u003e\\n    \\u003c/li\\u003e\\n  \\n    \\u003cli class=\\\"Legend-categoryListItem u-flex u-alignCenter\\\"\\u003e\\n      \\n         \\u003cdiv style=\\\"width: 5%;\\nheight: 2px;\\nmargin-left: 0;\\nbackground-color:#666;\\nborder: 0 none; background: #dfae0c;\\\"\\u003e\\u003c/div\\u003e\\n\\n\\n      \\n\\n      \\u003cp class=\\\"Legend-categoryTitle CDB-Text CDB-Size-small u-upperCase u-ellipsis\\\" title=\\\"Rusak Ringan\\\"\\u003eRusak Ringan\\u003c/p\\u003e\\n    \\u003c/li\\u003e\\n  \\n    \\u003cli class=\\\"Legend-categoryListItem u-flex u-alignCenter\\\"\\u003e\\n      \\n        \\n         \\u003cdiv style=\\\"width: 5%;\\nheight: 2px;\\nmargin-left: 0;\\nbackground-color:#060eef;\\nborder: 0 none; background: #060eef;\\\"\\u003e\\u003c/div\\u003e\\n      \\n\\n      \\u003cp class=\\\"Legend-categoryTitle CDB-Text CDB-Size-small u-upperCase u-ellipsis\\\" title=\\\"Sedang Dikerjakan\\\"\\u003eSedang Dikerjakan\\u003c/p\\u003e\\n    \\u003c/li\\u003e\\n  \\n\\u003c/ul\\u003e\\n\"},\"id\":null,\"layer_id\":null,\"post_html\":\"\",\"pre_html\":\"\",\"title\":\"\",\"type\":\"custom\",\"updated_at\":null}]},{\"id\":\"42f44408-d449-44be-9191-fbb2ba530c85\",\"type\":\"CartoDB\",\"visible\":true,\"options\":{\"layer_name\":\"Jembatan\",\"attribution\":\"\",\"cartocss\":\"#layer {\\n  marker-width: 16;\\n  marker-fill: ramp([tipe], (#4d00e4, #d72a07), (\\\"Beton\\\", \\\"Kerangka Baja\\\"), \\\"=\\\");\\n  marker-fill-opacity: 1;\\n  marker-file: ramp([tipe], (url(\'https://s3.amazonaws.com/com.cartodb.users-assets.production/maki-icons/marker-18.svg\'), url(\'https://s3.amazonaws.com/com.cartodb.users-assets.production/maki-icons/marker-18.svg\')), (\\\"Beton\\\", \\\"Kerangka Baja\\\"), \\\"=\\\");\\n  marker-allow-overlap: true;\\n  marker-line-width: 2;\\n  marker-line-color: #FFFFFF;\\n  marker-line-opacity: 1;\\n}\",\"source\":\"b0\"},\"infowindow\":{\"template_name\":\"infowindow_header_with_image\",\"maxHeight\":180,\"template\":\"\\u003cdiv class=\\\"CDB-infowindow CDB-infowindow--light js-infowindow\\\" data-cover=\\\"true\\\"\\u003e\\n  \\u003cdiv class=\\\"CDB-infowindow-close js-close\\\"\\u003e\\u003c/div\\u003e\\n  \\u003cdiv class=\\\"CDB-infowindow-container\\\"\\u003e\\n    \\u003cdiv class=\\\"CDB-infowindow-header CDB-infowindow-headerMedia js-header js-cover\\\"\\u003e\\n      {{#loading}}\\u003cdiv class=\\\"CDB-Loader js-loader\\\"\\u003e\\u003c/div\\u003e{{/loading}}\\n      \\u003cdiv class=\\\"CDB-infowindow-mediaTitle\\\"\\u003e\\n        {{#content.fields.1}}\\n          {{#value}}\\n            \\u003ch4 class=\\\"CDB-infowindow-title\\\"\\u003e\\n              \\u003cspan\\u003e{{{ value }}}\\u003c/span\\u003e\\n            \\u003c/h4\\u003e\\n          {{/value}}\\n        {{/content.fields.1}}\\n      \\u003c/div\\u003e\\n    \\u003c/div\\u003e\\n    \\u003cdiv class=\\\"CDB-infowindow-inner js-inner\\\"\\u003e\\n      {{#loading}}\\u003cdiv class=\\\"CDB-Loader js-loader\\\"\\u003e\\u003c/div\\u003e{{/loading}}\\n      \\u003cdiv class=\\\"CDB-infowindow-list js-content\\\"\\u003e\\n        {{#content.fields}}\\n          {{#index}}\\n            \\u003cdiv class=\\\"CDB-infowindow-listItem CDB-infowindow-listItem--order{{index}}\\\"\\u003e\\n              {{#title}}\\u003ch5 class=\\\"CDB-infowindow-subtitle\\\"\\u003e{{title}}\\u003c/h5\\u003e{{/title}}\\n              {{#value}}\\u003ch4 class=\\\"CDB-infowindow-title\\\"\\u003e{{{ value }}}\\u003c/h4\\u003e{{/value}}\\n              {{^value}}\\u003ch4 class=\\\"CDB-infowindow-title\\\"\\u003enull\\u003c/h4\\u003e{{/value}}\\n            \\u003c/div\\u003e\\n          {{/index}}\\n        {{/content.fields}}\\n      \\u003c/div\\u003e\\n    \\u003c/div\\u003e\\n    \\u003cdiv class=\\\"CDB-hook\\\"\\u003e\\n      \\u003cdiv class=\\\"CDB-hook-inner\\\"\\u003e\\u003c/div\\u003e\\n    \\u003c/div\\u003e\\n  \\u003c/div\\u003e\\n\\u003c/div\\u003e\\n\",\"alternative_names\":{\"panjang\":\"Panjang\",\"tipe\":\"Tipe\",\"nama_jemba\":\"Nama\",\"lebar\":\"Lebar\"},\"fields\":[{\"name\":\"url_awal\",\"title\":true,\"position\":0},{\"name\":\"nama_jemba\",\"title\":true,\"position\":1},{\"name\":\"tipe\",\"title\":true,\"position\":2},{\"name\":\"panjang\",\"title\":true,\"position\":3},{\"name\":\"lebar\",\"title\":true,\"position\":4}],\"width\":226,\"headerColor\":{\"color\":{\"fixed\":\"#35AAE5\",\"opacity\":1}},\"template_type\":\"mustache\"},\"legends\":[{\"conf\":{},\"created_at\":null,\"definition\":{\"categories\":[{\"title\":\"Beton\",\"color\":\"#4d00e4\",\"icon\":\"https://s3.amazonaws.com/com.cartodb.users-assets.production/maki-icons/marker-18.svg\"},{\"title\":\"Kerangka Baja\",\"color\":\"#d72a07\",\"icon\":\"https://s3.amazonaws.com/com.cartodb.users-assets.production/maki-icons/marker-18.svg\"}]},\"id\":null,\"layer_id\":null,\"post_html\":\"\",\"pre_html\":\"\",\"title\":\"Tipe Jembatan\",\"type\":\"custom\",\"updated_at\":null}]}],\"map_provider\":\"leaflet\",\"overlays\":[{\"type\":\"share\",\"order\":1,\"options\":{\"display\":true,\"x\":20,\"y\":20},\"template\":\"\"},{\"type\":\"search\",\"order\":2,\"options\":{\"display\":true,\"x\":60,\"y\":20},\"template\":\"\"},{\"type\":\"zoom\",\"order\":3,\"options\":{\"display\":true,\"x\":20,\"y\":20},\"template\":\"\\u003ca href=\\\"#zoom_in\\\" class=\\\"zoom_in\\\"\\u003e+\\u003c/a\\u003e \\u003ca href=\\\"#zoom_out\\\" class=\\\"zoom_out\\\"\\u003e-\\u003c/a\\u003e\"},{\"type\":\"loader\",\"order\":4,\"options\":{\"display\":true,\"x\":20,\"y\":150},\"template\":\"\\u003cdiv class=\\\"loader\\\" original-title=\\\"\\\"\\u003e\\u003c/div\\u003e\"},{\"type\":\"logo\",\"order\":5,\"options\":{\"display\":true,\"x\":10,\"y\":40},\"template\":\"\"}],\"title\":\"Peta Jalan dan Jembatan Kab. Sumba Barat Daya\",\"updated_at\":\"2019-10-26T12:15:48.845Z\",\"user\":{\"fullname\":\"dev\",\"avatar_url\":\"/assets/unversioned/images/avatars/avatar_mountain_green.png\",\"profile_url\":\"http://demo.zenit.id/user/dev\"},\"version\":\"3.0.0\",\"widgets\":[{\"id\":\"3daaeac4-24b6-4403-92f0-a1520438f697\",\"type\":\"category\",\"title\":\"Nama Ruas (km)\",\"order\":-1,\"layer_id\":\"68357475-3622-4d13-a149-c836352d2b78\",\"options\":{\"column\":\"nama_ruas\",\"aggregation_column\":\"panjang_jl\",\"aggregation\":\"sum\",\"column_type\":\"string\",\"sync_on_bbox_change\":true,\"schema\":{},\"aggregate\":{\"operator\":\"sum\",\"attribute\":\"panjang_jl\",\"visible\":true}},\"style\":{\"widget_style\":{\"definition\":{\"color\":{\"fixed\":\"#9DE0AD\",\"opacity\":1}},\"widget_color_changed\":false},\"auto_style\":{\"custom\":true,\"allowed\":true,\"definition\":{\"color\":{\"attribute\":\"nama_ruas\",\"quantification\":\"category\",\"range\":[\"#5F4690\",\"#1D6996\",\"#38A6A5\",\"#0F8554\",\"#73AF48\",\"#EDAD08\",\"#E17C05\",\"#CC503E\",\"#94346E\",\"#6F4070\",\"#666666\"]}}}},\"source\":{\"id\":\"a0\"}},{\"id\":\"1a0c33a0-e8a7-43f1-b85e-26ead41f3d57\",\"type\":\"category\",\"title\":\"Perkerasan (km)\",\"order\":1,\"layer_id\":\"68357475-3622-4d13-a149-c836352d2b78\",\"options\":{\"column\":\"perkerasan\",\"aggregation_column\":\"panjang_jl\",\"aggregation\":\"sum\",\"column_type\":\"string\",\"sync_on_bbox_change\":true,\"schema\":{},\"aggregate\":{\"operator\":\"sum\",\"attribute\":\"panjang_jl\",\"visible\":true}},\"style\":{\"widget_style\":{\"definition\":{\"color\":{\"fixed\":\"#9DE0AD\",\"opacity\":1}},\"widget_color_changed\":false},\"auto_style\":{\"custom\":true,\"allowed\":true,\"definition\":{\"color\":{\"attribute\":\"perkerasan\",\"quantification\":\"category\",\"range\":[\"#5F4690\",\"#1D6996\",\"#38A6A5\",\"#0F8554\",\"#73AF48\",\"#EDAD08\",\"#E17C05\",\"#CC503E\",\"#94346E\",\"#6F4070\",\"#666666\"]}}}},\"source\":{\"id\":\"a0\"}},{\"id\":\"62ff0415-a810-4437-a5ca-9df3a43e6001\",\"type\":\"category\",\"title\":\"Kondisi (km)\",\"order\":2,\"layer_id\":\"68357475-3622-4d13-a149-c836352d2b78\",\"options\":{\"column\":\"kondisi\",\"aggregation_column\":\"panjang_jl\",\"aggregation\":\"sum\",\"column_type\":\"string\",\"sync_on_bbox_change\":true,\"schema\":{},\"aggregate\":{\"operator\":\"sum\",\"attribute\":\"panjang_jl\",\"visible\":true}},\"style\":{\"widget_style\":{\"definition\":{\"color\":{\"fixed\":\"#9DE0AD\",\"opacity\":1}},\"widget_color_changed\":false},\"auto_style\":{\"custom\":true,\"allowed\":true,\"definition\":{\"color\":{\"attribute\":\"kondisi\",\"quantification\":\"category\",\"range\":[\"#5F4690\",\"#1D6996\",\"#38A6A5\",\"#0F8554\",\"#73AF48\",\"#EDAD08\",\"#E17C05\",\"#CC503E\",\"#94346E\",\"#6F4070\",\"#666666\"]}}}},\"source\":{\"id\":\"a0\"}},{\"id\":\"2a7044cc-1f99-4a1c-81f0-aaa620e3f85d\",\"type\":\"category\",\"title\":\"Status (km)\",\"order\":3,\"layer_id\":\"68357475-3622-4d13-a149-c836352d2b78\",\"options\":{\"column\":\"status\",\"aggregation_column\":\"panjang_jl\",\"aggregation\":\"sum\",\"column_type\":\"string\",\"sync_on_bbox_change\":true,\"schema\":{},\"aggregate\":{\"operator\":\"sum\",\"attribute\":\"panjang_jl\",\"visible\":true}},\"style\":{\"widget_style\":{\"definition\":{\"color\":{\"fixed\":\"#9DE0AD\",\"opacity\":1}},\"widget_color_changed\":false},\"auto_style\":{\"custom\":true,\"allowed\":true,\"definition\":{\"color\":{\"attribute\":\"status\",\"quantification\":\"category\",\"range\":[\"#5F4690\",\"#1D6996\",\"#38A6A5\",\"#0F8554\",\"#73AF48\",\"#EDAD08\",\"#E17C05\",\"#CC503E\",\"#94346E\",\"#6F4070\",\"#666666\"]}}}},\"source\":{\"id\":\"a0\"}}],\"zoom\":10,\"analyses\":[{\"id\":\"a0\",\"type\":\"source\",\"options\":{\"table_name\":\"ruas_jalan_sumba_bd\",\"simple_geom\":\"line\"}},{\"id\":\"b0\",\"type\":\"source\",\"options\":{\"table_name\":\"jembatan_1\",\"simple_geom\":\"point\"}}]}');
        window.layersData = JSON.parse('[{\"id\":\"4c175d0d-ecf9-4ad5-bbb1-6d8034f5b11b\",\"options\":{}},{\"id\":\"68357475-3622-4d13-a149-c836352d2b78\",\"options\":{\"style_version\":\"2.1.1\",\"tile_style\":\"#layer {\\n  line-width: 1.5;\\n  line-color: ramp([kondisi], (#21c40f, #cc1313, #dfae0c, #060eef), (\\\"Baik\\\", \\\"Rusak Berat\\\", \\\"Rusak Ringan\\\", \\\"Sedang Dikerjakan\\\"), \\\"=\\\");\\n}\"}},{\"id\":\"42f44408-d449-44be-9191-fbb2ba530c85\",\"options\":{\"style_version\":\"2.1.1\",\"tile_style\":\"#layer {\\n  marker-width: 16;\\n  marker-fill: ramp([tipe], (#4d00e4, #d72a07), (\\\"Beton\\\", \\\"Kerangka Baja\\\"), \\\"=\\\");\\n  marker-fill-opacity: 1;\\n  marker-file: ramp([tipe], (url(\'https://s3.amazonaws.com/com.cartodb.users-assets.production/maki-icons/marker-18.svg\'), url(\'https://s3.amazonaws.com/com.cartodb.users-assets.production/maki-icons/marker-18.svg\')), (\\\"Beton\\\", \\\"Kerangka Baja\\\"), \\\"=\\\");\\n  marker-allow-overlap: true;\\n  marker-line-width: 2;\\n  marker-line-color: #FFFFFF;\\n  marker-line-opacity: 1;\\n}\"}}]');
        window.stateJSON = JSON.parse('{\"map\":{\"ne\":[-9.803120481283782,118.92837524414064],\"sw\":[-9.433482906116087,119.30191040039064],\"center\":[-9.61835220911148,119.11514282226564],\"zoom\":11},\"widgets\":{\"3daaeac4-24b6-4403-92f0-a1520438f697\":{\"collapsed\":true},\"1a0c33a0-e8a7-43f1-b85e-26ead41f3d57\":{\"collapsed\":true},\"62ff0415-a810-4437-a5ca-9df3a43e6001\":{\"collapsed\":true},\"2a7044cc-1f99-4a1c-81f0-aaa620e3f85d\":{\"collapsed\":true}}}');
        window.authTokens = JSON.parse('[]');
        window.baseURL = 'http://demo.zenit.id/user/dev';
        window.baseURL = JSON.parse('{\"provider\":null,\"mapbox\":{\"search_bar_api_key\":\"\"},\"tomtom\":{\"search_bar_api_key\":\"\"}}');
        
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