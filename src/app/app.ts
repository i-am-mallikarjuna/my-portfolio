import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./shared/navbar/navbar";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  ngOnInit() {
    this.logVisitorData();
  }

  logVisitorData() {
    // 1. Fetch the user's IP and Location from a free public API
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(locationData => {

        // 2. Send that data to your Google Sheet Web App
        const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbzKpuTnVT1O0pb6gz2wiXdVuhvBO-GvhlwG2Kh2EAc5qrSA4G3Ue1MHxnGMoalUuFqNhg/exec';

        fetch(googleScriptUrl, {
          method: 'POST',
          mode: 'no-cors', // Bypasses browser security warnings for background tracking
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(locationData)
        });

      })
      .catch(error => console.error('Tracking blocked or failed', error));
  }

  protected readonly title = signal('MyPortfolio-UI');
}
