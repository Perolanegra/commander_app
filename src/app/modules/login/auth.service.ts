import { Injectable } from "@angular/core";

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

    atualizarAcessToken() {
        
    }
}