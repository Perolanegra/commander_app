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
        
        this.getBars();
    }


    async getBars() { // mudar essa lógica
        const nearBy = await this.establishmentService.getEstablishmentsNearBy(); // obtenho a lista dos restaurantes proximos
        console.log('nearBy: ', nearBy);

        // pesquisar os bares com base no nearBy e trazer os cadastrados
        // depois fazer o foreach abaixo
        // hoje estou trazendo todos, porém estático no service pq ainda n fiz a implementacao do front com o back e nem cadastrei os bares no banco.
        
        this.bars = await this.establishmentService.getAll(); // lista dos cadastrados
        this.bars.forEach(async (bar, key) => {
            try {
                const distance = await this.googleService.getDistance(bar.lat,bar.lng);
                console.log('distancia loop: ', distance);
                
            } catch (error) {
                this.appController.tratarErro(error);
            }
        });
    }

    calculate() {
        var myLatLng1 = { lat: 40.634315, lng: 14.602552 };
        var myLatLng2 = { lat: 40.04215, lng: 14.102552 };
    }

    getEstablishments(lat1:number,lat2:number,long1:number,long2:number){
        let p = 0.017453292519943295;    // Math.PI / 180
        let c = Math.cos;
        let a = 0.5 - c((lat1-lat2) * p) / 2 + c(lat2 * p) *c((lat1) * p) * (1 - c(((long1- long2) * p))) / 2;
        let dis = (12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
        return dis;
    }

      

}
