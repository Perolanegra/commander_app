import { Component, ViewChild } from '@angular/core';
import { AppController } from '../core/appController';
import { SuperTabs } from '@ionic-super-tabs/angular';
import { EstablishmentService } from '../establishment/establishment.service';
import { GoogleService } from 'src/app/shared/services/google.service';
import { ModalController } from '@ionic/angular';
import { EstablishmentDetComponent } from '../establishment/establishment-det/establishment-det.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {
  @ViewChild(SuperTabs, { static: false }) superTabs: SuperTabs;

  constructor(public appController: AppController,
  private establishmentService: EstablishmentService,
  private modalCtrl: ModalController,
  private googleService: GoogleService) { }

  private switchVar: string = 'command';

  async ngAfterViewInit() {
    // this.superTabs.selectTab(0);
  }

  handleSwitch(newSwitch: string) {
    this.switchVar = newSwitch;
  }

}
