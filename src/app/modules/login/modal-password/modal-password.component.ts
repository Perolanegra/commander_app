import { Component, Renderer2, OnInit, ViewChild, ElementRef, } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AppController } from '../../core/appController';
import { AuthService } from '../auth.service';
import { GlobalVars } from 'src/app/shared/globalVars';

@Component({
    selector: 'app-modal-password',
    templateUrl: './modal-password.component.html',
    styleUrls: ['./modal-password.component.scss']
  })
export class ModalPasswordComponent implements OnInit {
  @ViewChild('inputHidden', {static: false}) public inputFocus: ElementRef;

  forms: FormGroup;
  
  constructor(private renderer: Renderer2, 
  protected formBuilder: FormBuilder,
  private modalCtrl: ModalController,
  public appController: AppController,
  private authService: AuthService,
  private globalVars: GlobalVars,
  private navParams: NavParams) { }
  private inputValidate: boolean[] = [false,false,false,false,false,false];

  ngOnInit() {
    this.forms = this.createForm();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      email: [this.navParams.get('email'), Validators.required],
      password: ["", Validators.required],
    });
  }

  async login() {
    // fazer requisição do login
    this.globalVars.setAccessToken(await this.authService.getAccessToken(this.forms.value));
    this.signUp();
    this.appController.navigate('home');
  }

  signUp() { // criar component de Cadastrar e colocar o metodo;
    this.globalVars.setUserLoggedIn({ name: "Igor Alves", statusMsg: "Sextou", email: "pedratto3@gmail.com", password: "123", phone: "993337275" });
  }

  handleInputType({target}) {
    this.inputValidate = [false,false,false,false,false,false];
    for(let i = 0; i < target.value.length; i++) {
      this.inputValidate[i] = true;
    }
    if(this.forms.get('password').value.length >= 6) {
      this.modalCtrl.dismiss();
      this.login();
    }
  }

  
    
  
}