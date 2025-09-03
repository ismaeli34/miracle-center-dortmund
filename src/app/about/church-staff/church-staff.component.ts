import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-church-staff',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './church-staff.component.html',
  styleUrl: './church-staff.component.scss'
})
export class ChurchStaffComponent {
 // defaultPhoto = 'assets/images/avatars/user-01.jpg'; // Add a placeholder image here
  staffMembers = [
    {
      name: 'Prince Edos',
      title: 'Pastor, Elder, Administrative Team',
      email: 'pastor@mcci.de',
      photo: 'pastor-01.jpg'
    },
    {
      name: 'Prince Edos',
      title: 'Pastor, Elder, Administrative Team',
      email: 'pastor@mcci.de',
      photo: 'pastor-03.jpg'
    },
    {
      name: 'Prince Edos',
      title: 'Pastor, Elder, Administrative Team',
      email: 'pastor@mcci.de',
      photo: 'pastor-01.jpg'

    },
    {
      name: 'Prince Edos',
      title: 'Pastor, Elder, Administrative Team',
      email: 'pastor@mcci.de',
      photo: 'pastor-03.jpg'

    },
  ];


}
