import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppController } from '../core/appController';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, public appController: AppController) { }

  ngOnInit() {
  }


}
