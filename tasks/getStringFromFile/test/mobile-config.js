//App.setPreference('AutoHideSplashScreen' ,'true');
//
//App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#000000');
App.info({
    "id": 'com.divramod.kegelapp.dev',
    "name": 'Kegelapp',
    "description": 'Eine App zum erfassen von Kegelergebnissen',
    "version": "0.0.10"
});

App.accessRule('*');

App.icons({
    'android_ldpi': 'resources/icons/512x512.png',
    'android_mdpi': 'resources/icons/512x512.png',
    'android_hdpi': 'resources/icons/512x512.png',
    'android_xhdpi': 'resources/icons/512x512.png'
});
