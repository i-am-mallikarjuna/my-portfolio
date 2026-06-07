import { Component } from '@angular/core';
import { Hero } from "../hero/hero";
import { Projects } from "../projects/projects";
import { Skills } from "../skills/skills";

@Component({
  selector: 'app-home',
  imports: [Hero, Projects, Skills],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
