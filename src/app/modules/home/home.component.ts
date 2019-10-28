import { Component } from '@angular/core';
import { AppController } from '../core/appController';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {

  constructor(public appController: AppController,
  private navCtrl: NavController) { }

  switchVar: string = 'command';

  handleSwitch(newSwitch: string) {
    this.switchVar = newSwitch;
  }

  startCommand() { // open QrCode, validate QrCode, then if success navigate to new Root 'Command'

    this.navCtrl.navigateRoot('command');
  }

  handleQrCode() {
    // open qrCode and handle with validations.
  }

}
