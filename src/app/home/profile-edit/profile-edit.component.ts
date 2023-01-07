import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import { Tenant } from 'src/app/shared/models/tenant';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  tenant:Tenant=new Tenant();
  constructor() { }

  ngOnInit(): void {

    this.tenant.address="Middlesborough";
  }

  public onBasicSubmit(){
    let addr=this.tenant.address;
  }

}
