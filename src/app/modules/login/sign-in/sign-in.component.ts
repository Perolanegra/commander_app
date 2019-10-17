import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { ModalPasswordComponent } from '../modal-password/modal-password.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  forms: FormGroup;

  constructor(protected formBuilder: FormBuilder,
  public location: Location,
  public modalCtrl: ModalController) { }

  ngOnInit() {
    this.forms = this.createForm();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      email: ["", Validators.required],
    });
  }

  async presentModalPass() {
    const modal = await this.modalCtrl.create({
      component: ModalPasswordComponent,
      componentProps: {
        "login": this.forms.get('email').value
      },
      cssClass: 'modal-footer',
      backdropDismiss: true
    });

    await modal.present();
  }


}
