import { Injectable } from '@angular/core';
import { RestService } from '../core/rest.service';
import { AppController } from '../core/appController';
import { map } from 'rxjs/operators';

@Injectable()
export class VisitService {

    constructor(private appController: AppController,
    private restService: RestService) { }

    public getByTableId(id_table: string, id_user: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.restService.get('visit/getByTableId', {id_table, id_user}).pipe(map(resp => resp))
            .subscribe(visit => {
                resolve(visit);
            }), (err) => {
                reject(err);
            }
        });
    }

    public getByIds(): Promise<any> {
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