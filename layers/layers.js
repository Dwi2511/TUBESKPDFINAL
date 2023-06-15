ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3857").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SumberDayaAlamKacangTanah_2 = new ol.format.GeoJSON();
var features_SumberDayaAlamKacangTanah_2 = format_SumberDayaAlamKacangTanah_2.readFeatures(json_SumberDayaAlamKacangTanah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SumberDayaAlamKacangTanah_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SumberDayaAlamKacangTanah_2.addFeatures(features_SumberDayaAlamKacangTanah_2);
var lyr_SumberDayaAlamKacangTanah_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SumberDayaAlamKacangTanah_2, 
                style: style_SumberDayaAlamKacangTanah_2,
                interactive: true,
                title: '<img src="styles/legend/SumberDayaAlamKacangTanah_2.png" /> Sumber Daya Alam Kacang Tanah'
            });
var format_SumberDayaAlamUbiJalar_3 = new ol.format.GeoJSON();
var features_SumberDayaAlamUbiJalar_3 = format_SumberDayaAlamUbiJalar_3.readFeatures(json_SumberDayaAlamUbiJalar_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SumberDayaAlamUbiJalar_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SumberDayaAlamUbiJalar_3.addFeatures(features_SumberDayaAlamUbiJalar_3);
var lyr_SumberDayaAlamUbiJalar_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SumberDayaAlamUbiJalar_3, 
                style: style_SumberDayaAlamUbiJalar_3,
                interactive: true,
                title: '<img src="styles/legend/SumberDayaAlamUbiJalar_3.png" /> Sumber Daya Alam Ubi Jalar'
            });
var format_SumberDayaAlamJagung_4 = new ol.format.GeoJSON();
var features_SumberDayaAlamJagung_4 = format_SumberDayaAlamJagung_4.readFeatures(json_SumberDayaAlamJagung_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SumberDayaAlamJagung_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SumberDayaAlamJagung_4.addFeatures(features_SumberDayaAlamJagung_4);
var lyr_SumberDayaAlamJagung_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SumberDayaAlamJagung_4, 
                style: style_SumberDayaAlamJagung_4,
                interactive: true,
                title: '<img src="styles/legend/SumberDayaAlamJagung_4.png" /> Sumber Daya Alam Jagung'
            });
var format_SumberDayaAlamPadi_5 = new ol.format.GeoJSON();
var features_SumberDayaAlamPadi_5 = format_SumberDayaAlamPadi_5.readFeatures(json_SumberDayaAlamPadi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SumberDayaAlamPadi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SumberDayaAlamPadi_5.addFeatures(features_SumberDayaAlamPadi_5);
var lyr_SumberDayaAlamPadi_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SumberDayaAlamPadi_5, 
                style: style_SumberDayaAlamPadi_5,
                interactive: true,
                title: '<img src="styles/legend/SumberDayaAlamPadi_5.png" /> Sumber Daya Alam Padi'
            });
var format_Pemukiman_6 = new ol.format.GeoJSON();
var features_Pemukiman_6 = format_Pemukiman_6.readFeatures(json_Pemukiman_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemukiman_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemukiman_6.addFeatures(features_Pemukiman_6);
var lyr_Pemukiman_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pemukiman_6, 
                style: style_Pemukiman_6,
                interactive: true,
                title: '<img src="styles/legend/Pemukiman_6.png" /> Pemukiman'
            });
var format_BatasAdnimistrasiDesa_7 = new ol.format.GeoJSON();
var features_BatasAdnimistrasiDesa_7 = format_BatasAdnimistrasiDesa_7.readFeatures(json_BatasAdnimistrasiDesa_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdnimistrasiDesa_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdnimistrasiDesa_7.addFeatures(features_BatasAdnimistrasiDesa_7);
var lyr_BatasAdnimistrasiDesa_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasAdnimistrasiDesa_7, 
                style: style_BatasAdnimistrasiDesa_7,
                interactive: true,
                title: '<img src="styles/legend/BatasAdnimistrasiDesa_7.png" /> Batas Adnimistrasi Desa'
            });
