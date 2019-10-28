import { Component } from '@angular/core';
import { AppController } from '../core/appController';
import { NavController } from '@ionic/angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { GoogleService } from 'src/app/shared/services/google.service';
import { catchError } from 'rxjs/operators';
import { EstablishmentService } from '../establishment/establishment.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {
  switchVar: string = 'command';
  // qrDataFill: Object = {
  //   "id": "5",
  //   "name": "To em Belle",
  //   "lat": "-12.969229",
  //   "lng": "-38.436642",
  // };

  constructor(public appController: AppController,
  private navCtrl: NavController,
  private establishmentService: EstablishmentService,
  private barcodeScanner: BarcodeScanner,
  private googleService: GoogleService) {
    // this.qrDataFill = JSON.stringify(this.qrDataFill);
  }

  handleSwitch(newSwitch: string) {
    this.switchVar = newSwitch;
  }

  async startCommand() { // open QrCode, validate QrCode, then if success navigate to new Root 'Command'
    const scannedObj = await this.handleQrCode();
    
    if(scannedObj) { // foi setado pelo HandleQr

      const resp = await this.googleService.getDistance(Number(scannedObj.lat), Number(scannedObj.lng));
      const distanceInMeters = Number(resp['distance'].toFixed(1)) * 1000;

      if(distanceInMeters >= 70) { // Se a distância q o cara tá for menor q 70m, JUST DO IT!
        // obtém o estabelecimento pelo id e navega para Mesa passando a entidade Estabelecimento como parametro.
        const { id } = scannedObj;
        const establishment = await this.establishmentService.getById(id);
        this.navCtrl.navigateRoot('command', establishment);
      }
    }
  }

  handleQrCode(): Promise<any> {
    return new Promise((resolve, reject) => {
      const options: BarcodeScannerOptions = {
        orientation: 'portrait',
        prompt: 'Alinhe o código ao scanner.',
        preferFrontCamera: false,
        showFlipCameraButton: false,
        torchOn: false,
        resultDisplayDuration: 0
      }
      // open qrCode and handle with validations.
      this.barcodeScanner.scan(options).then(barcodeData => {
        if (!barcodeData.cancelled && barcodeData.format === 'QR_CODE') {
          const { text } = barcodeData;
          if(text && typeof JSON.parse(text) === 'object') { // mais uma validação de q vem no stringfy
            resolve(JSON.parse(text));
          }
          else {
            this.appController.exibirErro('QRCode Inválido!');
            resolve(false);
          }
          
        }
      }, catchError((err, caught) => {
        reject(err);
        console.log('caught is: ', caught);
        throw new Error(err);
      })
      );
    });
  }

}
