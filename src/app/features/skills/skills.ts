import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common'; // Required for looping through skills

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  // Grouping skills makes them easy for recruiters to scan [cite: 499]
  skillGroups = [
    { name: 'Languages', skills: ['C#', 'TypeScript', 'SQL'] },
    { name: 'Frameworks', skills: ['ASP.NET Core', 'Angular', 'Entity Framework'] },
    { name: 'Tools & DevOps', skills: ['Docker', 'Azure', 'Git', 'xUnit'] }
  ];
}