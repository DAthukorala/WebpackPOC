import * as angular from 'angular';
import uirouter from 'angular-ui-router';
import routes from './patient.routes'
import patientService from './services/patient.service';
import allPatients from './components/all-patients/all-patients.component';
import patientDetails from './components/patient-details/patient-details.component';


export default angular
    .module('patientModule', [uirouter])
    .config(routes)
    .service('patientService', patientService)
    .component('allPatients', allPatients())
    .component('patientDetails', patientDetails())
    .name;