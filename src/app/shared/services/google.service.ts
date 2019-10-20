import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

declare var google;
var service = new google.maps.DistanceMatrixService();

@Injectable()
export class GoogleService {

    constructor(private geolocation: Geolocation) { }

    public getDistance(lat: number, lng: number): Promise<Object> {
        return new Promise((resolve, reject) => {
            this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(async (pos: Geoposition) => {
                const distance = await this.calculateDistance(pos.coords.latitude, pos.coords.longitude, lat, lng);
                resolve(distance);
            }, (err: PositionError) => {
                console.log("erro gps : " + err.message);
                reject(err);
            }).catch(error => {
                reject(error);
            })
        });

    }

    public getEstablishments(curentLat: number, currentLng: number): Promise<any> {
        let here = new google.maps.LatLng(curentLat, currentLng);
        let request = {
            location: here,
            radius: [500],
            type: ['restaurant']
        };

        let options = {
            center: { lat: curentLat, lng: currentLng },
            zoom: 15,
            disableDefaultUI: true,
            draggable: true,
            zoomControl: true,
        };

        const places = new google.maps.places.PlacesService(new google.maps.Map('d', options));

        return new Promise((resolve, reject) => {

            places.nearbySearch(request, (resp, status) => {

                let nearbyPlaces = [];
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < resp.length; i++) {
                        nearbyPlaces.push(resp[i]);
                    }
                    
                    resolve(nearbyPlaces);
                }

            }, catchError((error, caught) => {
                console.log('error: ', error);
                console.log('caught: ', caught);

                reject(error);
                return caught;
            }));
        });

    }

    private calculateDistance(currentLat: number, currentLng: number, destinationLat: number, destinationLng: number): Promise<any> {

        return new Promise((resolve, reject) => {
            
            service.getDistanceMatrix(
                {
                    origins: [new google.maps.LatLng(currentLat, currentLng)],
                    destinations: [new google.maps.LatLng(destinationLat, destinationLng)],
                    travelMode: 'DRIVING'
                }, (response, status) => { // callback
                    let travelDetailsObject;
                    if (status == 'OK') {
                        var origins = response.originAddresses;
                        var destinations = response.destinationAddresses;
                        for (var i = 0; i < origins.length; i++) {
                            var results = response.rows[i].elements;
                            for (var j = 0; j < results.length; j++) {
                                var element = results[j];
                                var distance = parseFloat(element.distance.value) / 1000;
                                var duration = element.duration.text;
                                var from = origins[i];
                                var to = destinations[j];
                                travelDetailsObject = {
                                    distance: distance,
                                    duration: duration
                                }
                            }
                        }
            
                        resolve(travelDetailsObject);
                    }
                    else {
                        reject('Não foi possível obter a lista');
                    }
                });
        });

    }

}