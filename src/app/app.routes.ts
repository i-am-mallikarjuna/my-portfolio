import { Routes } from '@angular/router';
import { Wildcard } from './features/wildcard/wildcard';
import { Home } from './features/home/home';
import { MiniProjects } from './features/mini-projects/mini-projects';

export const routes: Routes = [
    { path: '', component: Home },       
    { path: 'contact', component: Wildcard },
    { path: 'resume', component: Wildcard },
    { path: 'mini-projects', component: MiniProjects},
    { path: '**', redirectTo: '' }
];
