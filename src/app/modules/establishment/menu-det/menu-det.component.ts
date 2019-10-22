import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { AppController } from '../../core/appController';

@Component({
    selector: 'app-establishment-det-menu',
    templateUrl: './menu-det.component.html',
    styleUrls: ['./menu-det.component.scss'],
})
export class MenuDetComponent implements OnInit {

    constructor(public appController: AppController,
    private navParams: NavParams) { }

    ngOnInit(): void {
        console.log('component Menu-det exists and works!', this.navParams.get('_id'));
    }


}
