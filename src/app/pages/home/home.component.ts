import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NumerologyService } from '../../services/numerology.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  formData = {
    name: '',
    birthDate: '',
  };
  isLoading = false;
  error = '';

  constructor(
    private numerologyService: NumerologyService,
    private router: Router
  ) {}

  onSubmit() {
    if (!this.formData.name || !this.formData.birthDate) {
      this.error = 'Please fill in all fields';
      return;
    }

    this.error = '';
    this.isLoading = true;

    // Save the form data to the service
    this.numerologyService.saveFormData(this.formData.name, this.formData.birthDate);

    // Simulate a short delay before navigating to the report page
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/report']);
    }, 1000);
  }
}
