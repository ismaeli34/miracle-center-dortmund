import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Router, RouterModule} from '@angular/router';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
}

@Component({
  selector: 'app-events',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {

  events: Event[] = [
    {
      id: 1,
      title: '2019 Kids Church Camp',
      description: 'Et consequatur nihil odio odit voluptatem qui. Dolores doloribus cupiditate totam esse dolores quod...',
      date: 'Saturday, September 28, 2019',
      time: '8:00AM - 5:30PM',
      location: '1600 Amphitheatre Parkway, Mt. View'
    },
    // Add more events from the HTML content
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
