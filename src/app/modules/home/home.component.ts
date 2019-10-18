import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { SuperTabs } from '@ionic-super-tabs/angular';
import { ModalController } from '@ionic/angular';
import { AppController } from '../core/appController';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild(SuperTabs, { static: false }) superTabs: SuperTabs;

  rating: string = '4.5';

  constructor(private modalCtrl: ModalController, public appController: AppController) {}

  ngAfterViewInit() {
    this.superTabs.selectTab(0);
  }

  onTabChange(event) { // this.superTabs.tabChange (Observable)
    console.log('evento Tab:');
  }


}
