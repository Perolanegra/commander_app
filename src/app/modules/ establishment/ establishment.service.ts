import { Injectable } from '@angular/core';
import { RestService } from '../core/rest.service';
import { map } from 'rxjs/operators';
import { AppController } from '../core/appController';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';


declare var google;

@Injectable()
export class EstablishmentService {
    
    constructor(private appController: AppController,
    private restService: RestService,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder) { }

    public getAll(): Promise<any> {
        return new Promise((resolve, reject) => {
            console.log('requisicao lista restaurantes');
            const bars = [{
                name: 'Quiosque do Galego',
                description: 'Bar e Restaurante',
                distance: '2 km',
                lat: 12.9692472222,
                lng: -38.4367916667,
                rating: '4.8',
                img: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
            }];
            
            resolve(bars);
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