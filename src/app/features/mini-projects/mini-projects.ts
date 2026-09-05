import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-mini-projects',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatSelectModule, MatIconModule],
  templateUrl: './mini-projects.html',
  styleUrl: './mini-projects.scss',
})
export class MiniProjects {
  // Inject Angular's security sanitizer so the iframe doesn't block your code
  private sanitizer = inject(DomSanitizer);

  // List of your HTML files. Update these exact filenames if needed!
  experiments = [
    { name: 'Beating Heart', path: 'mini-projects/beating-heart.html' },
    // { name: 'Button Bear', path: 'mini-projects/button-bear.html' },
    { name: 'Funny Black Holes', path: 'mini-projects/FunnyBlackHoles.html' },
    { name: 'Glowing Text', path: 'mini-projects/glowingText.html' },
    { name: 'Digital Wish Tree', path: 'mini-projects/DigitalWishTree.html' },
    { name: 'Ghost Boo', path: 'mini-projects/Boo.html' },
    { name: 'Interactive Book', path: 'mini-projects/Book.html' },
    { name: 'Circle Lines', path: 'mini-projects/circleLines.html' },
    { name: 'HBD Tuffy', path: 'mini-projects/HappyBirthday_Tuffy.html' },
    // { name: 'HBD Tuffy (Alt)', path: 'mini-projects/HappyBirthdayTufffy .html' }
  ];

  // Set the default project to load first (sanitized!)
  selectedUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.experiments[0].path);
  activeProjectName: string = this.experiments[0].name;
  selectedPath: string = this.experiments[0].path;
  selectedExperiment = this.experiments[0];

  // Function to change the iframe source when a button is clicked
  selectExperiment(project: any) {
    this.selectedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(project.path);
    this.activeProjectName = project.name;
    this.selectedPath = project.path;
    this.selectedExperiment = project;
  }
}
