import { Component, OnInit } from '@angular/core';
import { AppController } from '../core/appController';
import { UserModel } from 'src/app/shared/models/classes/user/user.model';
import { GlobalVars } from 'src/app/shared/globalVars';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  
  arrayModules = [
    { name: 'account', displayTitle: 'Conta', displaySubTitle: 'Privacidade, segurança, pagamento', icon: 'vpn_key' },
    { name: 'help', displayTitle: 'Ajuda', displaySubTitle: 'Política de privacidade, Fale conosco', icon: 'help_outline' },
    { name: 'joinUs', displayTitle: 'Adicionar o meu restaurante', displaySubTitle: 'Gerenciamento, escalabilidade, menor custo', icon: 'restaurant' },
  ];

  constructor(public appController: AppController,
  private globalVars: GlobalVars,
  public navCtrl: NavController) {}

  ngOnInit(): void {
    console.log('blz');
    
  }

  exit() {
    console.log('AcessToken: ', this.globalVars.getAccessToken());
  }

  public get user(): UserModel {
    return this.globalVars.getUserLoggedIn();
  }


}
