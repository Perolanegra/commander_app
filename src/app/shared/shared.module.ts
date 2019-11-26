import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaskDirective } from './directives/appMask.directive';
import { AutofocusDirective } from './directives/autoFocus.directive';
import { MaterialModule } from './material/material.module';
import { GlobalVars } from './globalVars';
import { IonicModule } from '@ionic/angular';
import { RealPipe } from '../modules/core/pipes/real.pipe';
import { DatePipe } from '../modules/core/pipes/date.pipe';
// import { TooltipsModule } from 'ionic-tooltips';

const modules = [
    CommonModule,
    IonicModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    // MatAutocompleteModule,
]
@NgModule({
    imports: [
        ...modules,
        // TooltipsModule.forRoot()
        // MatAutocompleteModule,
        // MatTooltipModule,
        // NgxMaskModule.forRoot(),
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    declarations: [
        AppMaskDirective,
        AutofocusDirective,
        RealPipe,
        DatePipe
    ],  
    exports: [ 
        ...modules,
        AppMaskDirective,
        AutofocusDirective,
        RealPipe,
        DatePipe
        // NgxMaskModule,
    ],
    providers:[
        GlobalVars
        // DynamicDatabase,
        // DynamicDataSource
    ]
})
export class SharedModule { }
