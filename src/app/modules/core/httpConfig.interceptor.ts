import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AppController } from './appController';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

    constructor(private appController: AppController) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const dialogAguarde = this.appController.abrirAguarde();
        const token: string = ''; // implementar getAcessToken

        if(token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }

        if(!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        try {
            return next.handle(request).pipe(
                map((event: HttpEvent<any>) => {
                    if(event instanceof HttpResponse) {
                        console.log('Interceptor diz, HttpResponse: ', event);
                    }
                    
                    return event;
                })
            );
            
        } catch (err) {
            this.appController.tratarErro(err);
            console.log('Interceptor diz: Requisição em Exception', err);
        }
        finally {
            dialogAguarde.then(resp => resp.dismiss());
        }
    }


}