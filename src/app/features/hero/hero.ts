import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-hero',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}
