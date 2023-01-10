import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Tenant } from 'src/app/shared/models/tenant';
import { tenantPreference } from 'src/app/shared/models/tenant-preference';
import { StudentProfile } from 'src/app/shared/models/student-profile';
import { PropertyFilter } from 'src/app/shared/models';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {


  tenant:Tenant=new Tenant();
  tenantPreference :tenantPreference = new tenantPreference();
  studentprofile:StudentProfile = new StudentProfile();
  ProfileEditService: any;
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,

) { 
   
}
  ngOnInit(): void {

  }

  public onBasicFinalSubmit()
  {

    this.ProfileEditService.postTenant(this.tenant).subscribe();

    this.ProfileEditService.postTenantPreference(this.tenantPreference).subscribe();

    this.ProfileEditService.postSudentprofile(this.studentprofile).subscribe();

  }
  private getPropertyFilter(isNearToUniFilter:boolean,isRecommendationFilter:boolean,isHotDealFilter:boolean):PropertyFilter{
    let filter=new PropertyFilter();
    if(isNearToUniFilter){

    }
    else if(isRecommendationFilter){

    }
    else{
      filter.startRent=1000;
      filter.endRent=2000;
    }
    return filter;
  }
  
  public onBasicSubmit(){
    
  }
  public onBasicStudentProfileSubmit(){
    
  }
  
  }
  

