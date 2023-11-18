import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TechComponent } from './tech/tech.component';
import { BusinessComponent } from './business/business.component';

export const routes: Routes = [
    {path: '', component:HomeComponent}, //top headlines and home
    {path:'tech', component:TechComponent},
    {path:'business', component:BusinessComponent}
];
