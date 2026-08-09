import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CustomPageService } from '../../core/services/custom-page';

@Component({
  selector: 'app-custom-page',
  imports: [CommonModule, DatePipe, MatIconModule],
  templateUrl: './custom-page.html',
  styleUrl: './custom-page.scss',
})
export class CustomPage implements OnInit {
  private customPageService = inject(CustomPageService);
  private cdr = inject(ChangeDetectorRef);
  pageContent: any[] = [];
  isLoading = true;
  errorMessage = '';

  async ngOnInit() {
    try {
      this.pageContent = await this.customPageService.getContent();
    } catch (err) {
      console.error('Failed to load content', err);
      this.errorMessage = 'Failed to load content from Google Sheets.';
    } finally {
      this.isLoading = false;
      this.cdr.detectChanges(); // Force Angular to redraw the screen immediately!
    }
  }
}
