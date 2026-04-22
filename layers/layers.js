var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleEarth_1 = new ol.layer.Tile({
            'title': 'Google Earth',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_ENDUSERSBENEFICIARIES_2 = new ol.format.GeoJSON();
var features_ENDUSERSBENEFICIARIES_2 = format_ENDUSERSBENEFICIARIES_2.readFeatures(json_ENDUSERSBENEFICIARIES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ENDUSERSBENEFICIARIES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ENDUSERSBENEFICIARIES_2.addFeatures(features_ENDUSERSBENEFICIARIES_2);
var lyr_ENDUSERSBENEFICIARIES_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ENDUSERSBENEFICIARIES_2, 
                style: style_ENDUSERSBENEFICIARIES_2,
                popuplayertitle: 'END USERS/BENEFICIARIES',
                interactive: true,
                title: '<img src="styles/legend/ENDUSERSBENEFICIARIES_2.png" /> END USERS/BENEFICIARIES'
            });
var format_RegionXboundariesphl_admbnda_adm3_psa_namria_20231106_3 = new ol.format.GeoJSON();
var features_RegionXboundariesphl_admbnda_adm3_psa_namria_20231106_3 = format_RegionXboundariesphl_admbnda_adm3_psa_namria_20231106_3.readFeatures(json_RegionXboundariesphl_admbnda_adm3_psa_namria_20231106_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RegionXboundariesphl_admbnda_adm3_psa_namria_20231106_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegionXboundariesphl_admbnda_adm3_psa_namria_20231106_3.addFeatures(features_RegionXboundariesphl_admbnda_adm3_psa_namria_20231106_3);
var lyr_RegionXboundariesphl_admbnda_adm3_psa_namria_20231106_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegionXboundariesphl_admbnda_adm3_psa_namria_20231106_3, 
                style: style_RegionXboundariesphl_admbnda_adm3_psa_namria_20231106_3,
                popuplayertitle: 'Region X boundaries — phl_admbnda_adm3_psa_namria_20231106',
                interactive: true,
                title: '<img src="styles/legend/RegionXboundariesphl_admbnda_adm3_psa_namria_20231106_3.png" /> Region X boundaries — phl_admbnda_adm3_psa_namria_20231106'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleEarth_1.setVisible(true);lyr_ENDUSERSBENEFICIARIES_2.setVisible(true);lyr_RegionXboundariesphl_admbnda_adm3_psa_namria_20231106_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleEarth_1,lyr_ENDUSERSBENEFICIARIES_2,lyr_RegionXboundariesphl_admbnda_adm3_psa_namria_20231106_3];
lyr_ENDUSERSBENEFICIARIES_2.set('fieldAliases', {'NAME OF BENEFICIARIES': 'NAME OF BENEFICIARIES', 'PROVINCE': 'PROVINCE', 'CITY/MUNICIPALITY': 'CITY/MUNICIPALITY', 'BARANGAY': 'BARANGAY', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'AME DISTRIBUTED': 'AME DISTRIBUTED', 'BRAND AND MODEL': 'BRAND AND MODEL', 'YEAR DISTRIBUTED': 'YEAR DISTRIBUTED', 'SUPPLIER': 'SUPPLIER', 'WARRANTY': 'WARRANTY', 'SERVICE ON REPAIRS': 'SERVICE ON REPAIRS', 'PARTS AVAILABILITY': 'PARTS AVAILABILITY', 'TRAINING': 'TRAINING', 'MAINTENANCE OPERATIONS': 'MAINTENANCE OPERATIONS', 'OPERATOR\'S MANUAL': 'OPERATOR\'S MANUAL', 'REMARKS': 'REMARKS', 'LINK OF APPROVED FORM': 'LINK OF APPROVED FORM', });
lyr_RegionXboundariesphl_admbnda_adm3_psa_namria_20231106_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'ADM3_EN': 'ADM3_EN', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'ADM3_REF': 'ADM3_REF', 'ADM3ALT1EN': 'ADM3ALT1EN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'AREA_SQKM': 'AREA_SQKM', });
lyr_ENDUSERSBENEFICIARIES_2.set('fieldImages', {'NAME OF BENEFICIARIES': 'TextEdit', 'PROVINCE': 'TextEdit', 'CITY/MUNICIPALITY': 'TextEdit', 'BARANGAY': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'AME DISTRIBUTED': 'TextEdit', 'BRAND AND MODEL': 'TextEdit', 'YEAR DISTRIBUTED': 'Range', 'SUPPLIER': 'TextEdit', 'WARRANTY': 'TextEdit', 'SERVICE ON REPAIRS': 'TextEdit', 'PARTS AVAILABILITY': 'TextEdit', 'TRAINING': 'TextEdit', 'MAINTENANCE OPERATIONS': 'TextEdit', 'OPERATOR\'S MANUAL': 'TextEdit', 'REMARKS': 'TextEdit', 'LINK OF APPROVED FORM': 'TextEdit', });
lyr_RegionXboundariesphl_admbnda_adm3_psa_namria_20231106_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'ADM3_EN': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'TextEdit', 'validOn': 'TextEdit', 'validTo': 'TextEdit', 'ADM3_REF': 'TextEdit', 'ADM3ALT1EN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'AREA_SQKM': 'TextEdit', });
lyr_ENDUSERSBENEFICIARIES_2.set('fieldLabels', {'NAME OF BENEFICIARIES': 'inline label - always visible', 'PROVINCE': 'inline label - always visible', 'CITY/MUNICIPALITY': 'inline label - always visible', 'BARANGAY': 'inline label - always visible', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', 'AME DISTRIBUTED': 'inline label - always visible', 'BRAND AND MODEL': 'inline label - always visible', 'YEAR DISTRIBUTED': 'inline label - always visible', 'SUPPLIER': 'inline label - always visible', 'WARRANTY': 'inline label - always visible', 'SERVICE ON REPAIRS': 'inline label - always visible', 'PARTS AVAILABILITY': 'inline label - always visible', 'TRAINING': 'inline label - always visible', 'MAINTENANCE OPERATIONS': 'inline label - always visible', 'OPERATOR\'S MANUAL': 'inline label - always visible', 'REMARKS': 'inline label - always visible', 'LINK OF APPROVED FORM': 'inline label - always visible', });
lyr_RegionXboundariesphl_admbnda_adm3_psa_namria_20231106_3.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'inline label - always visible', 'timestamp': 'inline label - always visible', 'begin': 'inline label - always visible', 'end': 'inline label - always visible', 'altitudeMode': 'inline label - always visible', 'tessellate': 'inline label - always visible', 'extrude': 'inline label - always visible', 'visibility': 'inline label - always visible', 'drawOrder': 'inline label - always visible', 'icon': 'inline label - always visible', 'ADM3_EN': 'inline label - always visible', 'ADM3_PCODE': 'inline label - always visible', 'ADM2_EN': 'inline label - always visible', 'ADM2_PCODE': 'inline label - always visible', 'ADM1_EN': 'inline label - always visible', 'ADM1_PCODE': 'inline label - always visible', 'ADM0_EN': 'inline label - always visible', 'ADM0_PCODE': 'inline label - always visible', 'date': 'inline label - always visible', 'validOn': 'inline label - always visible', 'validTo': 'inline label - always visible', 'ADM3_REF': 'inline label - always visible', 'ADM3ALT1EN': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'AREA_SQKM': 'inline label - always visible', });
lyr_RegionXboundariesphl_admbnda_adm3_psa_namria_20231106_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});