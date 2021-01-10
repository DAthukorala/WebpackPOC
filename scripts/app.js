import * as angular from 'angular';
import uirouter from 'angular-ui-router';
import routes from './app.routes';
import homeModule from './home-module/home.module';
import patientModule from './patient-module/patient.module';
import locationModule from './location-module/location.module';

var mainApplication = angular.module('mainApplication', [uirouter, homeModule, patientModule])
    .config(routes);



//import './first-module/first.module'
// var mainApplication = angular.module('mainApplication', ['firstModule']);