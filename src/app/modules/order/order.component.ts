import { Component, Input } from '@angular/core';
import { AppController } from '../core/appController';
import { GoogleService } from 'src/app/shared/services/google.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss', '../establishment/establishment-list/establishment-list.component.scss'],
})
export class OrderComponent {
  public dataIsReady: boolean = false;
  @Input() orders;

  constructor(public appController: AppController,
    private googleService: GoogleService) { }

  ngOnInit() {
    if (this.myOrders) {
      this.myOrders.forEach(async (bar) => {
        this.googleService.getDistance(bar.establishment.lat, bar.establishment.lng).then(resp => {
          bar.establishment.distance = resp['distance'].toFixed(1);
          bar.establishment.duration = resp['duration'];
          this.dataIsReady = true;
        });
      });
    }
  }

  public get myOrders() {
    return this.orders;
  }

  pushToCommandProducts(item) {
    // implementar tela de detalhes de pedidos realizados.
  }


}
