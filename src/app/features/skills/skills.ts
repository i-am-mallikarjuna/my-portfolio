import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SKILL_GROUPS } from '../../core/data/profile';
import { Reveal } from '../../shared/reveal/reveal';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatIconModule, Reveal],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  readonly skillGroups = SKILL_GROUPS;
  readonly allSkills = SKILL_GROUPS.flatMap((g) => g.skills);
}
