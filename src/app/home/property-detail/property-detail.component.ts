import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from 'src/app/shared/models';
import { MasterService, PropertyService } from 'src/app/shared/services';
import { MultiSelectData } from 'src/app/shared/utilities';

declare function initializePropertyDetails():any;

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  bedroomCount:string="";
  bathroomCount:string="";
  property:Property;
  furnishTypeDisplayName:string|undefined;
  propertyTypeDisplayName:string|undefined;
  furnishTypes:Array<MultiSelectData>;
  propertyTypes:Array<MultiSelectData>;
  times:Array<string>;

  constructor(private propertyService:PropertyService,private locationService:Location,
    private masterService:MasterService) { 
    this.property=new Property();
    this.furnishTypes=new Array<MultiSelectData>();
    this.propertyTypes=new Array<MultiSelectData>();
    this.times=this.getTimeData(10,18);
  }
  
  ngOnInit(): void {
    let state= this.locationService.getState();
    if(state){
      this.property= new Property(state);
    }
    initializePropertyDetails();
    this.masterService.getFurnishTypes().subscribe(data=>{
      this.furnishTypes=data;
    });
    this.masterService.getPropertyTypes().subscribe(data=>{
      this.propertyTypes=data;
    });
  }

  private getTimeData(start:number,end:number):Array<string>{
    let result=new Array<string>();
    for(var i=start;i<=end;i++){
      var timeDetails=i.toString()+":"+"00";
      result.push(timeDetails);
    }
    return result;
  }

}
