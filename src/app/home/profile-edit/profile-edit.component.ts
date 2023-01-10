import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Tenant } from 'src/app/shared/models/tenant';
import { tenantPreference } from 'src/app/shared/models/tenant-preference';
import { StudentProfile } from 'src/app/shared/models/student-profile';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  tenant:Tenant=new Tenant();
  tenantPreference :tenantPreference = new tenantPreference();
  studentprofile:StudentProfile = new StudentProfile();
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,

) { 
   
}

  ngOnInit(): void {

    
  }

  public onBasicSubmit(){
    
  }
  public onBasicStudentProfileSubmit(){
    
  }
  
  public onBasicFinalSubmit()
  {
    


  }
  
}
