import { Component, ViewChild } from '@angular/core';
import { AppController } from '../core/appController';
import { EstablishmentComponent } from '../establishment/establishment.component';
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
  // public tabEstablishment = EstablishmentComponent;
  @ViewChild(SuperTabs, { static: false }) superTabs: SuperTabs;
  bars: any;

  constructor(public appController: AppController,
  private establishmentService: EstablishmentService,
  private modalCtrl: ModalController,
  private googleService: GoogleService) { }

  async ngAfterViewInit() {
    this.superTabs.selectTab(0);
  }

  async ngOnInit() {
    await this.getBars();
  }

  async getBars() { // mudar essa lógica
    // lista dos cadastrados
    const loader = await this.appController.presentLoadingDefault();
    this.bars = await this.establishmentService.getAll();
    // pesquisar os bares com base no nearBy e trazer os cadastrados
    // depois fazer o foreach abaixo
    // hoje estou trazendo todos, porém estático no service pq ainda n fiz a implementacao do front com o back e nem cadastrei os bares no banco.

    this.bars.forEach(async (bar) => {
      this.googleService.getDistance(bar.lat, bar.lng).then(resp => {
        bar.distance = resp['distance'].toFixed(1);
        bar.duration = resp['duration'];
      });
    });

    loader.dismiss();

    // obtenho a lista dos restaurantes proximos
    // const nearBy = await this.establishmentService.getEstablishmentsNearBy();
    // console.log('nearBy: ', nearBy);
  }

  async pushToDetails(bar) {
    const modal = await this.modalCtrl.create({
      component: EstablishmentDetComponent,
      componentProps: {
        "bar": bar
      },
    });

    await modal.present();

    modal.onWillDismiss().then(() => this.getBars());
  }

}
