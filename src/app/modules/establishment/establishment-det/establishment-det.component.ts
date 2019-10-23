import { Component } from '@angular/core';
import { AppController } from '../../core/appController';
import { ModalController, NavParams } from '@ionic/angular';
import { MenuDetComponent } from '../menu-det/menu-det.component';

@Component({
    selector: 'app-establishment-det',
    templateUrl: './establishment-det.component.html',
    styleUrls: ['./establishment-det.component.scss'],
})
export class EstablishmentDetComponent {
    bar;
    constructor(public appController: AppController,
    private navParams: NavParams,
    public modalCtrl: ModalController) {
        this.bar = this.navParams.get('bar');
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
