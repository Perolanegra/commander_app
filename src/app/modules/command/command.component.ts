import { Component, OnInit } from '@angular/core';
import { AppController } from '../core/appController';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss'],
})
export class CommandComponent implements OnInit {

  constructor(public appController: AppController) { }

  ngOnInit() {
    console.log('CommandComponent Works!');
  }

}
