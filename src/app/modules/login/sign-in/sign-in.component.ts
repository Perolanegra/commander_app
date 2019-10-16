import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { AppController } from '../../core/appController';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { ModalPasswordComponent } from '../modal-password/modal-password.component';
import { PinDialog } from '@ionic-native/pin-dialog/ngx';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  forms: FormGroup;

  constructor(private route: ActivatedRoute,
    protected formBuilder: FormBuilder,
    private actionSheet: ActionSheetController,
    public location: Location,
    public appController: AppController,
    private pinDialog: PinDialog,
    public modalCtrl: ModalController) { }

  ngOnInit() {
    this.forms = this.createForm();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  login() {
    // aplicar o método de login
    this.appController.navigate('home');
  }


  async presentModalPass() {
    const modal = await this.modalCtrl.create({
      component: ModalPasswordComponent,
      cssClass: 'modal-pass',
      backdropDismiss: false
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    this.forms.controls.password.setValue(data.password);
  }

  presentPin() {
    this.pinDialog.prompt('Enter your PIN', 'Verify PIN', ['OK', 'Cancel'])
      .then(
        (result: any) => {
          if (result.buttonIndex == 1) console.log('User clicked OK, value is: ', result.input1);
          else if (result.buttonIndex == 2) console.log('User cancelled');
        }
      );
  }

}
