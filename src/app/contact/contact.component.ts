import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SendEmailService } from '../send-email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactName: string = '';
  contactEmail: string = '';
  contactDescription: string = '';
  contactTopic: string = '';
  toastrTimeOut: number = 15000;

  constructor(private toastr: ToastrService, private emaiService: SendEmailService) {}

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

    //valid title
    if (
      this.contactTopic == '' ||
      this.contactTopic == null ||
      this.contactTopic == undefined ||
      this.contactTopic.trim() == ''
    ) {
      this.toastr.error('Please provide the subject');
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

    this.emaiService.SendUserEntrData(
      this.contactName,
      this.contactTopic,
      this.contactDescription,
      this.contactEmail
    ).subscribe({
      next: () => {
        this.toastr.success(
          `Your message has been successfully sent to Jalpesh.`,
          'Message Sent Successfully',
          { timeOut: this.toastrTimeOut }
        );
    
        this.toastr.info(
          `Jalpesh will get back to you at the earliest convenience to discuss the topic "${this.contactTopic}". Thank you!`,
          'Message Acknowledged',
          { timeOut: this.toastrTimeOut }
        );
      },
      error: (error) => {
        console.error('Error sending the message:', error);
    
        this.toastr.error(
          `We apologize for the inconvenience. There is an issue with the message service.`,
          'Message Sending Failed',
          { timeOut: this.toastrTimeOut }
        );
    
        this.toastr.info(
          `You can reach out to Jalpesh directly via social media or visit the resume page for contact details.`,
          'Alternative Contact',
          { timeOut: this.toastrTimeOut }
        );
      },
    });
    
  }

  // Email validation helper method
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
