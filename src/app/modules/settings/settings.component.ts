import { Component } from '@angular/core';
import { AppController } from '../core/appController';

@Component({
  selector: 'app-home',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  arrayModules: [
    { name: 'account', displayTitle: 'Conta', displaySubTitle: 'Privacidade, segurança, pagamento', icon: 'vpn_key' },
    { name: 'help', displayTitle: 'Ajuda', displaySubTitle: 'Política de privacidade, Fale conosco', icon: 'help_outline' },
    { name: 'joinUs', displayTitle: 'Adicionar o meu restaurante', displaySubTitle: 'Gerenciamento, escalabilidade, menor custo', icon: 'restaurant' },
  ];

  constructor(public appController: AppController) {}

  exit() {
    console.log('Usuário clicou em sair da aplicação.');
  }



}
