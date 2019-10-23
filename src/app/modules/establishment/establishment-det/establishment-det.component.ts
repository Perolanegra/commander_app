import { Component, OnInit } from '@angular/core';
import { AppController } from '../../core/appController';
import { NavParams, ModalController } from '@ionic/angular';
import { MenuDetComponent } from '../menu-det/menu-det.component';

@Component({
    selector: 'app-establishment-det',
    templateUrl: './establishment-det.component.html',
    styleUrls: ['./establishment-det.component.scss'],
})
export class EstablishmentDetComponent implements OnInit {

    constructor(public appController: AppController,
    private modalCtrl: ModalController,
    private navParams: NavParams) { }

    ngOnInit(): void {
        console.log('component det exists and works!', this.navParams.get('bar'));
    }

    async pushToMenuDetails(id: String) {
        const modal = await this.modalCtrl.create({
            component: MenuDetComponent,
            componentProps: {
                "_id": id
            },
            cssClass: 'modal-center'
        });

        modal.present();
    }


}
