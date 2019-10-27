import { Component } from '@angular/core';
import { AppController } from '../core/appController';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {

  constructor(public appController: AppController) { }

  switchVar: string = 'command';

  handleSwitch(newSwitch: string) {
    this.switchVar = newSwitch;
  }

}
