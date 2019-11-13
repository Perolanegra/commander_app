import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AppController } from './appController';
import { map, catchError } from 'rxjs/operators';
// import { GlobalVars } from 'src/app/shared/globalVars';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

    constructor(private appController: AppController, ) { } // private globalVars: GlobalVars

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const loader = this.appController.presentLoadingDefault();

        const headers = request.headers.set('Content-Type', 'application/json');

        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');

        request = request.clone({ headers: headers });

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
            loader.then(resp => resp.dismiss());
        }
    }


}