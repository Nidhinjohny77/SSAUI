import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FurnishType, PropertyFilter, PropertyType } from 'src/app/shared/models';
import { MasterService, PropertyService } from 'src/app/shared/services';
import { MultiSelectData } from 'src/app/shared/utilities';

declare function initializeSearchPriceRangeSlider():any;
declare function getPriceRangeSlider():any;//not safe any more;

@Component({
  selector: 'app-property-search',
  templateUrl: './property-search.component.html',
  styleUrls: ['./property-search.component.css']
})
export class PropertySearchComponent implements OnInit {

  location:string="";
  priceRange:string="";
  bedRooms:Array<MultiSelectData>;
  bathRooms:Array<MultiSelectData>;
  startRent:number=-1;
  endRent:number=-1;
  selectedBedRoomCount:number=-1;
  selectedBathRoomCount:number=-1;
  selectedFurnishTypeUID:number=-1;
  selectedPropertyTypeUID:number=-1;
  furnishTypes:Array<MultiSelectData>;
  propertyTypes:Array<MultiSelectData>;

  propertyFilter:PropertyFilter;
  constructor( private router: Router,private masterService:MasterService) { 
    this.propertyFilter=new PropertyFilter();
    this.bedRooms=new Array<MultiSelectData>();
    this.bathRooms=new Array<MultiSelectData>();
    this.furnishTypes=new Array<MultiSelectData>();
    this.propertyTypes=new Array<MultiSelectData>();
  }

  ngOnInit(): void {
    this.initializePageData();
    initializeSearchPriceRangeSlider();
  }

  onSubmit(){
    let instance=getPriceRangeSlider();
    this.propertyFilter.location=this.location;
    this.propertyFilter.startRent=instance.old_from;
    //this.getPriceValue(this.priceRange,"START_RENT");
    this.propertyFilter.endRent=instance.old_to;
    //this.getPriceValue(this.priceRange,"END_RENT");
    this.propertyFilter.bedroomCount=this.selectedBedRoomCount
    this.propertyFilter.bathRoomCount=this.selectedBathRoomCount;
    this.propertyFilter.furnishTypeUID=this.selectedFurnishTypeUID;
    this.propertyFilter.propertyTypeUID=this.selectedPropertyTypeUID;
    this.router.navigateByUrl('/home/lists',{state:this.propertyFilter});
  }

  onBedRoomCountSelectionChanged(event:any){
    this.selectedBedRoomCount=event.target.value;
  }
  onBathRoomCountSelectionChanged(event:any){
    this.selectedBathRoomCount=event.target.value;
  }
  onFurnishTypeSelectionChanged(event:any){
    this.selectedFurnishTypeUID=event.target.value;
  }
  onPropertyTypeSelectionChanged(event:any){
    this.selectedPropertyTypeUID=event.target.value;
  }

  private getActiveRecord(data:Array<MultiSelectData>):MultiSelectData|undefined{
    let record=undefined;
    if(data){
      for(let element of data){
        if(element.isEnabled){
          record=new MultiSelectData(element);
          break;
        }
      }
    }
    return record;
  }

  private getRooms(limit:number):Array<MultiSelectData>{
    let rooms=this.masterService.getRooms(limit);
    var limitExcess=new MultiSelectData();
    limitExcess.uid=limit+1;
    limitExcess.displayName=limit.toString()+"+";
    limitExcess.isEnabled=false;
    rooms.push(limitExcess);
    return rooms;
  }

  private getPriceValue(data:string,type:string):number{
    return 0;
  }

  private initializePageData(){
    this.bathRooms=this.getRooms(5);
    this.bedRooms=this.getRooms(5);
    this.masterService.getFurnishTypes().subscribe(
      data=>{
        if(data){
          data.forEach(
            (element: any)=>{
              var record=new MultiSelectData(element);
              this.furnishTypes.push(record);
            }
          )
        }
      },
      error=>{

      }
    );

    this.masterService.getPropertyTypes().subscribe(
      data=>{
        if(data){
          data.forEach(
            (element: any)=>{
              var record=new MultiSelectData(element);
              this.propertyTypes.push(record);
            }
          )
        }
      },
      error=>{

      }
    );
  }

}


