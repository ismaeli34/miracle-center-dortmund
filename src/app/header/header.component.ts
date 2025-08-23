import { Component } from '@angular/core';
import { Location } from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private location: Location) { }

  isActive(path: string): boolean {
    return this.location.path() === path;
  }

}
