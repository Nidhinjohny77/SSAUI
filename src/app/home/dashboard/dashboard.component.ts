import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Property, PropertyFilter } from 'src/app/shared/models';
import { PropertyService, UserService } from 'src/app/shared/services';

declare function initializeDashboard():any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isScriptInitialized:boolean=false;

  nearToUniProperties:Property[];
  nearToUniPropertyFilter:PropertyFilter;
  isNearToUniPropertiesNotAvailable:boolean=true;

  recommendedProperties:Property[];
  recommendedPropertyFilter:PropertyFilter;
  isRecommendedPropertiesNotAvailable:boolean=true;

  hotDealProperties:Property[];
  hotDealPropertyFilter:PropertyFilter;
  isHotDealPropertiesNotAvailable:boolean=true;

  constructor(private propertyService:PropertyService,private userService:UserService) { 
    this.nearToUniProperties=[];
    this.nearToUniPropertyFilter=new PropertyFilter();
    this.recommendedProperties=[];
    this.recommendedPropertyFilter=new PropertyFilter();

    this.hotDealProperties=[];
    this.hotDealPropertyFilter=new PropertyFilter();
  }

  ngOnInit(): void {
    initializeDashboard();
    this.getAllPropertyTypes();
  }

  private getAllPropertyTypes():void{

    this.nearToUniPropertyFilter=this.getPropertyFilter(true,false,false);
    this.recommendedPropertyFilter=this.getPropertyFilter(false,true,false);
    this.hotDealPropertyFilter=this.getPropertyFilter(false,false,true);
    let user=this.userService.StoredUser;

    this.propertyService.getProperties(this.nearToUniPropertyFilter).subscribe(
      data=>{
        this.nearToUniProperties=data;
        this.isNearToUniPropertiesNotAvailable=this.nearToUniProperties.length<=0;
      },
      error=>{
      },
      ()=>{
      }
    );

    this.propertyService.getProperties(this.recommendedPropertyFilter).subscribe(
      data=>{
        this.recommendedProperties=data;
        this.isRecommendedPropertiesNotAvailable=this.recommendedProperties.length<=0;
      },
      error=>{
      },
      ()=>{
      }
    );

    this.propertyService.getProperties(this.hotDealPropertyFilter).subscribe(
      data=>{
        this.hotDealProperties=data;
        this.isHotDealPropertiesNotAvailable=this.hotDealProperties.length<=0;
      },
      error=>{
      },
      ()=>{
      }
    );
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