var format_KepadatanPenduduk2019JiwaKm2_8 = new ol.format.GeoJSON();
var features_KepadatanPenduduk2019JiwaKm2_8 = format_KepadatanPenduduk2019JiwaKm2_8.readFeatures(json_KepadatanPenduduk2019JiwaKm2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KepadatanPenduduk2019JiwaKm2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KepadatanPenduduk2019JiwaKm2_8.addFeatures(features_KepadatanPenduduk2019JiwaKm2_8);
var lyr_KepadatanPenduduk2019JiwaKm2_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KepadatanPenduduk2019JiwaKm2_8, 
                style: style_KepadatanPenduduk2019JiwaKm2_8,
                interactive: true,
    title: 'Kepadatan Penduduk 2019 (Jiwa/Km2)<br />\
    <img src="styles/legend/KepadatanPenduduk2019JiwaKm2_8_0.png" /> 265 - 577 <br />\
    <img src="styles/legend/KepadatanPenduduk2019JiwaKm2_8_1.png" /> 577 - 827 <br />\
    <img src="styles/legend/KepadatanPenduduk2019JiwaKm2_8_2.png" /> 827 - 1059 <br />\
    <img src="styles/legend/KepadatanPenduduk2019JiwaKm2_8_3.png" /> 1059 - 1406 <br />\
    <img src="styles/legend/KepadatanPenduduk2019JiwaKm2_8_4.png" /> 1406 - 4190 <br />'
        });
var format_KepadatanPenduduk2014JiwaKm2_9 = new ol.format.GeoJSON();
var features_KepadatanPenduduk2014JiwaKm2_9 = format_KepadatanPenduduk2014JiwaKm2_9.readFeatures(json_KepadatanPenduduk2014JiwaKm2_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KepadatanPenduduk2014JiwaKm2_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KepadatanPenduduk2014JiwaKm2_9.addFeatures(features_KepadatanPenduduk2014JiwaKm2_9);
var lyr_KepadatanPenduduk2014JiwaKm2_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KepadatanPenduduk2014JiwaKm2_9, 
                style: style_KepadatanPenduduk2014JiwaKm2_9,
                interactive: true,
    title: 'Kepadatan Penduduk 2014 (Jiwa/Km2)<br />\
    <img src="styles/legend/KepadatanPenduduk2014JiwaKm2_9_0.png" /> 1 - 566 <br />\
    <img src="styles/legend/KepadatanPenduduk2014JiwaKm2_9_1.png" /> 566 - 1011 <br />\
    <img src="styles/legend/KepadatanPenduduk2014JiwaKm2_9_2.png" /> 1011 - 1267 <br />\
    <img src="styles/legend/KepadatanPenduduk2014JiwaKm2_9_3.png" /> 1267 - 1503 <br />\
    <img src="styles/legend/KepadatanPenduduk2014JiwaKm2_9_4.png" /> 1503 - 1805 <br />'
        });
var format_BatasAdministrasiKecamatan_10 = new ol.format.GeoJSON();
var features_BatasAdministrasiKecamatan_10 = format_BatasAdministrasiKecamatan_10.readFeatures(json_BatasAdministrasiKecamatan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiKecamatan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiKecamatan_10.addFeatures(features_BatasAdministrasiKecamatan_10);
var lyr_BatasAdministrasiKecamatan_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasAdministrasiKecamatan_10, 
                style: style_BatasAdministrasiKecamatan_10,
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiKecamatan_10.png" /> Batas Administrasi Kecamatan'
            });
var format_BatasAdministrasiKabupaten_11 = new ol.format.GeoJSON();
var features_BatasAdministrasiKabupaten_11 = format_BatasAdministrasiKabupaten_11.readFeatures(json_BatasAdministrasiKabupaten_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiKabupaten_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiKabupaten_11.addFeatures(features_BatasAdministrasiKabupaten_11);
var lyr_BatasAdministrasiKabupaten_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasAdministrasiKabupaten_11, 
                style: style_BatasAdministrasiKabupaten_11,
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiKabupaten_11.png" /> Batas Administrasi Kabupaten'
            });
