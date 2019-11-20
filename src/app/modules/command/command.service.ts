import { Injectable } from '@angular/core';
import { RestService } from 'src/app/modules/core/rest.service';
import { map } from 'rxjs/operators';

@Injectable()
export class CommandService {

    constructor(private restService: RestService) { }

    public getByVisitId(id_visit: string): Promise<Object> {
        return new Promise((resolve, reject) => {
            this.restService.get('command/getByVisitId', {id_visit}).pipe(map(resp => resp))
                .subscribe(value => {
                    resolve(value);
                }), (err) => {
                    reject(err);
                }            
        });

    }
}