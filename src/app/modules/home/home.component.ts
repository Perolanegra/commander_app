import { Component, ViewChild } from '@angular/core';
import { AppController } from '../core/appController';
import { EstablishmentComponent } from '../establishment/establishment.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {
  public tabEstablishment;
  // @ViewChild(SuperTabs, { static: false }) superTabs: SuperTabs;

  constructor(public appController: AppController) { this.tabEstablishment = EstablishmentComponent; }

}
