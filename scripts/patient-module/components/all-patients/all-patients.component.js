 export default function allPatients() {
     return {
         template: require('../all-patients/all-patients.component'),
         controller: ('allPatientsController', allPatientsController),
         controllerAs: 'ctrl',
         bindings: {
             patients: '<'
         }
     };
 }

 function allPatientsController() {
     let self = this;
 }