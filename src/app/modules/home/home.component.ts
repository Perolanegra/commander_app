import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { SuperTabs } from '@ionic-super-tabs/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild(SuperTabs, { static: false }) superTabs: SuperTabs;

  constructor() {}

  ngAfterViewInit() {
    // console.log('Super tabs is ', this.superTabs);
    this.superTabs.selectTab(0);
  }

  onTabChange(event) { // this.superTabs.tabChange (Observable)
    console.log('evento Tab: ');
  }


}
