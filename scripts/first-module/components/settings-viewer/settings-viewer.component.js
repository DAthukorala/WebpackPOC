export default function settingsViewer() {
    return {
        template: require('../settings-viewer/settings-viewer.component.html'),
        controller: ('settingsViewerController', settingsViewerController),
        controllerAs: 'ctrl',
        bindings: {
            data: '<',
            hideField: '<',
            textField: '<',
            linkField: '<'
        }
    };
}

function settingsViewerController() {
    var self = this;

    self.getData = getData;
    self.open = open;

    function getData() {
        var mappedData = self.data.map(x => {
            return {
                id: x[self.hideField],
                name: x[self.textField],
                text: x[self.linkField]
            }
        });
        return mappedData;
    }

    function open(text) {
        alert(text);
    }

}