routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('patients', {
            url: '/patients',
            template: require('./components/all-patients/all-patients.component'),
            resolve: {
                patients: function (patientService) {
                    return patientService.getAllPatients();
                }
            }
        })
        .state('patients.patient', {
            url: '/{patientId}',
            template: require('./components/patient-details/patient-details.component'),
            resolve: {
                patient: function (patients, $stateParams) {
                    return patients.find(function (patient) {
                        return patient.id == $stateParams.patientId;
                    });
                }
            }
        });
}