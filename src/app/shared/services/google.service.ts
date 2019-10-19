import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { Injectable } from '@angular/core';

declare var google;

@Injectable()
export class GoogleService {
    distance: any;

    constructor(private geolocation: Geolocation) { }

    public getDistance(lat: number, lng: number) {
        return new Promise((resolve, reject) => {
            this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then((pos: Geoposition) => {
                // const origin1 = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                // const origin2 = 'Salvador, Bahia'
                // const destA = 'Salvador, Bahia'
                // const destB = new google.maps.LatLng(-12.9785741, -38.4551153);
                // this.getEstablishments(pos.coords.latitude, pos.coords.longitude);
                this.obterDistanciaTeste(pos.coords.latitude, pos.coords.longitude);
              
                
                resolve('this.distance');
            }, (err: PositionError) => {
                console.log("erro gps : " + err.message);
            })
            .catch(error => {
                reject(error);
            })
        });

    }

    private obterDistanciaTeste(currentLat, currentLng) {
        var myLatLng1 = currentLat + "," + currentLng;
        var myLatLng2 = '-12.9785741,-38.4551153';

        try {
            let rsult = google.maps.geometry.spherical.computeDistanceBetween(myLatLng1, myLatLng2);
            console.log('array: ', rsult);
        } catch (error) {
            console.log('erro: ', error);
        }
    }

    private getEstablishments(curentLat: number, currentLng: number) {
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
        places.nearbySearch(request, this.callback);
    }

    callback(results, status) {
        let nearbyPlaces = [];
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            //let place = results[i];
            nearbyPlaces.push(results[i]);
          }
        }

        return nearbyPlaces;
    }

}