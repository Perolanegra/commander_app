import { Component, ViewChild, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SuperTabs } from '@ionic-super-tabs/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {

  @ViewChild(SuperTabs, { static: false }) superTabs: SuperTabs;

  tabRestaurantes = LoginComponent;
  tabInicio = LoginComponent;

  constructor() {}

  ngOnInit(): void {
    
  }

  onTabChange(event) { // this.superTabs.tabChange (Observable)
    console.log('evento: ', event);
  }


}
