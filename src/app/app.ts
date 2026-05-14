import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./shared/navbar/navbar";
import { Hero } from "./features/hero/hero";
import { Skills } from "./features/skills/skills";
import { Projects } from "./features/projects/projects";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Hero, Skills, Projects],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('MyPortfolio-UI');
}
