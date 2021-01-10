export default function settingsSelector() {
    return {
        template: require('../settings-selector/settings-selector.component.html'),
        controller: ('settingsSelectorController', settingsSelectorController),
        controllerAs: 'ctrl'
    };
}

function settingsSelectorController(settingsService) {
    var self = this;

    self.settingTypes = [];
    self.selectedSettings = [];
    self.selectedType;

    self.$onInit = $onInit;
    self.filterSettings = filterSettings;

    //i am adding these values here since these are the fields that needs to be displayed for this component/requirement
    self.hideField = "SettingMenuID";
    self.textField = "SettingMenuDisplayName";
    self.linkField = "EMRWebDashBoardMenuDescription";

    function $onInit() {
        self.settingTypes = settingsService.getTypes();
    }

    function filterSettings() {
        self.selectedSettings = settingsService.getSettingsByType(self.selectedType);
    }

}