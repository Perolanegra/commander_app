import { Component } from '@angular/core';
import { AppController } from '../../core/appController';
import { NavParams, ModalController } from '@ionic/angular';
import { GlobalVars } from 'src/app/shared/globalVars';
import { OrderDetailsComponent } from './order-details/order-details.component';

@Component({
    selector: 'app-my-commands-order',
    templateUrl: './order-commands.component.html',
    styleUrls: ['../../command/command.component.scss', './order-commands.component.scss']
})
export class OrderCommandsComponent {
    barVisit;

    constructor(public appController: AppController,
    private navParams: NavParams,
    public globalVars: GlobalVars,
    public modalCtrl: ModalController) {
        this.barVisit = this.navParams.get('barVisit');
    }

    async pushToCommandProducts(commandProds) {
        const modal = await this.modalCtrl.create({
            component: OrderDetailsComponent,
            componentProps: {
                "commandProds": commandProds,
            },
        });

        modal.present();
    }


}
