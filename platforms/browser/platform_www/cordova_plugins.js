cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-sketch/www/sketch.js",
        "id": "cordova-plugin-sketch.sketch",
        "pluginId": "cordova-plugin-sketch",
        "clobbers": [
            "navigator.sketch"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-sketch": "0.1.0"
}
// BOTTOM OF METADATA
});