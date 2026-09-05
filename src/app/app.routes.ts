import { Routes } from '@angular/router';
import { Wildcard } from './features/wildcard/wildcard';
import { Home } from './features/home/home';
import { MiniProjects } from './features/mini-projects/mini-projects';
import { AddContent } from './features/add-content/add-content';
import { CustomPage } from './features/custom-page/custom-page';
import { Destruction } from './features/destruction/destruction';

export const routes: Routes = [
    { path: '', component: Home },       
    { path: 'contact', component: Wildcard },
    { path: 'resume', component: Wildcard },
    { path: 'mini-projects', component: MiniProjects},
    { path: 'add', component: AddContent },
    { path: 'custom-page', component: CustomPage },
    { path: 'destruct', component: Destruction},
    { path: '**', redirectTo: '' }
];
