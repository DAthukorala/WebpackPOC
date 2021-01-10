import * as angular from 'angular';
import uirouter from 'angular-ui-router';
import routes from './home.routes'
import welcome from './components/welcome/welcome.component'

export default angular
    .module('homeModule', [uirouter])
    .config(routes)
    .component('welcome', welcome())
    .name;