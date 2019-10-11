import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private navParams: NavParams) { }

  ngOnInit() {
  }

  obterParams() {
    let params = new BehaviorSubject(this.navParams.get('data'));

    params.subscribe(val => {
      console.log('acionei o val: ', val);
      
    })
  }

}
