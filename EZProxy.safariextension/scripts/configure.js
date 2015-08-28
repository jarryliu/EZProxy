
var settings = {};

function updateSettings(newSettings) {
    Object.keys(newSettings).forEach(function(newSetting) {
        safari.extension.settings[newSetting] = newSettings[newSetting];
    });
    settings = safari.extension.settings;
    //onSettingsUpdated()
}

function onSettingsUpdated() {
    //Turn badge off if on
    if (!settings.button) {
        button.badge = 0;
    }
    //Run embedinate if turning autorun ON
    if (settings.autorun) {
        embedinate();
    }
}