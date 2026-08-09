import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CustomPageService {
  private http = inject(HttpClient);

  // PASTE YOUR GOOGLE WEB APP URL HERE:
  private scriptUrl = 'https://script.google.com/macros/s/AKfycbx0Eue1DOaF03gYhCM5BD0AWfj0ihMwN1IkQfUkLAtHThfchJHPLg_1rgxKW3uR8j5kaw/exec';

  /// Save content to Google Sheets
  async saveContent(text: string): Promise<any> {
    const response = await fetch(this.scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ thought: text })
    });
    return response.text();
  }

  // Fetch all saved content from Google Sheets
  // Fetch all saved content from Google Sheets
  async getContent(): Promise<any[]> {
    try {
      // Explicitly tell the browser to follow Google's 302 redirects
      const response = await fetch(this.scriptUrl, {
        method: 'GET',
        redirect: 'follow'
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Grab the raw text first to prevent silent JSON parsing crashes
      const rawText = await response.text();

      // Convert it to JSON and return it
      return JSON.parse(rawText);

    } catch (error) {
      console.error('Fetch Error:', error);
      throw error;
    }
  }
}
