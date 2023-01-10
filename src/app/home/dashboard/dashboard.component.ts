import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Property, PropertyFilter } from 'src/app/shared/models';
import { PropertyService, UserService } from 'src/app/shared/services';

declare function initializeDashboard():any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,AfterViewChecked {

  isScriptInitialized:boolean=false;

  nearToUniProperties:Array<Property>;
  nearToUniPropertyFilter:PropertyFilter;
  isNearToUniPropertiesCalled:boolean=false;

  recommendedProperties:Array<Property>;
  recommendedPropertyFilter:PropertyFilter;
  isRecommendedPropertiesCalled:boolean=false;

  hotDealProperties:Array<Property>;
  hotDealPropertyFilter:PropertyFilter;
  isHotDealPropertiesCalled:boolean=false;

  constructor(private propertyService:PropertyService,private userService:UserService) { 
    this.nearToUniProperties=new Array<Property>();
    this.nearToUniPropertyFilter=new PropertyFilter();

    this.recommendedProperties=new Array<Property>();
    this.recommendedPropertyFilter=new PropertyFilter();

    this.hotDealProperties=new Array<Property>();
    this.hotDealPropertyFilter=new PropertyFilter();
  }
  ngAfterViewChecked(): void {
    if(!this.isScriptInitialized && this.isHotDealPropertiesCalled && this.isNearToUniPropertiesCalled 
      && this.isRecommendedPropertiesCalled){
        initializeDashboard()
        this.isScriptInitialized=true;
      }

  }

  ngOnInit(): void {
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
        this.isNearToUniPropertiesCalled=true;       
      },
      error=>{
        this.isNearToUniPropertiesCalled=true;
      },
      ()=>{

      }
    );

    this.propertyService.getProperties(this.recommendedPropertyFilter).subscribe(
      data=>{
        this.recommendedProperties=data;
        this.isRecommendedPropertiesCalled=true;
      },
      error=>{
        this.isRecommendedPropertiesCalled=true;
      },
      ()=>{

      }
    );

    this.propertyService.getProperties(this.hotDealPropertyFilter).subscribe(
      data=>{
        this.hotDealProperties=data;
        this.isHotDealPropertiesCalled=true;
      },
      error=>{
        this.isHotDealPropertiesCalled=true;
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
