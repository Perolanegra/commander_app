import { Component, OnInit } from '@angular/core';
import { AppController } from '../core/appController';
import { EstablishmentService } from './establishment.service';
import { DistanceModel } from 'src/app/shared/models/classes/distance.model';
import { GoogleService } from 'src/app/shared/services/google.service';

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
        private googleService: GoogleService) { }

    ngOnInit() {
        this.getBars();
    }


    async getBars() { // mudar essa lógica
        this.bars = await this.establishmentService.getAll(); // lista dos cadastrados
        console.log('bar: ', this.bars);

        // obtenho a lista dos restaurantes proximos
        this.establishmentService.getEstablishmentsNearBy().then(resp => {
            console.log('resp: ', resp);
        }).catch(error => this.appController.tratarErro(error));


        // pesquisar os bares com base no nearBy e trazer os cadastrados
        // depois fazer o foreach abaixo
        // hoje estou trazendo todos, porém estático no service pq ainda n fiz a implementacao do front com o back e nem cadastrei os bares no banco.

        // this.bars.forEach(async (bar, key) => {

        //     try {
        //         const item = await this.googleService.getDistance(bar.lat,bar.lng);
        //         // this.distance.push(item);
        //         // bar.distance = item.
        //         console.log('distancia loop: ', item);

        //     } catch (error) {
        //         this.appController.tratarErro(error);
        //     }
        // });



    }


}
