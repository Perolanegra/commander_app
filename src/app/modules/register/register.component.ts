import { Component, OnInit } from '@angular/core';
import { AppController } from '../core/appController';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public appController: AppController) { }

  ngOnInit() {

  }


}
