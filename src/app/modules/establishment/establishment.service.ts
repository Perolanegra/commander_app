import { Injectable } from '@angular/core';
import { RestService } from '../core/rest.service';
import { map } from 'rxjs/operators';
import { AppController } from '../core/appController';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder/ngx';
import { Geoposition } from '@ionic-native/geolocation/ngx';
import { GoogleService } from 'src/app/shared/services/google.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';


declare var google;

@Injectable()
export class EstablishmentService {

    constructor(private appController: AppController,
        private geolocation: Geolocation,
        private platform: Platform,
        private restService: RestService,
        private googleService: GoogleService,
        private nativeGeocoder: NativeGeocoder) { }

    public getAll(): Promise<any> {
        return new Promise((resolve, reject) => {
            const bars = [{
                name: 'Quiosque do Galego',
                description: 'Bar e Restaurante',
                distance: '2 km',
                lat: -13.0010826,
                lng: -38.5269862,
                rating: '4.8',
                img: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
            }];

            resolve(bars);
        });
    }

    public getEstablishmentsNearBy(): Promise<any> {

        return new Promise((resolve, reject) => {
            this.geolocation.getCurrentPosition({ enableHighAccuracy: true, maximumAge: 8000 })
            .then((pos: Geoposition) => {

                resolve(this.googleService.getEstablishments(pos.coords.latitude, pos.coords.longitude));
            }
                , (err: PositionError) => {
                    console.log("colé de pan : " + err.message);
                    // reject(err);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }


    // public getSomeId(pId): Promise<any> {
    //     return new Promise((resolve, reject) => {
    //         this.restService
    //         .post(`produto/obterPorId?` + this.appController.criarParamsEndpoint(['pId'],[pId]), null)
    //         .pipe(map(resp => resp)).subscribe(resp => {
    //             resolve(resp);
    //         }), (err) => {
    //             console.log('erro requisição: ', err);
    //             reject(err);
    //         }
    //     });
    // }
}