import { Routes } from '@angular/router';
import { Hero } from './features/hero/hero';
import { Skills } from './features/skills/skills';
import { Projects } from './features/projects/projects';

export const routes: Routes = [
    { path: '', component: Hero },       // Default "Home" view
    { path: 'skills', component: Skills },
    {path : 'projects', component: Projects }
];
