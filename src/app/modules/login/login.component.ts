import { Component } from '@angular/core';
import { AppController } from '../core/appController';
import { GlobalVars } from 'src/app/shared/globalVars';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent {

  constructor(public appController: AppController, 
  private globalVars: GlobalVars,
  private navCtrl: NavController) { }

  async verifyUser() {
    if(this.globalVars.isLogged()) {
      const loader = await this.appController.presentLoadingDefault();
      this.navCtrl.navigateRoot('home');
      loader.dismiss();
    }
    else {
      this.appController.navigate('login/sign-in');
    }
  }

}
