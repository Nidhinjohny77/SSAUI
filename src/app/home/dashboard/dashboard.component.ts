import { Component, OnInit } from '@angular/core';
import { Property, PropertyFilter } from 'src/app/shared/models';
import { PropertyService, UserService } from 'src/app/shared/services';

declare function initializeSlick(factory:any):any;
declare function slickFactory():any;
declare function initializeDashboard():any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  nearToUniProperties:Property[];
  nearToUniPropertyFilter:PropertyFilter;
  isNearToUniPropertiesAvailable:boolean=false;

  recommendedProperties:Property[];
  recommendedPropertyFilter:PropertyFilter;
  isRecommendedPropertiesAvailable:boolean=false;

  hotDealProperties:Property[];
  hotDealPropertyFilter:PropertyFilter;
  isHotDealPropertiesAvailable:boolean=false;

  constructor(private propertyService:PropertyService,private userService:UserService) { 
    this.nearToUniProperties=[];
    this.nearToUniPropertyFilter=new PropertyFilter();

    this.recommendedProperties=[];
    this.recommendedPropertyFilter=new PropertyFilter();

    this.hotDealProperties=[];
    this.hotDealPropertyFilter=new PropertyFilter();
  }

  ngOnInit(): void {
    this.nearToUniPropertyFilter=this.getPropertyFilter(true,false,false);
    this.recommendedPropertyFilter=this.getPropertyFilter(false,true,false);
    this.hotDealPropertyFilter=this.getPropertyFilter(false,false,true);
    let user=this.userService.StoredUser;
    // this.propertyService.getProperties(this.nearToUniPropertyFilter).subscribe(
    //   data=>{
    //     this.nearToUniProperties=data;
            // this.isNearToUniPropertiesAvailable=true;
    //   },
    //   error=>{
    // this.isNearToUniPropertiesAvailable=false;
    //   }
    // );

    // this.propertyService.getProperties(this.recommendedPropertyFilter).subscribe(
    //   data=>{
    //     this.recommendedProperties=data;
    //     this.isRecommendedPropertiesAvailable=true;
    //   },
    //   error=>{
    //      this.isRecommendedPropertiesAvailable=false;
    //   }
    // );

    this.propertyService.getProperties(this.hotDealPropertyFilter).subscribe(
      data=>{
        debugger;
        this.hotDealProperties=data;
        this.isHotDealPropertiesAvailable=true;
      },
      error=>{
        this.isHotDealPropertiesAvailable=false;
      }
    );
  }
 
  ngAfterViewInit():void{
    initializeSlick(slickFactory);
    initializeDashboard();
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

}