var format_Sungai_12 = new ol.format.GeoJSON();
var features_Sungai_12 = format_Sungai_12.readFeatures(json_Sungai_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_12.addFeatures(features_Sungai_12);
var lyr_Sungai_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sungai_12, 
                style: style_Sungai_12,
                interactive: true,
                title: '<img src="styles/legend/Sungai_12.png" /> Sungai'
            });
var format_GarisKontur_13 = new ol.format.GeoJSON();
var features_GarisKontur_13 = format_GarisKontur_13.readFeatures(json_GarisKontur_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GarisKontur_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GarisKontur_13.addFeatures(features_GarisKontur_13);
var lyr_GarisKontur_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GarisKontur_13, 
                style: style_GarisKontur_13,
                interactive: true,
                title: '<img src="styles/legend/GarisKontur_13.png" /> Garis Kontur'
            });
var format_Jalan_14 = new ol.format.GeoJSON();
var features_Jalan_14 = format_Jalan_14.readFeatures(json_Jalan_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_14.addFeatures(features_Jalan_14);
var lyr_Jalan_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_14, 
                style: style_Jalan_14,
                interactive: true,
    title: 'Jalan<br />\
    <img src="styles/legend/Jalan_14_0.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/Jalan_14_1.png" /> Jalan Lain<br />\
    <img src="styles/legend/Jalan_14_2.png" /> Jalan Lokal<br />\
    <img src="styles/legend/Jalan_14_3.png" /> Jalan Setapak<br />\
    <img src="styles/legend/Jalan_14_4.png" /> <br />'
        });
var format_Waduk_15 = new ol.format.GeoJSON();
var features_Waduk_15 = format_Waduk_15.readFeatures(json_Waduk_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waduk_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waduk_15.addFeatures(features_Waduk_15);
var lyr_Waduk_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Waduk_15, 
                style: style_Waduk_15,
                interactive: true,
                title: '<img src="styles/legend/Waduk_15.png" /> Waduk'
            });
var format_KantorPolisi_16 = new ol.format.GeoJSON();
var features_KantorPolisi_16 = format_KantorPolisi_16.readFeatures(json_KantorPolisi_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KantorPolisi_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KantorPolisi_16.addFeatures(features_KantorPolisi_16);
var lyr_KantorPolisi_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KantorPolisi_16, 
                style: style_KantorPolisi_16,
                interactive: true,
                title: '<img src="styles/legend/KantorPolisi_16.png" /> Kantor Polisi'
            });
var format_KantorCamat_17 = new ol.format.GeoJSON();
var features_KantorCamat_17 = format_KantorCamat_17.readFeatures(json_KantorCamat_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KantorCamat_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KantorCamat_17.addFeatures(features_KantorCamat_17);
var lyr_KantorCamat_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KantorCamat_17, 
                style: style_KantorCamat_17,
                interactive: true,
                title: '<img src="styles/legend/KantorCamat_17.png" /> Kantor Camat'
            });
