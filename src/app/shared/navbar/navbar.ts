import { Component, OnInit, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface ThemeOption {
  id: string;
  label: string;
  icon: string;
  image?: string;
}

@Component({
  selector: 'app-navbar',
  imports: [MatButtonModule, MatIconModule, MatMenuModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  host: {
    '[class.scrolled]': 'scrolled()',
    '(window:scroll)': 'onScroll()',
  },
})
export class Navbar implements OnInit {
  readonly themes: ThemeOption[] = [
    { id: 'light', label: 'Light Mode', icon: 'light_mode' },
    { id: 'dark', label: 'Dark Mode', icon: 'dark_mode' },
    { id: 'enterprise', label: 'Enterprise Modern', icon: 'business' },
    { id: 'developer', label: 'Developer Dark', icon: 'code' },
    { id: 'minimalist', label: 'Minimalist Swiss', icon: 'layers' },
    { id: 'ironman', label: 'Iron Man', icon: 'rocket_launch', image: 'ironman-arc.png' },
    { id: 'batman', label: 'Batman', icon: 'nightshade', image: 'batman-logo.png' },
  ];

  readonly sectionLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
  ];

  readonly routeLinks = [
    { label: 'Custom Page', path: '/custom-page' },
    { label: 'Contact', path: '/contact' },
    { label: 'Mini Projects', path: '/mini-projects' },
  ];

  readonly currentThemeId = signal('developer');
  readonly currentTheme = computed(
    () => this.themes.find((t) => t.id === this.currentThemeId()) ?? this.themes[0],
  );
  readonly scrolled = signal(false);
  readonly scrollProgress = signal(0);

  ngOnInit() {
    this.setTheme(localStorage.getItem('user-theme') ?? 'developer');
    this.onScroll();
  }

  onScroll() {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    this.scrolled.set(doc.scrollTop > 10);
    this.scrollProgress.set(max > 0 ? Math.min(100, (doc.scrollTop / max) * 100) : 0);
  }

  setTheme(themeId: string) {
    if (!this.themes.some((t) => t.id === themeId)) {
      themeId = 'developer';
    }
    this.currentThemeId.set(themeId);
    localStorage.setItem('user-theme', themeId);

    document.body.classList.remove(...this.themes.map((t) => `theme-${t.id}`));
    document.body.classList.add(`theme-${themeId}`);

    const lightThemes = ['light', 'enterprise', 'minimalist'];
    document.body.style.colorScheme = lightThemes.includes(themeId) ? 'light' : 'dark';
  }
}
