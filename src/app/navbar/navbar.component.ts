import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  faPaperPlane = faPaperPlane; // Assign the imported icon to a variable

  constructor (public router: Router) {}

  ngOnInit(){

  }

  onHireMe(){
    this.router.navigate(['/contact']);
  }
}
