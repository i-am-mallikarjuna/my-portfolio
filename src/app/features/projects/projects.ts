import { Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { PROJECTS, Project } from '../../core/data/profile';
import { Reveal } from '../../shared/reveal/reveal';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, Reveal],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly projects = PROJECTS;
  readonly selectedTech = signal<string>('All');

  readonly filteredProjects = computed(() => {
    const tech = this.selectedTech().toLowerCase();
    if (tech === 'all') {
      return this.projects;
    }
    return this.projects.filter((p) => p.techStack.some((t) => t.toLowerCase().includes(tech)));
  });

  readonly allTechs = computed(() => {
    const techs = new Set<string>();
    this.projects.forEach((p) => p.techStack.forEach((t) => techs.add(t)));
    return ['All', ...techs];
  });

  private readonly dialog = inject(MatDialog);

  openCaseStudy(project: Project) {
    this.dialog.open(ProjectDialogComponent, {
      data: project,
      width: '640px',
      maxWidth: '92vw',
      autoFocus: false,
    });
  }
}

@Component({
  selector: 'app-project-dialog',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, MatIconModule],
  template: `
    <div class="dialog-head" mat-dialog-title>
      <span class="eyebrow">{{ data.company }} · {{ data.role }}</span>
      <h2>{{ data.title }}</h2>
    </div>
    <mat-dialog-content class="dialog-content">
      @for (section of sections; track section.key) {
        <div class="case-section">
          <div class="case-icon"><mat-icon>{{ section.icon }}</mat-icon></div>
          <div>
            <h3>{{ section.title }}</h3>
            <p>{{ data.caseStudy[section.key] }}</p>
          </div>
        </div>
      }
      <div class="tags">
        @for (tech of data.techStack; track tech) {
          <span class="tag">{{ tech }}</span>
        }
      </div>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button class="btn btn-primary" mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `,
  styles: [`
    .dialog-head { padding-top: 1.5rem; }
    .dialog-head h2 { margin: 0.25rem 0 0; font-size: 1.8rem; font-weight: 700; color: var(--text-primary); }
    .eyebrow { font: 500 0.75rem var(--font-mono); letter-spacing: 0.12em; text-transform: uppercase; color: var(--brand-blue); }
    .dialog-content { color: var(--text-primary); }
    .case-section { display: flex; gap: 1rem; margin-bottom: 1.5rem; }
    .case-icon {
      flex: 0 0 40px; height: 40px; display: grid; place-items: center; border-radius: 12px;
      background: var(--brand-soft); color: var(--brand-blue);
    }
    .case-section h3 { font-size: 1.05rem; margin: 0 0 0.35rem; color: var(--text-primary); }
    .case-section p { margin: 0; color: var(--text-secondary); line-height: 1.65; }
    .tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
    mat-dialog-actions { padding: 0.75rem 1.5rem 1.5rem; }
  `],
})
export class ProjectDialogComponent {
  readonly data = inject<Project>(MAT_DIALOG_DATA);
  readonly sections = [
    { key: 'challenge', title: 'The Challenge', icon: 'flag' },
    { key: 'solution', title: 'The Solution & Architecture', icon: 'architecture' },
    { key: 'outcome', title: 'The Outcome', icon: 'emoji_events' },
  ] as const;
}
