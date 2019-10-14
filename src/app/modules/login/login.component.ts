import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, private googlePlus: GooglePlus) { }

  ngOnInit() {
  }

  obterParams() {
    let params = new BehaviorSubject(this.route.snapshot.paramMap.get('data'));

    params.subscribe(val => {
      console.log('acionei o val: ', val);
      
    })
  }

  loginGoogle() {
    // chave antiga: 792572097120-qjp4iv0lggjb65vvhoa0bkhg012cfsan.apps.googleusercontent.com
    this.googlePlus.login({
      'webClientId': '792572097120-2d7tqj22567cs41j4m75vhifjb9qrugi.apps.googleusercontent.com',
      'offline': true
    }).then(res => console.log('resposta: ', res)).catch(err => console.log('erro: ', err));
  }

}
