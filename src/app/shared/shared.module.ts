import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaskDirective } from './directives/appMask.directive';
import { AutofocusDirective } from './directives/autoFocus.directive';
import { MaterialModule } from './material/material.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        ReactiveFormsModule,
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
        CommonModule,
        MaterialModule,
        RouterModule,
        ReactiveFormsModule,
        // MatAutocompleteModule,
        // NgxMaskModule,
        AppMaskDirective,
        AutofocusDirective
    ],
    providers:[
        // DynamicDatabase,
        // DynamicDataSource
    ]
})
export class SharedModule { }
