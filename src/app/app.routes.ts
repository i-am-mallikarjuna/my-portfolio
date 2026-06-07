import { Routes } from '@angular/router';
import { Wildcard } from './features/wildcard/wildcard';
import { Home } from './features/home/home';

export const routes: Routes = [
    { path: '', component: Home },       
    { path: 'contact', component: Wildcard },
    { path: 'resume', component: Wildcard },
    { path: '**', redirectTo: '' }
];
