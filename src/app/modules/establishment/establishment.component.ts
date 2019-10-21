import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppController } from '../core/appController';
import { EstablishmentService } from './establishment.service';
import { DistanceModel } from 'src/app/shared/models/classes/distance.model';
import { GoogleService } from 'src/app/shared/services/google.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
    selector: 'app-establishment',
    templateUrl: './establishment.component.html',
    styleUrls: ['./establishment.component.scss'],
})
export class EstablishmentComponent implements AfterViewInit {
   
    bars: any;
    distance: DistanceModel[] = [];
    array: any;

    constructor(public appController: AppController,
        private establishmentService: EstablishmentService,
        private geolocation: Geolocation,
        private googleService: GoogleService) { }

    async ngAfterViewInit() {
       await this.getBars();
    }


    async getBars() { // mudar essa lógica
        // lista dos cadastrados
        this.bars = await this.establishmentService.getAll();
        // pesquisar os bares com base no nearBy e trazer os cadastrados
        // depois fazer o foreach abaixo
        // hoje estou trazendo todos, porém estático no service pq ainda n fiz a implementacao do front com o back e nem cadastrei os bares no banco.
        
        this.bars.forEach(async (bar) => {
            this.googleService.getDistance(bar.lat,bar.lng).then(resp => {
                bar.distance = resp['distance'].toFixed(1);
                bar.duration = resp['duration'];
            });
        });
        console.log('bars: ', this.bars);
        
        // // obtenho a lista dos restaurantes proximos
        // const nearBy = await this.establishmentService.getEstablishmentsNearBy();
        // console.log('nearBy: ', nearBy);
    }


}
