import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactName: string = '';
  contactEmail: string = '';
  contactDescription: string = '';

  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {}

  sendMessage() {
    // Validate contactName
    if (
      this.contactName == '' ||
      this.contactName == null ||
      this.contactName == undefined ||
      this.contactName.trim() == ''
    ) {
      this.toastr.error('Please provide the name');
      return;
    }

    // Validate contactEmail
    if (
      this.contactEmail == '' ||
      this.contactEmail == null ||
      this.contactEmail == undefined ||
      this.contactEmail.trim() == ''
    ) {
      this.toastr.error('Please provide a valid email address');
      return;
    } else if (!this.validateEmail(this.contactEmail)) {
      this.toastr.error('Please enter a valid email format');
      return;
    }

    // Validate contactDescription
    if (
      this.contactDescription == '' ||
      this.contactDescription == null ||
      this.contactDescription == undefined ||
      this.contactDescription.trim() == ''
    ) {
      this.toastr.error('Please provide a message');
      return;
    }
  }

  // Email validation helper method
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
