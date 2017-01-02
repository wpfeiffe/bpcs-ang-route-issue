import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import appRoutes from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoutes,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
