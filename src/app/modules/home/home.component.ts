import { Component } from '@angular/core';
import { AppController } from '../core/appController';
import { NavController } from '@ionic/angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { GoogleService } from 'src/app/shared/services/google.service';
import { catchError } from 'rxjs/operators';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {
  switchVar: string = 'command';
  qrDataFill: Object = {
    "id": "3",
    "name": "Zurca",
    "lat": "-12.969416",
    "lng": "-38.436602",
    "mesa": "25"
  };

  constructor(public appController: AppController,
  private navCtrl: NavController,
  private productService: ProductService,
  private barcodeScanner: BarcodeScanner,
  private googleService: GoogleService) {
    // this.qrDataFill = JSON.stringify(this.qrDataFill);
  }

  handleSwitch(newSwitch: string) {
    this.switchVar = newSwitch;
  }

  async startCommand() { // open QrCode, validate QrCode, then if success navigate to new Root 'Command'
    this.navCtrl.navigateRoot('command', this.qrDataFill);
    // const loader = await this.appController.presentLoadingDefault();
    // const scannedObj = await this.handleQrCode();
    
    // if(scannedObj) { // foi setado pelo HandleQr
    //   const resp = await this.googleService.getDistance(Number(scannedObj.lat), Number(scannedObj.lng));
    //   // calcula a distância em metros
    //   const distanceInMeters = Number(resp['distance'].toFixed(1)) * 1000;
    //   // Se a distância for maior q 70m, ele está muito longe.
    //   if(distanceInMeters >= 70) { 
    //     this.appController.exibirErro("Muito Longe. Tente se aproximar do estabelecimento " + scannedObj.name);
    //     loader.dismiss();
    //     return;
    //   }

    //   this.navCtrl.navigateRoot('command', scannedObj);
    // }

    // loader.dismiss();
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
