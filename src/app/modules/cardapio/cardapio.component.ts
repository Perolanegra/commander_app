import { OnInit, Component } from '@angular/core';
import { AppController } from '../core/appController';

@Component({
    selector: 'app-home',
    templateUrl: './cardapio.component.html',
    styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {
    
    constructor(public appController: AppController) {}
    
    ngOnInit(): void {
        console.log('CardapioComponent Works!');
    }
}