import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatButtonModule, RouterModule, MatIconModule, CommonModule, MatMenuModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {
  currentTheme: string = 'light';

  themes = [
    { id: 'light', label: 'Light Mode', icon: 'light_mode' },
    { id: 'dark', label: 'Dark Mode', icon: 'dark_mode' },
    { id: 'enterprise', label: 'Enterprise Modern', icon: 'business' },
    { id: 'developer', label: 'Developer Dark', icon: 'code' },
    { id: 'minimalist', label: 'Minimalist Swiss', icon: 'layers' },
  ];

  ngOnInit() {
    const savedTheme = localStorage.getItem('user-theme');
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else {
      this.setTheme('developer');
    }
  }

  setTheme(themeId: string) {
    this.currentTheme = themeId;
    localStorage.setItem('user-theme', themeId);

    // Remove all possible theme classes
    const allThemes = this.themes.map(t => `theme-${t.id}`);
    document.body.classList.remove(...allThemes);

    // Add the selected theme class
    document.body.classList.add(`theme-${themeId}`);

    // Handle color-scheme for browser elements
    document.body.style.colorScheme = (themeId === 'dark' || themeId === 'developer') ? 'dark' : 'light';
  }
}
