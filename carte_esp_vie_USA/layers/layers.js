ol.proj.proj4.register(proj4);
ol.proj.get("ESRI:102008").setExtent([-6827932.056107, -2103696.468978, 6739901.291065, 4987136.871588]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Reprojet_1 = new ol.format.GeoJSON();
var features_Reprojet_1 = format_Reprojet_1.readFeatures(json_Reprojet_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102008'});
var jsonSource_Reprojet_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reprojet_1.addFeatures(features_Reprojet_1);
var lyr_Reprojet_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Reprojet_1, 
                style: style_Reprojet_1,
                interactive: true,
    title: 'Reprojeté<br />\
    <img src="styles/legend/Reprojet_1_0.png" /> 67,6 - 71,4<br />\
    <img src="styles/legend/Reprojet_1_1.png" /> 71,4 - 75,3<br />\
    <img src="styles/legend/Reprojet_1_2.png" /> 75,3 - 79,1<br />\
    <img src="styles/legend/Reprojet_1_3.png" /> 79,1 - 83<br />\
    <img src="styles/legend/Reprojet_1_4.png" /> 83 - 86,8<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Reprojet_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Reprojet_1];
lyr_Reprojet_1.set('fieldAliases', {'fid': 'fid', 'Esperance_de_vie': 'Esperance_de_vie', 'Nom_Conté': 'Nom_Conté', });
lyr_Reprojet_1.set('fieldImages', {'fid': 'TextEdit', 'Esperance_de_vie': 'TextEdit', 'Nom_Conté': 'TextEdit', });
lyr_Reprojet_1.set('fieldLabels', {'fid': 'no label', 'Esperance_de_vie': 'inline label', 'Nom_Conté': 'header label', });
lyr_Reprojet_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});