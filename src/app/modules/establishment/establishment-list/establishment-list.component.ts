import { Component, OnInit } from '@angular/core';
import { AppController } from '../../core/appController';
import { EstablishmentService } from '../establishment.service';
import { GoogleService } from 'src/app/shared/services/google.service';
import { ModalController } from '@ionic/angular';
import { EstablishmentDetComponent } from '../establishment-det/establishment-det.component';

@Component({
    selector: 'app-list-establishment',
    templateUrl: './establishment-list.component.html',
    styleUrls: ['./establishment-list.component.scss'],
})
export class EstablismentListComponent implements OnInit {
    bars: any;
    dataIsReady: boolean = false;

    constructor(public appController: AppController,
    private establishmentService: EstablishmentService,
    private modalCtrl: ModalController,
    private googleService: GoogleService) { }

    async ngOnInit() {
        await this.getBars();
    }

    async getBars() { // mudar essa lógica
        // lista dos cadastrados
        this.bars = await this.establishmentService.getAll();
        // pesquisar os bares com base no nearBy e trazer os cadastrados
        // depois fazer o foreach abaixo

        this.bars.forEach(async (bar) => {
            this.googleService.getDistance(bar.lat, bar.lng).then(resp => {
                bar.distance = resp['distance'].toFixed(1);
                bar.duration = resp['duration'];
                this.dataIsReady = true;
            });
        });
        
        // obtenho a lista dos restaurantes proximos <OLD> maybe next something
        // const nearBy = await this.establishmentService.getEstablishmentsNearBy();
    }

    async pushToDetails(bar) {
        const modal = await this.modalCtrl.create({
            component: EstablishmentDetComponent,
            componentProps: {
              "bar": bar
            },
          });
      
        await modal.present();
        this.dataIsReady = false;
        modal.onWillDismiss().then(() => this.getBars());
    }

}
