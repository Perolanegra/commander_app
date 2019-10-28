import { Component } from '@angular/core';
import { AppController } from '../core/appController';
import { NavController } from '@ionic/angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { GoogleService } from 'src/app/shared/services/google.service';

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
    console.log('colé de pan: ', scannedObj);
    
    if(scannedObj !== null) { // foi setado pelo HandleQr

      const resp = await this.googleService.getDistance(scannedObj.lat, scannedObj.lng);
      console.log('distance: ', resp['distance'].toFixed(1));
      
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
          if(typeof  barcodeData === 'object') { // mais uma validação de q vem no stringfy
            // this.scannedObj = ;
            resolve(JSON.stringify(barcodeData));
          }
          else {
            this.appController.exibirErro('QRCode Inválido!');
            reject(null);
          }
          
        }
      }, (err => {
        console.log('sup: ', err);
        reject(err);
        
      }));
    });


  }

}
