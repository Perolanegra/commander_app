import { Component } from '@angular/core';
import { AppController } from '../core/appController';
import { NavController } from '@ionic/angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { GoogleService } from 'src/app/shared/services/google.service';
import { catchError } from 'rxjs/operators';
import { VisitService } from '../core/visit.service';
import { GlobalVars } from 'src/app/shared/globalVars';
import { DefaultScreen } from '../core/defaultScreen';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent extends DefaultScreen {
  switchVar: string = 'command';
  qrDataFill: Object = {
    "table_id": "5dcbd98b718232550d6ae367",
    "name": "Terapia Restaurante e Bar",
    "lat": "-12.96936",
    "lng": "-38.436841",
    "tableNumber": "4",
    "id_establishment" : "5dc5c0a4e3ae253cfdb84d00"
  };

  constructor(public appController: AppController,
  private navCtrl: NavController,
  protected route: ActivatedRoute,
  private barcodeScanner: BarcodeScanner,
  private visitService: VisitService,
  private globalVars: GlobalVars,
  private googleService: GoogleService) {
    super(route);
    // this.qrDataFill = JSON.stringify(this.qrDataFill);
  }

  handleSwitch(newSwitch: string, fab) {
    fab.close();
    this.switchVar = newSwitch;
  }

  async startCommand() { // open QrCode, validate QrCode, then if success navigate to new Root 'Command'
    this.navCtrl.navigateRoot('command', {queryParams: this.qrDataFill});
    // const loader = await this.appController.presentLoadingDefault();
    // try {
    //   const scannedObj = await this.handleQrCode();

    //   if(scannedObj) { // foi setado pelo HandleQr
    //     const resp = await this.googleService.getDistance(Number(scannedObj.lat), Number(scannedObj.lng));
    //     // calcula a distância em metros
    //     const distanceInMeters = Number(resp['distance'].toFixed(1)) * 1000;
    //     // Se a distância for maior q 70m, ele está muito longe.
    //     if(distanceInMeters >= 70) { 
    //       this.appController.showError("Muito Longe. Tente se aproximar do estabelecimento " + scannedObj.name);
    //       loader.dismiss();
    //       return;
    //     }

    //     this.navCtrl.navigateRoot('command', { queryParams: scannedObj });
    //   }
    // } catch (e) {
    //   this.appController.showError(e);
    // }
    // finally {
    //   loader.dismiss();
    // }

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
          try {
            if(text && typeof JSON.parse(text) === 'object') { // mais uma validação de q vem no stringfy
              resolve(JSON.parse(text));
            }
          } catch (e) {
            this.appController.showError('QRCode Inválido!');
          }
        }
        resolve(false);
      }, catchError((err, caught) => {
        reject(err);
        console.log('QRCode caught is: ', caught);
        throw new Error(err);
      }));
    });
  }

  public get orders() {
    return this.respResolvers.myOrders;
  }

}
