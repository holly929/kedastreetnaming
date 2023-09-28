var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_AbetifiBounndary_1 = new ol.format.GeoJSON();
var features_AbetifiBounndary_1 = format_AbetifiBounndary_1.readFeatures(json_AbetifiBounndary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AbetifiBounndary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AbetifiBounndary_1.addFeatures(features_AbetifiBounndary_1);
var lyr_AbetifiBounndary_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AbetifiBounndary_1, 
                style: style_AbetifiBounndary_1,
                interactive: true,
                title: '<img src="styles/legend/AbetifiBounndary_1.png" /> Abetifi Bounndary'
            });
var format_AbetifiStreets_2 = new ol.format.GeoJSON();
var features_AbetifiStreets_2 = format_AbetifiStreets_2.readFeatures(json_AbetifiStreets_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AbetifiStreets_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AbetifiStreets_2.addFeatures(features_AbetifiStreets_2);
var lyr_AbetifiStreets_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AbetifiStreets_2, 
                style: style_AbetifiStreets_2,
                interactive: true,
                title: '<img src="styles/legend/AbetifiStreets_2.png" /> Abetifi Streets'
            });
var format_AbetfiParcelBlocks_3 = new ol.format.GeoJSON();
var features_AbetfiParcelBlocks_3 = format_AbetfiParcelBlocks_3.readFeatures(json_AbetfiParcelBlocks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AbetfiParcelBlocks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AbetfiParcelBlocks_3.addFeatures(features_AbetfiParcelBlocks_3);
var lyr_AbetfiParcelBlocks_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AbetfiParcelBlocks_3, 
                style: style_AbetfiParcelBlocks_3,
                interactive: true,
                title: '<img src="styles/legend/AbetfiParcelBlocks_3.png" /> Abetfi Parcel Blocks'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_AbetifiBounndary_1.setVisible(true);lyr_AbetifiStreets_2.setVisible(true);lyr_AbetfiParcelBlocks_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_AbetifiBounndary_1,lyr_AbetifiStreets_2,lyr_AbetfiParcelBlocks_3];
lyr_AbetifiBounndary_1.set('fieldAliases', {'id': 'id', });
lyr_AbetifiStreets_2.set('fieldAliases', {'id': 'id', 'Street Nam': 'Street Nam', 'Width': 'Width', 'S.Buffer': 'S.Buffer', 'IMPLEMENTD': 'IMPLEMENTD', });
lyr_AbetfiParcelBlocks_3.set('fieldAliases', {'id': 'id', });
lyr_AbetifiBounndary_1.set('fieldImages', {'id': 'TextEdit', });
lyr_AbetifiStreets_2.set('fieldImages', {'id': 'TextEdit', 'Street Nam': 'TextEdit', 'Width': 'TextEdit', 'S.Buffer': 'TextEdit', 'IMPLEMENTD': 'TextEdit', });
lyr_AbetfiParcelBlocks_3.set('fieldImages', {'id': 'TextEdit', });
lyr_AbetifiBounndary_1.set('fieldLabels', {'id': 'no label', });
lyr_AbetifiStreets_2.set('fieldLabels', {'id': 'header label', 'Street Nam': 'no label', 'Width': 'no label', 'S.Buffer': 'no label', 'IMPLEMENTD': 'no label', });
lyr_AbetfiParcelBlocks_3.set('fieldLabels', {'id': 'no label', });
lyr_AbetfiParcelBlocks_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});