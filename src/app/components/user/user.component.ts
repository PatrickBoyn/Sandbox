import { User } from '../../models/User';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit{
    user: User;

    constructor() {
    }
    ngOnInit() {
        this.user = {
            firstName: 'Patrick',
            lastName: 'Doe',
            age: 38,
            address: {
                street: '50 Main St',
                city: 'Boston',
                state: 'MA'
            }
        };
    }
}
