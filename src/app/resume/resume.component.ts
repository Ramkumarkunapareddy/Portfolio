import { Component } from '@angular/core';
// import jsPDF from 'jspdf';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {

  // isRefersh: boolean = false;
  // ngOnInit(): void{
  //   if (!this.isRefersh){
  //     window.location.reload();
  //   }
   
  // }

  downloadResume() {
    // Path to the pre-generated PDF in the assets folder
    const pdfUrl = './assets/CV_RamKumar.pdf';

    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Resume_RamKumar.pdf'; // The name of the file for the user
    link.click();
  }
}
