import { Component, OnInit } from '@angular/core';
import { AppController } from '../../core/appController';
import { NavParams } from '@ionic/angular';

@Component({
    selector: 'app-establishment-det',
    templateUrl: './establishment-det.component.html',
    styleUrls: ['./establishment-det.component.scss'],
})
export class EstablishmentDetComponent implements OnInit {

    constructor(public appController: AppController,
    private navParams: NavParams) { }

    ngOnInit(): void {
        console.log('component det exists and works!');
        
    
    }


}
