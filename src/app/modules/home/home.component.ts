import { Component, ViewChild } from '@angular/core';
import { AppController } from '../core/appController';
import { EstablishmentComponent } from '../establishment/establishment.component';
import { SuperTabs } from '@ionic-super-tabs/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {
  public tabEstablishment = EstablishmentComponent;
  @ViewChild(SuperTabs, { static: false }) superTabs: SuperTabs;

  constructor(public appController: AppController) { }

  async ngAfterViewInit() {
    this.superTabs.selectTab(0);
  }

}
