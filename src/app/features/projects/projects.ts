import { CommonModule } from '@angular/common';
import { Component, inject, signal, computed } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatChipsModule, MatDialogModule, MatSelectModule, MatFormFieldModule, MatInputModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = [
    {
      title: 'Bedrock',
      role: '.NET Developer',
      company: 'FS Technosol LLP',
      description: 'Maintained and enhanced desktop application components, focusing on UI responsiveness and highly efficient database interactions.',
      techStack: ['.NET', 'WPF', 'MSSQL', 'MVC', 'MVVM','XAML', 'Telerik', 'Signnow'],
      caseStudy: {
        challenge: 'The application required a more responsive user interface and highly optimized data retrieval to handle complex desktop operations efficiently.',
        solution: 'Implemented new UI screens using WPF. Managed heavy MSSQL database operations by creating custom stored procedures, functions, and direct SQL calls for optimized CRUD operations.',
        outcome: 'Successfully delivered all project milestones on time, reducing data retrieval latency by ~30% and significantly improving the end-user experience.'
      }
    },
    {
      title: 'Vasa Web Ecosystem',
      role: '.NET Developer',
      company: 'FS Technosol LLP',
      description: 'Developed and supported a suite of 5 interconnected enterprise websites. Managed complex data integration, API handling, and optimized MSSQL stored procedures for efficient CRUD operations and high scalability.',
      techStack: ['C#', '.NET', 'MSSQL', 'MVC'],
      caseStudy: {
        challenge: 'The business required a highly scalable and performant back-end architecture capable of supporting and integrating data across an ecosystem of 5 distinct websites without latency issues.',
        solution: 'Engineered the core back-end logic using C# and .NET. Designed and optimized MSSQL database interactions using custom stored procedures and functions to handle heavy CRUD operations. Seamlessly managed cross-site API integrations and performed rigorous debugging.',
        outcome: 'Increased overall system reliability and scalability, ensuring seamless communication across 5 platforms and improving API response times by ~25%.'
      },
    },
    {
      title: 'Traveler Ticket Booking',
      role: '.NET Full Stack Developer',
      company: 'Rudrani Technologies',
      description: 'Engineered a comprehensive booking platform for flights, buses, and hotels. Designed the core API architecture in .NET Core, implemented JWT authentication for secure access, and seamlessly integrated 3rd-party real-time availability APIs.',
      techStack: ['.NET Core', 'MSSQL', '3rd party API Integration'],
      caseStudy: {
        challenge: 'The client needed a unified platform that could query multiple third-party travel APIs in real-time without causing significant latency for the end user.',
        solution: 'Built robust asynchronous .NET Core API calls and implemented JWT authentication for secure access. Coordinated sprint planning to ensure the UI successfully consumed the complex data structures.',
        outcome: 'Successfully delivered real-time pricing and availability features, reducing booking friction and increasing user conversion rates.'
      }
    },
    {
      title: 'Agxcel Application',
      role: 'Associate Software Engineer',
      company: 'Nexgile Technologies',
      description: 'An agricultural web application that allows users to seamlessly control field machinery and manage fertilizer application via an Injection Unit.',
      techStack: ['Angular', '.NET Core', 'MSSQL', 'Jira', 'Git'],
      caseStudy: {
        challenge: 'The project required a highly intuitive web interface that could reliably communicate with and control physical agricultural hardware (Injection Units) in the field without overwhelming the end-user.',
        solution: 'Developed dynamic, responsive UI screens using Angular and collaborated with senior developers to design and integrate robust .NET Core APIs. Actively participated in Agile sprint meetings to continuously refine the interface based on usability feedback.',
        outcome: 'Delivered a seamless, bug-free application allowing remote management of field hardware with zero reported critical production failures during the initial rollout.'
      }
    }
  ];

  selectedTech = signal<string>('All');

  filteredProjects = computed(() => {
    if (this.selectedTech() === 'All') {
      return this.projects;
    }
    return this.projects.filter(p => p.techStack.some(t => t.toLowerCase().includes(this.selectedTech().toLowerCase())));
  });

  allTechs = computed(() => {
    const techs = new Set<string>();
    this.projects.forEach(p => p.techStack.forEach(t => techs.add(t)));
    return ['All', ...Array.from(techs)];
  });

  readonly dialog = inject(MatDialog);

  openCaseStudy(projectData: any) {
    this.dialog.open(ProjectDialogComponent, {
      data: projectData,
      width: '600px',
      maxWidth: '90vw'
    });
  }
}

import { MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';

@Component({
  selector: 'app-project-dialog',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, CommonModule],
  template: `
    <h2 mat-dialog-title class="dialog-title">{{ data.title }} Details</h2>
    <mat-dialog-content class="dialog-content">

      <div class="case-section">
        <h3>The Challenge</h3>
        <p>{{ data.caseStudy.challenge }}</p>
      </div>

      <div class="case-section">
        <h3>The Solution & Architecture</h3>
        <p>{{ data.caseStudy.solution }}</p>
      </div>

      <div class="case-section">
        <h3>The Outcome</h3>
        <p>{{ data.caseStudy.outcome }}</p>
      </div>

    </mat-dialog-content>
    <mat-dialog-actions align="center">
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `,
  styles: [`
    .dialog-title { color: var(--brand-blue); font-weight: 700; }
    .dialog-content { padding-top: 1rem; color: var(--text-primary); }
    .case-section { margin-bottom: 1.5rem; }
    .case-section h3 { font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--text-primary); }
    .case-section p { color: var(--text-secondary); line-height: 1.6; }
  `]
})
export class ProjectDialogComponent {
  readonly data = inject(MAT_DIALOG_DATA);
}
