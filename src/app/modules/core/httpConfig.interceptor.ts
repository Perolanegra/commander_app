import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AppController } from './appController';
import { map, catchError } from 'rxjs/operators';
// import { GlobalVars } from 'src/app/shared/globalVars';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

    constructor(private appController: AppController, ) { } // private globalVars: GlobalVars

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const loader = this.appController.presentLoadingDefault();

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
              'Access-Control-Allow-Headers':
                'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
            })
          };

        request = request.clone(httpOptions);

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