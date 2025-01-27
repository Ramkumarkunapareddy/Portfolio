import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {
  downloadResume() {
    const element = document.querySelector('.resume-section') as HTMLElement;

    // if (element) {
    //   html2canvas(element).then((canvas) => {
    //     const imgData = canvas.toDataURL('image/png');
    //     const pdf = new jsPDF('p', 'mm', 'a4');
    //     const pdfWidth = pdf.internal.pageSize.getWidth();
    //     const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    //     pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    //     pdf.save('resume.pdf');
    //   });
    // } else {
    //   console.error('Resume section not found');
    // }

    if (element) {
      const pdf = new jsPDF('p', 'mm', 'a4');

      pdf.html(element, {
        callback: function (doc) {
          doc.save('resume.pdf');
        },
        x: 10,
        y: 10,
        width: 190, // Adjust to fit A4 width
      });
    } else {
      console.error('Resume section not found');
    }
  }
}
