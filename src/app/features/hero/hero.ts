import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { PROFILE, PROJECTS, SKILL_GROUPS, calculateExperienceYears } from '../../core/data/profile';
import { Reveal } from '../../shared/reveal/reveal';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatIconModule, RouterLink, Reveal],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit, OnDestroy {
  readonly profile = PROFILE;
  readonly experienceYears = calculateExperienceYears();

  readonly focusAreas = ['scalable APIs', 'enterprise apps', 'clean SQL', 'modern UIs', 'AI-powered workflows'];
  readonly focusIndex = signal(0);

  readonly stats = [
    { value: `${this.experienceYears}+`, label: 'Years experience' },
    { value: `${PROJECTS.length}`, label: 'Enterprise projects' },
    { value: `${new Set(PROJECTS.map((p) => p.company)).size}`, label: 'Companies' },
    { value: `${SKILL_GROUPS.reduce((n, g) => n + g.skills.length, 0)}+`, label: 'Technologies' },
  ];

  private timer?: ReturnType<typeof setInterval>;

  ngOnInit() {
    this.timer = setInterval(
      () => this.focusIndex.update((i) => (i + 1) % this.focusAreas.length),
      2600,
    );
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
