import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatChipsModule, MatDialogModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  // Translated from your resume experience into "Signature Projects"
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
        outcome: 'Successfully delivered all project milestones on time through strong cross-functional collaboration, significantly improving the end-user experience and database interaction speed.'
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
        outcome: 'Significantly improved the overall performance, scalability, and reliability of the entire web application suite, ensuring efficient data retrieval and seamless communication across all 5 platforms.'
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
        outcome: 'Successfully delivered real-time pricing and availability features. Performed rigorous local testing to eliminate bugs before production.'
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
        outcome: 'Successfully delivered a seamless, bug-free application that empowers users to remotely manage field hardware. Ensured high reliability through rigorous debugging and full-stack API integration.'
      }
    }    
  ];

  // Inject the Dialog service
  readonly dialog = inject(MatDialog);
  
  // This method will be called when the button is clicked
  openCaseStudy(projectData: any) {
    this.dialog.open(ProjectDialogComponent, {
      data: projectData, // Pass the specific project data to the pop-up
      width: '600px',    // Ensure the pop-up looks good on desktop
      maxWidth: '90vw'   // Ensure it shrinks to fit mobile screens
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
  // This allows the dialog to receive the data we passed in 'openCaseStudy()'
  readonly data = inject(MAT_DIALOG_DATA);
}
