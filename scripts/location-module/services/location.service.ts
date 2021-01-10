import * as angular from 'angular';
import Location from '../models/location.model'

export default class LocationService {

    public getAllLocations(): Location[] {
        const locations = [
            <Location>{
                Id: 1,
                Name: "Seattle",
                Email: "Seattle@gardner.biz"
            },
            <Location>{
                Id: 2,
                Name: "Washington",
                Email: "Washington@gardner.biz"
            },
            <Location>{
                Id: 3,
                Name: "Boston",
                Email: "Boston@gardner.biz"
            },
            <Location>{
                Id: 4,
                Name: "New York",
                Email: "NewYork@gardner.biz"
            },
            <Location>{
                Id: 5,
                Name: "New Plymouth",
                Email: "NewPlymouth@gardner.biz"
            }
        ];

        return locations;

    }


    public static factory(): angular.Injectable<Function> {
        return () => new LocationService();
    }

    public static register(): void {
        angular
            .module('locationModule')
            .service('locationService', LocationService.factory());
    }
} 