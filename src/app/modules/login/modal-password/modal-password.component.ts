import { Component, OnInit, ViewChild, ElementRef, } from '@angular/core';
import { ModalController, NavParams, NavController, LoadingController } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AppController } from '../../core/appController';
import { AuthService } from '../auth.service';
import { GlobalVars } from 'src/app/shared/globalVars';
import { Md5 } from "md5-typescript";
@Component({
    selector: 'app-modal-password',
    templateUrl: './modal-password.component.html',
    styleUrls: ['./modal-password.component.scss']
  })
export class ModalPasswordComponent implements OnInit {
  @ViewChild('inputHidden', {static: false}) public inputFocus: ElementRef;

  forms: FormGroup;
  
  constructor(private navCtrl: NavController, 
  protected formBuilder: FormBuilder,
  private modalCtrl: ModalController,
  public appController: AppController,
  private authService: AuthService,
  private globalVars: GlobalVars,
  private navParams: NavParams) { }
  public inputValidate: boolean[] = [false,false,false,false,false,false];

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
    // call request service to get the data
    const loader = await this.appController.presentLoadingDefault();
    try {
      this.forms.controls['password'].setValue(Md5.init(this.forms.value.password));

      const userAuthenticated = await this.authService.authenticate(this.forms.value);
      const { password } = userAuthenticated;
      console.log('MD5 / digitado: ',  Md5.init(this.forms.value.password), password);

      if(password !== Md5.init(this.forms.value.password)) {
        this.appController.showWarning('Usuário ou senha inválidos!');
        return;
      }

      this.globalVars.setUserLoggedIn(userAuthenticated);
      this.navCtrl.navigateRoot('home');
      
    } catch(err) {
      this.appController.tratarErro(err);
      this.forms.get('password').reset();
    } finally {
      loader.dismiss();
    }
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