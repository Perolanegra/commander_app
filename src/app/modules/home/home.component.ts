import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SuperTabs } from '@ionic-super-tabs/angular';
import { AppController } from '../core/appController';
import { EstablishmentComponent } from '../establishment/establishment.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  tabEstablishment = EstablishmentComponent;
  @ViewChild(SuperTabs, { static: false }) superTabs: SuperTabs;

  constructor(public appController: AppController) { }

  ngAfterViewInit() {
    this.superTabs.selectTab(0);
  }

  onTabChange(event) {
    console.log('evento Tab:');
  }


}
