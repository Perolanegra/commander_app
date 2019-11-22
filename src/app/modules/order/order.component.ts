import { Component, Input } from '@angular/core';
import { AppController } from '../core/appController';
import { GoogleService } from 'src/app/shared/services/google.service';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-my-orders',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss', '../establishment/establishment-list/establishment-list.component.scss'],
})
export class OrderComponent {
  public dataIsReady: boolean = false;
  @Input() orders;

  constructor(public appController: AppController,
  private googleService: GoogleService,
  private modalCtrl: ModalController) { }

  ngOnInit() {
    if (this.myOrders) {
      this.myOrders.forEach(async (command) => {
        command.forEach(bar => {
          this.googleService.getDistance(bar.establishment.lat, bar.establishment.lng).then(resp => {
            bar.establishment.distance = resp['distance'].toFixed(1);
            bar.establishment.duration = resp['duration'];
            this.dataIsReady = true;
          });
        });
      });
    }
  }

  public get myOrders() {
    return this.orders;
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
