import { Injectable } from "@angular/core";
import { UserModel } from 'src/app/shared/models/classes/user.model';
import { RestService } from '../core/rest.service';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
    // clientId;
    // clientSecret;
    // server: string;

    constructor(private restService: RestService) { }

    authenticate(email: string, password: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.restService.get('user/authenticate', {email, password}).pipe(map(resp => resp))
            .subscribe((user: UserModel) => {
                resolve(user);
            }), (err => {
                reject(err);
            })
        });
    }
    // getAccessToken() { Não é necessário implementar este método pois a aplicação não pode jogar o usuário pra fora da mesa nunca.
        
    // }

    register(name: string, email: string, password: string, phone: string, birthDate: String): Promise<UserModel> {
        return new Promise((resolve, reject) => {
            this.restService.post('user/register', {name, email, password, phone, birthDate}).pipe(map(resp => resp))
            .subscribe((user: UserModel) => {
                resolve(user);
            }), (err => {
                reject(err);
            })
        });
    }

    
}