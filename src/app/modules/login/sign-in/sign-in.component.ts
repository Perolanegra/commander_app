import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { ModalPasswordComponent } from '../modal-password/modal-password.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  inputEmail: any;

  constructor(protected formBuilder: FormBuilder,
  public location: Location,
  public modalCtrl: ModalController) { }

  ngOnInit() {
  }

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
