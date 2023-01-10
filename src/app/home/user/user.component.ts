import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models';
import { AuthenticationService, UserService } from 'src/app/shared/services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private user:User|undefined;

  public get UserName(){
    if(this.user){
      return this.user.firstName+" "+this.user.lastName;
    }
    else{
      return "Not Available";
    }
  }

  constructor(private userService:UserService,private authenticationService:AuthenticationService,private router: Router,) { }

  ngOnInit(): void {
    this.user=this.userService.StoredUser;
  }

  onLogOut(){
    this.authenticationService.logout().subscribe(
        success=>{
          this.userService.removeUser();
          this.router.navigateByUrl('login');
        },
        error=>{
          this.userService.removeUser();
          this.router.navigateByUrl('login');
        }        
      );

  }
}
