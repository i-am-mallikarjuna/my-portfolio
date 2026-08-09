import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomPageService } from '../../core/services/custom-page';

@Component({
  selector: 'app-add-content',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-content.html',
  styleUrl: './add-content.scss',
})
export class AddContent {
  newText = '';
  isSaving = false;
  private customPageService = inject(CustomPageService);
  private router = inject(Router);

  save() {
    if (this.newText.trim()) {
      this.isSaving = true;
      this.customPageService.saveContent(this.newText)
        .then(() => {
          this.isSaving = false;
          this.router.navigate(['/custom-page']);
        })
        .catch((err) => {
          console.error('Save failed', err);
          this.isSaving = false;
        });
    }
  
  }
}
