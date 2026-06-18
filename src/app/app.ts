import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./shared/navbar/navbar";
import { MiniProjects } from './features/mini-projects/mini-projects';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, RouterOutlet, MiniProjects],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('MyPortfolio-UI');
}
