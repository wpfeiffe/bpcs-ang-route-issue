import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp3Component } from "./comp3.component";
import { Routes, RouterModule } from '@angular/router';
import comp3Routes from "./comp3.routes";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        comp3Routes,

    ],
    declarations: [
        Comp3Component
    ],
    exports: [
        Comp3Component, comp3Routes
    ],

    providers: [],
})
export default class Comp3Module { }
