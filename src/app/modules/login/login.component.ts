import { Component } from '@angular/core';
import { AppController } from '../core/appController';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent {

  constructor(public appController: AppController) { }


}
