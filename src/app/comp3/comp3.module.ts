import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp3Component } from "./comp3.component";
import { Routes, RouterModule } from '@angular/router';
import { comp3Routing } from "./comp3.routes";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        comp3Routing,

    ],
    declarations: [
        Comp3Component
    ],
    exports: [
        Comp3Component
    ],

    providers: [],
})
export class Comp3Module { }
