import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { ModalController, NavController } from '@ionic/angular';
import { ModalPasswordComponent } from '../modal-password/modal-password.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  inputEmail: any;

  constructor(protected formBuilder: FormBuilder,
  public navCtrl: NavController,
  public location: Location,
  public modalCtrl: ModalController) { }

  async presentModalPass() {
    const modal = await this.modalCtrl.create({
      component: ModalPasswordComponent,
      componentProps: {
        "email": this.inputEmail
      },
      cssClass: 'modal-footer',
    });

    await modal.present();
  }

}
