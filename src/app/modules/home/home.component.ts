import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { SuperTabs } from '@ionic-super-tabs/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild(SuperTabs, { static: false }) superTabs: SuperTabs;

  constructor(private modalCtrl: ModalController) {}

  ngAfterViewInit() {
    this.superTabs.selectTab(0);
  }

  onTabChange(event) { // this.superTabs.tabChange (Observable)
    console.log('evento Tab:');
  }


}
