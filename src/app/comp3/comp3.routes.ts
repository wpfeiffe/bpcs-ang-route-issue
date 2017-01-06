import {Routes, RouterModule} from "@angular/router";
import {Comp3Component} from "./comp3.component";

const routes: Routes = [
    {path: '', component:Comp3Component}
];

export const comp3Routing = RouterModule.forChild(routes);