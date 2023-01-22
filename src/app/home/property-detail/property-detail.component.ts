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
  bookingMessage:string|undefined;
  isBookingDisabled:boolean=false;
  isFromTimeSelectionDisabled=false;
  isToTimeSelectionDisabled=false;
  isFromDateSelectionDisabled=false;
  isToDateSelectionDisabled=false;
  fromDate:string|undefined;
  fromTime:string|undefined="Choose Time";
  toDate:string|undefined;
  toTime:string|undefined="Choose Time";
  isBookingSuccess:boolean=false;

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
    this.masterService.getFurnishTypes().subscribe(data=>{
      this.furnishTypes=data;
    });
    this.masterService.getPropertyTypes().subscribe(data=>{
      this.propertyTypes=data;
    });
    initializePropertyDetails();
  }

  onBook(){
    if(!this.fromDate || (this.fromTime=="Choose Time") || !this.toDate ||(this.toTime=="Choose Time")){
      this.isBookingSuccess=false;
      this.bookingMessage="Selected input date is not correct."
    }
    else{
      this.isBookingSuccess=true;
      this.bookingMessage="The viewing has been booked."
      this.isBookingDisabled=true;
      this.isFromTimeSelectionDisabled=true;
      this.isToTimeSelectionDisabled=true;
      this.isFromDateSelectionDisabled=true;
      this.isToDateSelectionDisabled=true;
    }
  }

  onModalClose(){
    this.fromDate=undefined;
    this.fromTime="Choose Time";
    this.toDate=undefined;
    this.toTime="Choose Time";
    this.isBookingSuccess=false;
    this.bookingMessage=undefined;
    this.isBookingDisabled=false; 
    this.isFromTimeSelectionDisabled=false;
    this.isToTimeSelectionDisabled=false;
    this.isFromDateSelectionDisabled=false;
    this.isToDateSelectionDisabled=false;
  }

  private getTimeData(start:number,end:number):Array<string>{
    let result=new Array<string>();
    result.push("Choose Time");
    for(var i=start;i<=end;i++){
      var timeDetails=i.toString()+":"+"00";
      result.push(timeDetails);
    }
    return result;
  }

}
