import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaskDirective } from './directives/appMask.directive';
import { AutofocusDirective } from './directives/autoFocus.directive';
import { MaterialModule } from './material/material.module';
import { GlobalVars } from './globalVars';

const modules = [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    // MatAutocompleteModule,
]
@NgModule({
    imports: [
        ...modules
        // MatAutocompleteModule,
        // MatTooltipModule,
        // NgxMaskModule.forRoot(),
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    declarations: [
        AppMaskDirective,
        AutofocusDirective
    ],  
    exports: [ 
        ...modules,
        AppMaskDirective,
        AutofocusDirective
        // NgxMaskModule,
    ],
    providers:[
        GlobalVars
        // DynamicDatabase,
        // DynamicDataSource
    ]
})
export class SharedModule { }
