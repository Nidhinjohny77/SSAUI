import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, UserService } from 'src/app/shared/services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService:UserService,private authenticationService:AuthenticationService,private router: Router,) { }

  ngOnInit(): void {
  }

  onLogOut(){
    this.authenticationService.logout();
    this.userService.removeUser();
    this.router.navigateByUrl('login');
  }
}
