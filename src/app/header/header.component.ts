import { Component } from '@angular/core';
import { Location } from '@angular/common';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  showAboutMenu = false;
  showConnectMenu = false;


  isMenuOpen = false;

  constructor(private location: Location,
              private router: Router) { }

  isActive(route: string): boolean {
    return this.router.isActive(route, false);

  }


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
