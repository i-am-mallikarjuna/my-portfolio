import { Component, signal, OnInit, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { Navbar } from "./shared/navbar/navbar";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private router = inject(Router);
  private cachedLocationData: any = null;

  ngOnInit() {
    // Force refresh if a new version is deployed
    this.checkForUpdates();

    // Log the very first visit
    this.logVisitorData();

    // Log every subsequent route change
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.logVisitorData();
    });
  }

  async checkForUpdates() {
    try {
      // Fetch version with a timestamp to bypass browser cache
      const response = await fetch(`/version.json?t=${Date.now()}`);
      const data = await response.json();
      const currentVersion = data.version;
      const storedVersion = localStorage.getItem('app_version');

      if (storedVersion !== currentVersion) {
        console.log('New version detected! Updating...');
        localStorage.setItem('app_version', currentVersion);

        // Clear cache and reload
        window.location.reload();
      }
    } catch (error) {
      console.error('Version check failed', error);
    }
  }

  logVisitorData() {
    const sendToSheet = (locationData: any) => {
      const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbzKpuTnVT1O0pb6gz2wiXdVuhvBO-GvhlwG2Kh2EAc5qrSA4G3Ue1MHxnGMoalUuFqNhg/exec';
      const payload = {
        ...locationData,
        routername: this.router.url
      };

      fetch(googleScriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    };

    // Use cached data if available to avoid Rate Limiting
    if (this.cachedLocationData) {
      sendToSheet(this.cachedLocationData);
    } else {
      // First time: Fetch the user's IP and Location
      fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(locationData => {
          this.cachedLocationData = locationData;
          sendToSheet(locationData);
        })
        .catch(error => console.error('Tracking blocked or failed', error));
    }
  }

  protected readonly title = signal('MyPortfolio-UI');
}
