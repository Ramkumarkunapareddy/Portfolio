import { Component } from '@angular/core';
import { faJs, faPython, faAngular, faGit, faGithub } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  faJs = faJs;
  faPython = faPython;
  faAngular = faAngular;
  faGit = faGit;
  faGithub = faGithub;
}
