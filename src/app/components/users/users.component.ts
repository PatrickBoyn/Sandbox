import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];


  constructor() { }

  ngOnInit() {
    this.users = [
      {
      firstName: 'Ellie',
      lastName: 'Barr',
      age: 43,
      address: {
          street: '12 East Side St',
          city: 'Los Angeles',
          state: 'CA'
      }
    },
    {
      firstName: 'Jessica',
      lastName: 'Smith',
      age: 25,
      address: {
          street: '22 Flower Lane',
          city: 'Charleston',
          state: 'SC'
      }
    },
    {
      firstName: 'Eric',
      lastName: 'Doe',
      age: 18,
      address: {
          street: '5 First St',
          city: 'Pheonix',
          state: 'AZ'
      }
    }
    ];

    this.addUser({
      firstName: 'Anne',
      lastName: 'Forrest',
      age: 21,
      address: {
          street: '5 Second St',
          city: 'Seattle',
          state: 'Washington'
      }
    });
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
