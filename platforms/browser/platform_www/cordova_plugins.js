cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-sketch/www/sketch.js",
        "id": "cordova-plugin-sketch.sketch",
        "pluginId": "cordova-plugin-sketch",
        "clobbers": [
            "navigator.sketch"
        ]
    },
    {
        "file": "plugins/com.mbppower.camerapreview/www/CameraPreview.js",
        "id": "com.mbppower.camerapreview.CameraPreview",
        "pluginId": "com.mbppower.camerapreview",
        "clobbers": [
            "cordova.plugins.camerapreview"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-sketch": "0.1.0",
    "com.mbppower.camerapreview": "0.0.8"
}
// BOTTOM OF METADATA
});