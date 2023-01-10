import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models';
import { UserService } from 'src/app/shared/services';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  userName:string="";
  user:User|undefined;
  constructor(private userService:UserService) { 
  }

  ngOnInit(): void {
    this.user=this.userService.StoredUser;
    if(this.user){
      this.userName=this.user?.firstName+" "+this.user?.lastName;
    }
  }

}
