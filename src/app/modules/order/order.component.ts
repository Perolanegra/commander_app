import { Component, Input } from '@angular/core';
import { AppController } from '../core/appController';
import { GoogleService } from 'src/app/shared/services/google.service';
import { ModalController } from '@ionic/angular';
import { GlobalVars } from 'src/app/shared/globalVars';
import { CommandService } from '../command/command.service';
import { OrderCommandsComponent } from './order-commands/order-commands.component';

@Component({
  selector: 'app-my-orders',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss', '../establishment/establishment-list/establishment-list.component.scss'],
})
export class OrderComponent {
  public dataIsReady: boolean = false;
  @Input() fromTabSwitchTable;
  @Input() _orders;
  arrayEstabs: Array<any>;
  arrayCommandProds: Array<any>
  arrayCommand: Array<any>;

  constructor(public appController: AppController,
  private globalVars: GlobalVars,
  private googleService: GoogleService,
  private commandService: CommandService,
  private modalCtrl: ModalController) { }

  async ngOnInit() {
    this.arrayEstabs = new Array();
    if(this.fromTabSwitchTable) {
      await this.getCommands();
    }
    
    if(this.myVisits) {
      this.myVisits.forEach(async (bar) => {
        this.googleService.getDistance(bar.lat, bar.lng).then(resp => {
          bar.distance = resp['distance'].toFixed(1);
          bar.duration = resp['duration'];
          this.dataIsReady = true;
        });
      });
    }
  }

  public async getCommands(): Promise<any> {
    this.myVisits = await this.commandService.getClosedByUserId(this.globalVars.getUserLoggedIn()._id);
  }

  public get myVisits() {
    return this._orders;
    // .sort((a,b)=>a.getTime()-b.getTime())
  }

  public set myVisits(orders) {
    this._orders = orders;
  }

  async pushToCommand(barVisit) {
    const modal = await this.modalCtrl.create({
      component: OrderCommandsComponent,
      componentProps: {
        "barVisit": barVisit,
      },
    });
  
    modal.present();
  }

}
