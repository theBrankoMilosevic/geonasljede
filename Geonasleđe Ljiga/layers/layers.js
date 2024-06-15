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

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Ljig_2 = new ol.format.GeoJSON();
var features_Ljig_2 = format_Ljig_2.readFeatures(json_Ljig_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ljig_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ljig_2.addFeatures(features_Ljig_2);
var lyr_Ljig_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ljig_2, 
                style: style_Ljig_2,
                interactive: true,
                title: '<img src="styles/legend/Ljig_2.png" /> Ljig'
            });
var format_Geonaslee_3 = new ol.format.GeoJSON();
var features_Geonaslee_3 = format_Geonaslee_3.readFeatures(json_Geonaslee_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geonaslee_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geonaslee_3.addFeatures(features_Geonaslee_3);
var lyr_Geonaslee_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Geonaslee_3, 
                style: style_Geonaslee_3,
                interactive: true,
                title: '<img src="styles/legend/Geonaslee_3.png" /> Geonasleđe'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_Ljig_2.setVisible(true);lyr_Geonaslee_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OSMStandard_1,lyr_Ljig_2,lyr_Geonaslee_3];
lyr_Ljig_2.set('fieldAliases', {'Opstina': 'Opstina', });
lyr_Geonaslee_3.set('fieldAliases', {'Naziv': 'Naziv', 'Link': 'Link', 'Foto': 'Foto', });
lyr_Ljig_2.set('fieldImages', {'Opstina': 'TextEdit', });
lyr_Geonaslee_3.set('fieldImages', {'Naziv': 'TextEdit', 'Link': 'TextEdit', 'Foto': 'TextEdit', });
lyr_Ljig_2.set('fieldLabels', {'Opstina': 'no label', });
lyr_Geonaslee_3.set('fieldLabels', {'Naziv': 'no label', 'Link': 'no label', 'Foto': 'no label', });
lyr_Geonaslee_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});