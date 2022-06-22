import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

 
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public version = environment.version;
  public repoUrl = 'https://github.com/mathisGarberg/angular-folder-structure';

 

  navItems = [
    { link: '/home', title: 'Home' },
    { link: '/about', title: 'About' },
    { link: '/contact', title: 'Contact' }
  ];

  constructor() {}

  ngOnInit() {
    
  }
 
}
