import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ModalController, NavController } from '@ionic/angular';
import { ModalPasswordComponent } from '../modal-password/modal-password.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  forms: any;

  constructor(protected formBuilder: FormBuilder,
  public navCtrl: NavController,
  public location: Location,
  public modalCtrl: ModalController) { }

  ngOnInit() {
    this.forms = this.createForm();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      email: ["", Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
    });
  }

  async presentModalPass() {
    const modal = await this.modalCtrl.create({
      component: ModalPasswordComponent,
      componentProps: {
        "email": this.forms.value.email
      },
      cssClass: 'modal-footer',
    });

    await modal.present();
  }

}
