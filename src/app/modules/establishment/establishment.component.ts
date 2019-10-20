import { Component, OnInit } from '@angular/core';
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
export class EstablishmentComponent implements OnInit {
    bars: any;
    distance: DistanceModel[] = [];
    array: any;

    constructor(public appController: AppController,
        private establishmentService: EstablishmentService,
        private geolocation: Geolocation,
        private googleService: GoogleService) { }

    ngOnInit() {
        this.getBars();
    }


    async getBars() { // mudar essa lógica
        this.bars = await this.establishmentService.getAll(); // lista dos cadastrados

        // obtenho a lista dos restaurantes proximos
        const nearBy = await this.establishmentService.getEstablishmentsNearBy();
        console.log('nearBy: ', nearBy);

        // pesquisar os bares com base no nearBy e trazer os cadastrados
        // depois fazer o foreach abaixo
        // hoje estou trazendo todos, porém estático no service pq ainda n fiz a implementacao do front com o back e nem cadastrei os bares no banco.

        this.bars.forEach(async (bar, key) => {

            try {
                const item = await this.googleService.getDistance(bar.lat,bar.lng);
                bar.distance = item['distance'].toFixed(1);
                bar.duration = item['duration'];
                console.log('distancia item: ', item);

            } catch (error) {
                this.appController.tratarErro(error);
            }
        });



    }


}
