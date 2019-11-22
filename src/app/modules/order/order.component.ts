import { Component, Input } from '@angular/core';
import { AppController } from '../core/appController';
import { GoogleService } from 'src/app/shared/services/google.service';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ModalController } from '@ionic/angular';
import { GlobalVars } from 'src/app/shared/globalVars';
import { CommandService } from '../command/command.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss', '../establishment/establishment-list/establishment-list.component.scss'],
})
export class OrderComponent {
  public dataIsReady: boolean = false;
  @Input() fromTabSwitchTable;
  @Input() _orders;

  constructor(public appController: AppController,
  private globalVars: GlobalVars,
  private googleService: GoogleService,
  private commandService: CommandService,
  private modalCtrl: ModalController) { }

  async ngOnInit() {

    if(this.fromTabSwitchTable) {
      await this.getCommands();
    }
    
    if(this.myOrders) {
      console.log('orders: ', this.myOrders);
      
      this.myOrders.forEach(async (establishment) => {
        this.googleService.getDistance(establishment.lat, establishment.lng).then(resp => {
          establishment.distance = resp['distance'].toFixed(1);
          establishment.duration = resp['duration'];
          this.dataIsReady = true;
        });
      });
    }
  }

  public async getCommands(): Promise<any> {
    this.myOrders = await this.commandService.getClosedByUserId(this.globalVars.getUserLoggedIn()._id);
  }

  public get myOrders() {
    return this._orders
  }

  public set myOrders(orders) {
    this._orders = orders;
  }

  async pushToCommandProducts(products) {
    const modal = await this.modalCtrl.create({
      component: OrderDetailsComponent,
      componentProps: {
        "products": products
      },
    });
  
    modal.present();
  }


}