var format_KantorBapati_18 = new ol.format.GeoJSON();
var features_KantorBapati_18 = format_KantorBapati_18.readFeatures(json_KantorBapati_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KantorBapati_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KantorBapati_18.addFeatures(features_KantorBapati_18);
var lyr_KantorBapati_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KantorBapati_18, 
                style: style_KantorBapati_18,
                interactive: true,
                title: '<img src="styles/legend/KantorBapati_18.png" /> Kantor Bapati'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_SumberDayaAlamKacangTanah_2.setVisible(true);lyr_SumberDayaAlamUbiJalar_3.setVisible(true);lyr_SumberDayaAlamJagung_4.setVisible(true);lyr_SumberDayaAlamPadi_5.setVisible(true);lyr_Pemukiman_6.setVisible(true);lyr_BatasAdnimistrasiDesa_7.setVisible(true);lyr_KepadatanPenduduk2019JiwaKm2_8.setVisible(true);lyr_KepadatanPenduduk2014JiwaKm2_9.setVisible(true);lyr_BatasAdministrasiKecamatan_10.setVisible(true);lyr_BatasAdministrasiKabupaten_11.setVisible(true);lyr_Sungai_12.setVisible(true);lyr_GarisKontur_13.setVisible(true);lyr_Jalan_14.setVisible(true);lyr_Waduk_15.setVisible(true);lyr_KantorPolisi_16.setVisible(true);lyr_KantorCamat_17.setVisible(true);lyr_KantorBapati_18.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_SumberDayaAlamKacangTanah_2,lyr_SumberDayaAlamUbiJalar_3,lyr_SumberDayaAlamJagung_4,lyr_SumberDayaAlamPadi_5,lyr_Pemukiman_6,lyr_BatasAdnimistrasiDesa_7,lyr_KepadatanPenduduk2019JiwaKm2_8,lyr_KepadatanPenduduk2014JiwaKm2_9,lyr_BatasAdministrasiKecamatan_10,lyr_BatasAdministrasiKabupaten_11,lyr_Sungai_12,lyr_GarisKontur_13,lyr_Jalan_14,lyr_Waduk_15,lyr_KantorPolisi_16,lyr_KantorCamat_17,lyr_KantorBapati_18];
