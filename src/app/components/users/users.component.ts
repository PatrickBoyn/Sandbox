import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended = true;
  loaded = false;
  enableAdd = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.users = [
        {
        firstName: 'George',
        lastName: 'Barr',
        age: 43,
        address: {
            street: '12 East Side St',
            city: 'Los Angeles',
            state: 'CA'
        },
        image: 'http://lorempixel.com/600/600/people/3'
      },
      {
        firstName: 'Jessica',
        lastName: 'Smith',
        age: 25,
        address: {
            street: '22 Flower Lane',
            city: 'Charleston',
            state: 'SC'
        },
        image: 'http://lorempixel.com/600/600/people/5'
      },
      {
        firstName: 'Eric',
        lastName: 'Doe',
        age: 18,
        address: {
            street: '5 First St',
            city: 'Pheonix',
            state: 'AZ'
        },
        image: 'http://lorempixel.com/600/600/people/1'
      }
      ];
          this.addUser({
      firstName: 'Anne',
      lastName: 'Forrest',
    });
    this.loaded = true;
    }, 2000);
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
