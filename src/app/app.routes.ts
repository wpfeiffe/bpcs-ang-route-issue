import {RouterModule, Routes} from "@angular/router";
import {Comp1Component} from "./comp1/comp1.component";
import {Comp2Component} from "./comp2/comp2.component";



export const appRoutes: Routes  = [
    { path: 'comp1', component: Comp1Component},
    { path: 'comp2', component: Comp2Component},
    { path: 'comp3', loadChildren: './comp3/comp3.module#Comp3Module'},


];


