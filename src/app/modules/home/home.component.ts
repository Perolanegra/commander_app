import { Component } from '@angular/core';
import { AppController } from '../core/appController';
import { NavController } from '@ionic/angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { GoogleService } from 'src/app/shared/services/google.service';
import { catchError } from 'rxjs/operators';
import { throwError, EMPTY } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {
  switchVar: string = 'command';
  scannedObj = null;
  qrDataFill: Object = {
    "id": "1",
    "name": "Quiosque do Galego",
    "lat": "-13.0010826",
    "lng": "-38.5269862"
  };

  constructor(public appController: AppController,
  private navCtrl: NavController,
  private barcodeScanner: BarcodeScanner,
  private googleService: GoogleService) {
    this.qrDataFill = JSON.stringify(this.qrDataFill);
  }

  handleSwitch(newSwitch: string) {
    this.switchVar = newSwitch;
  }

  async startCommand() { // open QrCode, validate QrCode, then if success navigate to new Root 'Command'
    const scannedObj = await this.handleQrCode();
    
    if(scannedObj) { // foi setado pelo HandleQr

      const resp = await this.googleService.getDistance(Number(scannedObj.lat), Number(scannedObj.lng));
      const distanceInMeters = Number(resp['distance'].toFixed(1)) * 1000;

      if(distanceInMeters <= 70) { // Se a distância q o cara tá for menor q 70m, JUST DO IT!
        // obter o estabelecimento pelo id e navegar para Mesa passando o objeto Estabelecimento como parametro.
      }

      console.log('distancia em metros: ', distanceInMeters);
      
      // at the end, success 
      // this.navCtrl.navigateRoot('command');
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
