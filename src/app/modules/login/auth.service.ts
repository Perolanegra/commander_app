import { Injectable } from "@angular/core";
import { UserModel } from 'src/app/shared/models/classes/user/user.model';

@Injectable()
export class AuthService {
    clientId;
    clientSecret;
    server: string;

    constructor() { }

    getAccessToken({ email, password }): Promise<any> {
        return new Promise((resolve, reject) => {       
            console.log('email e senha passei no AuthService: ', email, password);
            resolve("AcessToken1234");
        });
    }

    refreshAccessToken() {
        
    }

    getUserLoggedIn(): Promise<UserModel> {
        return new Promise( (resolve, reject) => {
            console.log('requisição que traz os dados do usuário logado');
            resolve({ 
                name: "Igor Alves", 
                statusMsg: "She wanna hang wit the Starboy*",
                email: "pedratto3@gmail.com", 
                password: "123", 
                phone: "993337275",
                img: "https://material.angular.io/assets/img/examples/shiba1.jpg" });
        });
    }
}