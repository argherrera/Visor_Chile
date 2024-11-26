var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DensidadPoblacionalhabkm2_2 = new ol.format.GeoJSON();
var features_DensidadPoblacionalhabkm2_2 = format_DensidadPoblacionalhabkm2_2.readFeatures(json_DensidadPoblacionalhabkm2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DensidadPoblacionalhabkm2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DensidadPoblacionalhabkm2_2.addFeatures(features_DensidadPoblacionalhabkm2_2);
var lyr_DensidadPoblacionalhabkm2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DensidadPoblacionalhabkm2_2, 
                style: style_DensidadPoblacionalhabkm2_2,
                popuplayertitle: "Densidad Poblacional (hab/km2)",
                interactive: true,
    title: 'Densidad Poblacional (hab/km2)<br />\
    <img src="styles/legend/DensidadPoblacionalhabkm2_2_0.png" /> 1 - 21<br />\
    <img src="styles/legend/DensidadPoblacionalhabkm2_2_1.png" /> 22 - 111<br />\
    <img src="styles/legend/DensidadPoblacionalhabkm2_2_2.png" /> 112 - 462<br />'
        });
var format_CuerposdeAgua_3 = new ol.format.GeoJSON();
var features_CuerposdeAgua_3 = format_CuerposdeAgua_3.readFeatures(json_CuerposdeAgua_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CuerposdeAgua_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CuerposdeAgua_3.addFeatures(features_CuerposdeAgua_3);
var lyr_CuerposdeAgua_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CuerposdeAgua_3, 
                style: style_CuerposdeAgua_3,
                popuplayertitle: "Cuerpos de Agua",
                interactive: true,
                title: '<img src="styles/legend/CuerposdeAgua_3.png" /> Cuerpos de Agua'
            });
var format_Rios_4 = new ol.format.GeoJSON();
var features_Rios_4 = format_Rios_4.readFeatures(json_Rios_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rios_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rios_4.addFeatures(features_Rios_4);
var lyr_Rios_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rios_4, 
                style: style_Rios_4,
                popuplayertitle: "Rios",
                interactive: true,
                title: '<img src="styles/legend/Rios_4.png" /> Rios'
            });
var format_RedFerroviaria_5 = new ol.format.GeoJSON();
var features_RedFerroviaria_5 = format_RedFerroviaria_5.readFeatures(json_RedFerroviaria_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedFerroviaria_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedFerroviaria_5.addFeatures(features_RedFerroviaria_5);
var lyr_RedFerroviaria_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RedFerroviaria_5, 
                style: style_RedFerroviaria_5,
                popuplayertitle: "Red Ferroviaria",
                interactive: true,
    title: 'Red Ferroviaria<br />\
    <img src="styles/legend/RedFerroviaria_5_0.png" /> En funcionamiento<br />\
    <img src="styles/legend/RedFerroviaria_5_1.png" /> Inactivo<br />\
    <img src="styles/legend/RedFerroviaria_5_2.png" /> <br />'
        });
var format_RedVial_6 = new ol.format.GeoJSON();
var features_RedVial_6 = format_RedVial_6.readFeatures(json_RedVial_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedVial_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedVial_6.addFeatures(features_RedVial_6);
var lyr_RedVial_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RedVial_6, 
                style: style_RedVial_6,
                popuplayertitle: "Red Vial",
                interactive: true,
    title: 'Red Vial<br />\
    <img src="styles/legend/RedVial_6_0.png" /> Principal<br />\
    <img src="styles/legend/RedVial_6_1.png" /> Secundaria<br />\
    <img src="styles/legend/RedVial_6_2.png" /> <br />'
        });
var format_SantiagodeChile_7 = new ol.format.GeoJSON();
var features_SantiagodeChile_7 = format_SantiagodeChile_7.readFeatures(json_SantiagodeChile_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SantiagodeChile_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantiagodeChile_7.addFeatures(features_SantiagodeChile_7);cluster_SantiagodeChile_7 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_SantiagodeChile_7
});
var lyr_SantiagodeChile_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_SantiagodeChile_7, 
                style: style_SantiagodeChile_7,
                popuplayertitle: "Santiago de Chile",
                interactive: true,
                title: '<img src="styles/legend/SantiagodeChile_7.png" /> Santiago de Chile'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_DensidadPoblacionalhabkm2_2.setVisible(false);lyr_CuerposdeAgua_3.setVisible(false);lyr_Rios_4.setVisible(false);lyr_RedFerroviaria_5.setVisible(false);lyr_RedVial_6.setVisible(false);lyr_SantiagodeChile_7.setVisible(false);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_OSMStandard_1,lyr_DensidadPoblacionalhabkm2_2,lyr_CuerposdeAgua_3,lyr_Rios_4,lyr_RedFerroviaria_5,lyr_RedVial_6,lyr_SantiagodeChile_7];
lyr_DensidadPoblacionalhabkm2_2.set('fieldAliases', {'area_km': 'area_km', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'Region': 'Region', 'Poblacion': 'Poblacion', 'Densidad': 'Densidad', });
lyr_CuerposdeAgua_3.set('fieldAliases', {'Nombre': 'Nombre', 'Tipo': 'Tipo', });
lyr_Rios_4.set('fieldAliases', {'Nombre': 'Nombre', });
lyr_RedFerroviaria_5.set('fieldAliases', {'Activ_2016': 'Activ_2016', 'Servicio': 'Servicio', });
lyr_RedVial_6.set('fieldAliases', {'Clase_Ruta': 'Clase_Ruta', 'Ruta': 'Ruta', 'Nombre': 'Nombre', });
lyr_SantiagodeChile_7.set('fieldAliases', {'Nombre': 'Nombre', });
lyr_DensidadPoblacionalhabkm2_2.set('fieldImages', {'area_km': 'TextEdit', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', 'Region': 'TextEdit', 'Poblacion': 'TextEdit', 'Densidad': 'TextEdit', });
lyr_CuerposdeAgua_3.set('fieldImages', {'Nombre': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_Rios_4.set('fieldImages', {'Nombre': 'TextEdit', });
lyr_RedFerroviaria_5.set('fieldImages', {'Activ_2016': 'TextEdit', 'Servicio': 'TextEdit', });
lyr_RedVial_6.set('fieldImages', {'Clase_Ruta': 'Range', 'Ruta': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_SantiagodeChile_7.set('fieldImages', {'Nombre': 'TextEdit', });
lyr_DensidadPoblacionalhabkm2_2.set('fieldLabels', {'area_km': 'hidden field', 'st_area_sh': 'hidden field', 'st_length_': 'hidden field', 'Region': 'inline label - visible with data', 'Poblacion': 'inline label - visible with data', 'Densidad': 'inline label - visible with data', });
lyr_CuerposdeAgua_3.set('fieldLabels', {'Nombre': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', });
lyr_Rios_4.set('fieldLabels', {'Nombre': 'inline label - visible with data', });
lyr_RedFerroviaria_5.set('fieldLabels', {'Activ_2016': 'hidden field', 'Servicio': 'inline label - visible with data', });
lyr_RedVial_6.set('fieldLabels', {'Clase_Ruta': 'hidden field', 'Ruta': 'hidden field', 'Nombre': 'inline label - visible with data', });
lyr_SantiagodeChile_7.set('fieldLabels', {'Nombre': 'inline label - visible with data', });
lyr_SantiagodeChile_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});