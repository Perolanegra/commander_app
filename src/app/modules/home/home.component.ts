import { Component, ViewChild } from '@angular/core';
import { AppController } from '../core/appController';
import { EstablishmentComponent } from '../establishment/establishment.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {
  public tabEstablishment = EstablishmentComponent;

  constructor(public appController: AppController) { }

}
