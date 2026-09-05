import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-destruction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destruction.html',
  styleUrl: './destruction.scss',
})
export class Destruction {
  isDestroyed = false;

  triggerDestruction() {
    this.isDestroyed = true;
  }

  reset() {
    this.isDestroyed = true;
  }
}
