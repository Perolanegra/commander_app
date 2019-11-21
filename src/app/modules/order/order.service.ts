import { Injectable } from '@angular/core';
import { RestService } from '../core/rest.service';
import { AppController } from '../core/appController';
import { map } from 'rxjs/operators';
import { ItemsModel } from 'src/app/shared/models/classes/items.model';


@Injectable()
export class OrderService {

    constructor(private appController: AppController,
    private restService: RestService) { }

    public store(items: Array<ItemsModel>, id_user: string, id_visit: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.restService.post('orders/store', {items, id_user, id_visit}).pipe(map(resp => resp))
            .subscribe(value => {
                resolve(value);
            }), (err) => {
                reject(err);
            }
        });
    }



    public getByCommandId(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve([{
                "_id": 1,
                "name": "Quiosque do Galego",
                "description": "Bar e Restaurante",
                "distance": "",
                "duration": "",
                "lat": -12.969220,
                "lng": -38.436758,
                "rating": "4.3",
                "img": "https://s3-media4.fl.yelpcdn.com/bphoto/Ia7nxDwEVYPL27tt21z70A/ls.jpg",
                "feedback": 'Some text here...',
                "schedule": "11:00 às 02:00",
                "address": "Avenida Jorge Amado, s/nº, Canal do Imbuí, Salvador - BA"
            }]);
            // this.restService.get('establishments', null).pipe(map(resp => resp))
            // .subscribe(value => {
            //     resolve(value); // colchetes por enquanto
            // }), (err) => {
            //     reject(err);
            // }
        });
    }


    
}