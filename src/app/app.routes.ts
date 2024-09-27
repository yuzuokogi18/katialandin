import { Routes } from '@angular/router';
import { MaquillajeComponent } from '../component/maquillaje/maquillaje.component';
import { PielComponent } from '../component/piel/piel.component';
import { HomeComponent } from '../component/home/home.component';
export const routes: Routes = [
    {path:'maquillaje', component:MaquillajeComponent},
    {path:'piel', component: PielComponent},
    {path:'', component: HomeComponent}
];