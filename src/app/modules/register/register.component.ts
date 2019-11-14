import { Component, OnInit } from '@angular/core';
import { AppController } from '../core/appController';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { NavController } from '@ionic/angular';
import { AuthService } from '../login/auth.service';
import { Md5 } from "md5-typescript";
import { GlobalVars } from 'src/app/shared/globalVars';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  forms: FormGroup;
  public hide: Boolean = true;

  constructor(public appController: AppController,
  private formBuilder: FormBuilder,
  public navCtrl: NavController,
  private auth: AuthService,
  private globalVars: GlobalVars,
  private datePicker: DatePicker) { }

  ngOnInit() {
    this.forms = this.createForm();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      password: ["", Validators.required],
      birthDate: [null],
      phone: [""],
    });
  }

  showDatePicker() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => this.forms.controls['birthDate'].setValue(date),
      err => this.appController.showError(err)
    );
  }

  async register() {
    if(this.forms.value.password.length < 8) {
      this.appController.showWarning('Senha precisa de no mínimo 8 caracteres.');
      return;
    }
    
    const userAuthenticated = await this.auth.register(
      this.forms.value.email, Md5.init(this.forms.value.password), 
      this.forms.value.name, this.forms.value.phone, this.forms.value.birthDate);

    if(userAuthenticated) {
      this.globalVars.setUserLoggedIn(userAuthenticated);
      this.navCtrl.navigateRoot('home');
    }
  }

}
