import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DialogAguardeComponent } from './shared/dialogs/dialogAguarde/dialogAguarde.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './modules/core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SuperTabsModule } from '@ionic-super-tabs/angular';

@NgModule({
  declarations: [
    AppComponent,
    DialogAguardeComponent
  ],
  entryComponents: [
    DialogAguardeComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    SuperTabsModule.forRoot(),
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    CoreModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    CoreModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
