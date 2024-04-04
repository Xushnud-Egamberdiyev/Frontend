import { Routes } from '@angular/router';
import { HomeComponent } from './companents/pages/home/home.component';
import { AboutComponent } from './companents/pages/about/about.component';
import { NotfoundComponent } from './companents/pages/notfound/notfound.component';

export const routes: Routes = [
    {path: 'home', title: 'Home Page', component: HomeComponent},
    {path: 'about', title: 'About', component: AboutComponent},
    {path: '**', title: 'notfound', component: NotfoundComponent}
];
 