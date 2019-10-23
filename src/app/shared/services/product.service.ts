import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { RestService } from 'src/app/modules/core/rest.service';

@Injectable()
export class ProductService {

    constructor(private restService: RestService) { }

    public getById(_id: String): Promise<Object> {
        return new Promise((resolve, reject) => {

            const products = [
                {
                    "title": 'Mistão',
                    "img": 'http://www.qburgao.com.br/iririu/wp-content/uploads/2018/02/25-1.jpg',
                    "description": 'Carne mista (boi, frango, porco e calabresa), batata frita, cebola e cheddar',
                    "price": '46,80'
                },
                {
                    "title": 'Arrumadinho Carne do Sol',
                    "img": 'https://media-cdn.tripadvisor.com/media/photo-s/11/04/42/e0/arrumadinho-de-carne.jpg',
                    "description": 'Carne do sol, salada de alface, farofa e feijão verde',
                    "price": '38,90'
                },
                {
                    "title": 'Escondidinho de Camarão',
                    "img": 'http://atdigital.com.br/boamesa/wp-content/uploads/2014/09/090914-Escondidinho-Camarao-07-1024x682.jpg',
                    "description": 'Aimpim, coentro, cebola, azeitona, tomate e salsinha',
                    "price": '39,90'
                },
            ];

            resolve(products);
            // this.restService.get('products', _id).pipe(map(resp => resp))
            // .subscribe(value => {
            //     resolve(value); // colchetes por enquanto
            // }), (err) => {
            //     reject(err);
            // }
        });

    }



}