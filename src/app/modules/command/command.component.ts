import { Component, OnInit } from '@angular/core';
import { AppController } from '../core/appController';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss'],
})
export class CommandComponent implements OnInit {

  constructor(public appController: AppController,
  private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('CommandComponent Works: ', this.route.snapshot.paramMap.keys);
  }

}
