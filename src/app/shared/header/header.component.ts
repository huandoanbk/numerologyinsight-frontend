import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isMobileMenuOpen = false;
  languages = [
    { code: 'en', name: 'EN' },
    { code: 'fr', name: 'FR' },
    { code: 'es', name: 'ES' },
  ];
  selectedLanguage = 'en';

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  changeLanguage(language: string) {
    this.selectedLanguage = language;
  }
}
