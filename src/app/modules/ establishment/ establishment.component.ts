import { Component, OnInit } from '@angular/core';
import { AppController } from '../core/appController';
import { EstablishmentService } from './ establishment.service';
import { DistanceService } from 'src/app/shared/distance.service';
import { DistanceModel } from 'src/app/shared/models/classes/distance.model';

@Component({
    selector: 'app-establishment',
    templateUrl: './ establishment.component.html',
    styleUrls: ['./ establishment.component.scss'],
})
export class EstablishmentComponent implements OnInit {
    bars: any;
    distance: DistanceModel[] = [];;

    constructor(public appController: AppController,
    private establishmentService: EstablishmentService,
    private distanceService: DistanceService) { }

    async ngOnInit() {
        // make the request to bring the list of establishments registered - this.bars = 
        this.getBars();
    }


    async getBars() {
        const currentLat = -38.4921199;
        const currentLng = -12.9911449;

        this.bars = await this.establishmentService.getAll();
        // this.bars.forEach((bar,key) => {
        //     // this.distance.push(this.distanceService.calcRadiusDistance(currentLat, currentLng, -38.5329409, 13.0103572));
            
        //     this.distance[bar].establishment = bar.name;
        // });

        console.log('lista: ', this.distance);
    }


}