lyr_SumberDayaAlamKacangTanah_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'L_2014': 'L_2014', 'P_2014': 'P_2014', 'JP_2014': 'JP_2014', 'K_P_2014': 'K_P_2014', 'Luas_2014': 'Luas_2014', 'L_2019': 'L_2019', 'P_2019': 'P_2019', 'JP_2019': 'JP_2019', 'K_P_2019': 'K_P_2019', 'Luas_2019': 'Luas_2019', 'Kacang_tan': 'Kacang_tan', });
lyr_SumberDayaAlamUbiJalar_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'L_2014': 'L_2014', 'P_2014': 'P_2014', 'JP_2014': 'JP_2014', 'K_P_2014': 'K_P_2014', 'Luas_2014': 'Luas_2014', 'L_2019': 'L_2019', 'P_2019': 'P_2019', 'JP_2019': 'JP_2019', 'K_P_2019': 'K_P_2019', 'Luas_2019': 'Luas_2019', 'ubi_jalar': 'ubi_jalar', });
lyr_SumberDayaAlamJagung_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAME_2': 'NAME_2', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'L_2014': 'L_2014', 'P_2014': 'P_2014', 'JP_2014': 'JP_2014', 'K_P_2014': 'K_P_2014', 'Luas_2014': 'Luas_2014', 'L_2019': 'L_2019', 'P_2019': 'P_2019', 'JP_2019': 'JP_2019', 'K_P_2019': 'K_P_2019', 'Luas_2019': 'Luas_2019', 'jagung': 'jagung', });
lyr_SumberDayaAlamPadi_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAME_2': 'NAME_2', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'L_2014': 'L_2014', 'P_2014': 'P_2014', 'JP_2014': 'JP_2014', 'K_P_2014': 'K_P_2014', 'Luas_2014': 'Luas_2014', 'L_2019': 'L_2019', 'P_2019': 'P_2019', 'JP_2019': 'JP_2019', 'K_P_2019': 'K_P_2019', 'Luas_2019': 'Luas_2019', 'padi': 'padi', });
lyr_Pemukiman_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REMARK': 'REMARK', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_BatasAdnimistrasiDesa_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAME_2': 'NAME_2', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_KepadatanPenduduk2019JiwaKm2_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAME_2': 'NAME_2', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'CC_4': 'CC_4', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'L_2019': 'L_2019', 'P_2019': 'P_2019', 'JP_2019': 'JP_2019', 'K_P_2019': 'K_P_2019', 'Luas_2019': 'Luas_2019', });
lyr_KepadatanPenduduk2014JiwaKm2_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAME_2': 'NAME_2', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'L_2014': 'L_2014', 'P_2014': 'P_2014', 'JP_2014': 'JP_2014', 'K_P_2014': 'K_P_2014', 'Luas_2014': 'Luas_2014', });
lyr_BatasAdministrasiKecamatan_10.set('fieldAliases', {'GID_3': 'GID_3', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'NAME_3': 'NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', });
lyr_BatasAdministrasiKabupaten_11.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Sungai_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REMARK': 'REMARK', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_GarisKontur_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'VALKNT': 'VALKNT', 'REMARK': 'REMARK', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Jalan_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REMARK': 'REMARK', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Waduk_15.set('fieldAliases', {'Field1': 'Field1', 'Field2': 'Field2', 'lokasi': 'lokasi', });
lyr_KantorPolisi_16.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', });
lyr_KantorCamat_17.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', });
lyr_KantorBapati_18.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', });
lyr_SumberDayaAlamKacangTanah_2.set('fieldImages', {'OBJECTID': '', 'L_2014': '', 'P_2014': '', 'JP_2014': '', 'K_P_2014': '', 'Luas_2014': '', 'L_2019': '', 'P_2019': '', 'JP_2019': '', 'K_P_2019': '', 'Luas_2019': '', 'Kacang_tan': '', });
lyr_SumberDayaAlamUbiJalar_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'L_2014': 'TextEdit', 'P_2014': 'TextEdit', 'JP_2014': 'TextEdit', 'K_P_2014': 'TextEdit', 'Luas_2014': 'TextEdit', 'L_2019': 'TextEdit', 'P_2019': 'TextEdit', 'JP_2019': 'TextEdit', 'K_P_2019': 'TextEdit', 'Luas_2019': 'TextEdit', 'ubi_jalar': 'TextEdit', });
lyr_SumberDayaAlamJagung_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'L_2014': 'TextEdit', 'P_2014': 'TextEdit', 'JP_2014': 'TextEdit', 'K_P_2014': 'TextEdit', 'Luas_2014': 'TextEdit', 'L_2019': 'TextEdit', 'P_2019': 'TextEdit', 'JP_2019': 'TextEdit', 'K_P_2019': 'TextEdit', 'Luas_2019': 'TextEdit', 'jagung': 'TextEdit', });
lyr_SumberDayaAlamPadi_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'L_2014': 'TextEdit', 'P_2014': 'TextEdit', 'JP_2014': 'TextEdit', 'K_P_2014': 'TextEdit', 'Luas_2014': 'TextEdit', 'L_2019': 'TextEdit', 'P_2019': 'TextEdit', 'JP_2019': 'TextEdit', 'K_P_2019': 'TextEdit', 'Luas_2019': 'TextEdit', 'padi': 'TextEdit', });
lyr_Pemukiman_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'REMARK': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BatasAdnimistrasiDesa_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_KepadatanPenduduk2019JiwaKm2_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'CC_4': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'L_2019': 'TextEdit', 'P_2019': 'TextEdit', 'JP_2019': 'TextEdit', 'K_P_2019': 'TextEdit', 'Luas_2019': 'TextEdit', });
lyr_KepadatanPenduduk2014JiwaKm2_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'L_2014': 'TextEdit', 'P_2014': 'TextEdit', 'JP_2014': 'TextEdit', 'K_P_2014': 'TextEdit', 'Luas_2014': 'TextEdit', });
lyr_BatasAdministrasiKecamatan_10.set('fieldImages', {'GID_3': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', });
lyr_BatasAdministrasiKabupaten_11.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Sungai_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'REMARK': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_GarisKontur_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'VALKNT': 'TextEdit', 'REMARK': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_Jalan_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'REMARK': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_Waduk_15.set('fieldImages', {'Field1': 'TextEdit', 'Field2': 'TextEdit', 'lokasi': 'TextEdit', });
lyr_KantorPolisi_16.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_KantorCamat_17.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_KantorBapati_18.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_SumberDayaAlamKacangTanah_2.set('fieldLabels', {'OBJECTID': 'no label', 'L_2014': 'no label', 'P_2014': 'no label', 'JP_2014': 'no label', 'K_P_2014': 'no label', 'Luas_2014': 'no label', 'L_2019': 'no label', 'P_2019': 'no label', 'JP_2019': 'no label', 'K_P_2019': 'header label', 'Luas_2019': 'no label', 'Kacang_tan': 'no label', });
lyr_SumberDayaAlamUbiJalar_3.set('fieldLabels', {'OBJECTID': 'no label', 'L_2014': 'no label', 'P_2014': 'no label', 'JP_2014': 'no label', 'K_P_2014': 'no label', 'Luas_2014': 'no label', 'L_2019': 'no label', 'P_2019': 'no label', 'JP_2019': 'no label', 'K_P_2019': 'no label', 'Luas_2019': 'no label', 'ubi_jalar': 'no label', });
lyr_SumberDayaAlamJagung_4.set('fieldLabels', {'OBJECTID': 'no label', 'NAME_2': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'L_2014': 'no label', 'P_2014': 'no label', 'JP_2014': 'no label', 'K_P_2014': 'no label', 'Luas_2014': 'no label', 'L_2019': 'no label', 'P_2019': 'no label', 'JP_2019': 'no label', 'K_P_2019': 'no label', 'Luas_2019': 'no label', 'jagung': 'no label', });
lyr_SumberDayaAlamPadi_5.set('fieldLabels', {'OBJECTID': 'no label', 'NAME_2': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'L_2014': 'no label', 'P_2014': 'no label', 'JP_2014': 'no label', 'K_P_2014': 'no label', 'Luas_2014': 'no label', 'L_2019': 'no label', 'P_2019': 'no label', 'JP_2019': 'no label', 'K_P_2019': 'no label', 'Luas_2019': 'no label', 'padi': 'no label', });
lyr_Pemukiman_6.set('fieldLabels', {'OBJECTID': 'no label', 'REMARK': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_BatasAdnimistrasiDesa_7.set('fieldLabels', {'OBJECTID': 'no label', 'NAME_2': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_KepadatanPenduduk2019JiwaKm2_8.set('fieldLabels', {'OBJECTID': 'no label', 'NAME_2': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'CC_4': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'L_2019': 'no label', 'P_2019': 'no label', 'JP_2019': 'no label', 'K_P_2019': 'no label', 'Luas_2019': 'no label', });
lyr_KepadatanPenduduk2014JiwaKm2_9.set('fieldLabels', {'OBJECTID': 'no label', 'NAME_2': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'L_2014': 'no label', 'P_2014': 'no label', 'JP_2014': 'no label', 'K_P_2014': 'no label', 'Luas_2014': 'no label', });
lyr_BatasAdministrasiKecamatan_10.set('fieldLabels', {'GID_3': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'NAME_2': 'no label', 'NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', });
lyr_BatasAdministrasiKabupaten_11.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Sungai_12.set('fieldLabels', {'OBJECTID': 'no label', 'REMARK': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_GarisKontur_13.set('fieldLabels', {'OBJECTID': 'no label', 'VALKNT': 'no label', 'REMARK': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_Jalan_14.set('fieldLabels', {'OBJECTID': 'no label', 'REMARK': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_Waduk_15.set('fieldLabels', {'Field1': 'header label', 'Field2': 'header label', 'lokasi': 'no label', });
lyr_KantorPolisi_16.set('fieldLabels', {'NAMOBJ': 'header label', 'REMARK': 'header label', });
lyr_KantorCamat_17.set('fieldLabels', {'NAMOBJ': 'header label', 'REMARK': 'header label', });
lyr_KantorBapati_18.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'no label', });
lyr_KantorBapati_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});