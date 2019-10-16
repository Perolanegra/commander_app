import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { AppController } from '../../core/appController';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
    forms: FormGroup;

  constructor(private route: ActivatedRoute, 
  protected formBuilder: FormBuilder, 
  public location: Location,
  public appController: AppController,
  private actionSheetController: ActionSheetController) { }

  ngOnInit() {
    this.forms = this.createForm();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
        email: ["", Validators.required],
        // password: ["", Validators.required]
    });
  }

  login() {
    // aplicar o método de login
    this.appController.navigate('home');
  }

  presentPassActionSheet() {
    this.actionSheetController.create({
        header: 'Digite a senha',
        buttons: [{
            text: 'Entrar',
            icon: 'trash',
            handler: () => {
                console.log('pass clicked');
            },
        }],
        backdropDismiss: false,
    }).then(actionSheet => {
        actionSheet.present();
    });

  }

}
