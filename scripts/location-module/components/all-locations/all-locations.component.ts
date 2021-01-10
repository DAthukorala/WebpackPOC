import * as angular from 'angular';
import LocationService from '../../services/location.service';
import Location from '../../models/location.model';

export default class AllLocationsComponent {
    $inject = ['locationService', '$stateProvider'];

    public Locations: Location[];

    constructor(private locationService: LocationService) { }

    public $onInit(): void {
        this.Locations = this.locationService.getAllLocations();
    }

    public static create(): angular.Injectable<angular.IControllerConstructor> {
        return (locationService: LocationService) =>
            new AllLocationsComponent(locationService);
    }

    public static register(): void {
        angular.module('locationModule').component('allLocations',
            {
                template: require('../all-locations/all-locations.component.html'),
                controller: AllLocationsComponent.create(),
                controllerAs: 'ctrl'
            });
    }
}
