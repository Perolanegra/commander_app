import { NgModule } from '@angular/core';
// import { RouteReuseStrategy } from '@angular/router';
// import { CacheRouteReuseStrategy } from './cacheRouteReuse.strategy';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppController } from './appController';
import { RestService } from './rest.service';
import { HttpConfigInterceptor } from './httpConfig.interceptor';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    AppController,
    RestService,
    // { provide: RouteReuseStrategy, useClass: CacheRouteReuseStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
    // {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class CoreModule { }