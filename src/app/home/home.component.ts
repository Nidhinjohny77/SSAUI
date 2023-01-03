import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../shared/models';
import { UserService } from '../shared/services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    user: User|undefined;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.user=this.userService.StoredUser;
    }
}