import { StateProvider } from "@uirouter/angularjs";

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider: StateProvider) {
    $stateProvider
        .state('locations', {
            url: '/locations',
            template: require('./components/all-locations/all-locations.component')
        });
}