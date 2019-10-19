import { Component, OnInit } from '@angular/core';
import { AppController } from '../core/appController';
import { EstablishmentService } from './ establishment.service';
import { DistanceService } from 'src/app/shared/services/distance.service';
import { DistanceModel } from 'src/app/shared/models/classes/distance.model';
import { GoogleService } from 'src/app/shared/services/google.service';

@Component({
    selector: 'app-establishment',
    templateUrl: './ establishment.component.html',
    styleUrls: ['./ establishment.component.scss'],
})
export class EstablishmentComponent implements OnInit {
    bars: any;
    distance: DistanceModel[] = [];
    array: any;

    constructor(public appController: AppController,
    private establishmentService: EstablishmentService,
    private googleService: GoogleService,
    private distanceService: DistanceService) { }

    async ngOnInit() {
        // make the request to bring the list of establishments registered - this.bars = 
        this.getBars();
    }


    async getBars() {
        const currentLat = -38.4921199;
        const currentLng = -12.9911449;
        let teste1;
        let teste2;

        this.bars = await this.establishmentService.getAll();
        this.bars.forEach((bar, key) => {
            // this.distance.push(this.distanceService.calcRadiusDistance(currentLat, currentLng, bar.lat, bar.lng));
            // bar.distance = this.distanceService.calcRadiusDistance(currentLat, currentLng, bar.lat, bar.lng);
            // this.distance[key].establishment = bar.name;
            teste1 = bar.lat;
            teste2 = bar.lng;
        });
        let distancia;
        try {
            this.googleService.getDistance(teste1, teste2);
        } catch (error) {
            this.appController.tratarErro(error);
        }

        // console.log('distancia: ', distancia);
    }

    calculate() {
        var myLatLng1 = { lat: 40.634315, lng: 14.602552 };
        var myLatLng2 = { lat: 40.04215, lng: 14.102552 };
    }

    calculateDistance(lat1:number,lat2:number,long1:number,long2:number){
        let p = 0.017453292519943295;    // Math.PI / 180
        let c = Math.cos;
        let a = 0.5 - c((lat1-lat2) * p) / 2 + c(lat2 * p) *c((lat1) * p) * (1 - c(((long1- long2) * p))) / 2;
        let dis = (12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
        return dis;
    }

      

}
