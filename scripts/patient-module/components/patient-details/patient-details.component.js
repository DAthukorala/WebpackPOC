export default function patientDetails() {
    return {
        template: require('../patient-details/patient-details.component.html'),
        controller: ('patientDetailsController', patientDetailsController),
        controllerAs: 'ctrl',
        bindings: {
            patient: '<'
        }
    };
}

function patientDetailsController() {
    let self = this;
}