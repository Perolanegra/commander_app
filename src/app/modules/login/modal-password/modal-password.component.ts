import { Component, Renderer2, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AppController } from '../../core/appController';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-modal-password',
    templateUrl: './modal-password.component.html',
    styleUrls: ['./modal-password.component.scss']
  })
export class ModalPasswordComponent implements OnInit {
  forms: FormGroup;
  
  constructor(private renderer: Renderer2, 
  protected formBuilder: FormBuilder,
  private modalCtrl: ModalController,
  public appController: AppController,
  private authService: AuthService,
  private navParams: NavParams) { }

  ngOnInit() {
    this.forms = this.createForm();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      email: [this.navParams.get('login'), Validators.required],
      password: ["", Validators.required],
    });
  }

  handleInputType(event) {
    console.log('evento: ', event);
    if(this.forms.get('password').value.length >= 6) {
      // fazer requisição do login
      // this.authService.obterAcessToken();
    }
  }

  login() {
    // aplicar o método de login
    this.appController.navigate('home');
  }
    
  
}