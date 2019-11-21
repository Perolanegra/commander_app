import { Component } from '@angular/core';
import { AppController } from '../core/appController';

@Component({
  selector: 'app-my-orders',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  public dataIsReady: boolean = false;
  
  constructor(public appController: AppController) { }

  ngOnInit() {
    setTimeout(() => {
      this.dataIsReady = true;
    }, 4000);
  }


}
