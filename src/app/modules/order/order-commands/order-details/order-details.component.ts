import { Component } from '@angular/core';
import { AppController } from '../../../core/appController';
import { ModalController, NavParams } from '@ionic/angular';
import { GlobalVars } from 'src/app/shared/globalVars';

@Component({
    selector: 'app-my-orders-details',
    templateUrl: './order-details.component.html',
    styleUrls: ['../../../command/command.component.scss']
})
export class OrderDetailsComponent {
    products;

    constructor(public appController: AppController,
    private navParams: NavParams,
    public globalVars: GlobalVars,
    public modalCtrl: ModalController) {
        this.products = this.navParams.get('commandProds');    
    }


}
