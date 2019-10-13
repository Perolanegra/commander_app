import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  obterParams() {
    let params = new BehaviorSubject(this.route.snapshot.paramMap.get('data'));

    params.subscribe(val => {
      console.log('acionei o val: ', val);
      
    })
  }

}
