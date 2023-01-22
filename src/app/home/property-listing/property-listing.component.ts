import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property, PropertyFilter, PropertyType } from 'src/app/shared/models';
import { MasterService, PropertyService } from 'src/app/shared/services';
import { MultiSelectData } from 'src/app/shared/utilities';

declare function initializePropertyListing():any;
declare function getFilterPriceRangeSlider():any;

@Component({
  selector: 'app-property-listing',
  templateUrl: './property-listing.component.html',
  styleUrls: ['./property-listing.component.css']
})
export class PropertyListingComponent implements OnInit {

  loading:boolean=false;
  propertyFilter:PropertyFilter;
  properties:Array<Property>;

  location:string="";
  startRent:number|undefined=-1;
  endRent:number|undefined=-1;
  selectedBedRoomCount:number|undefined=-1;
  selectedBathRoomCount:number|undefined=-1;
  selectedFurnishTypeUID:number|undefined=-1;
  selectedPropertyTypeUID:number|undefined=-1;

  selectedFilters:Array<MultiSelectData>=new Array<MultiSelectData>();

  bedRooms:Array<MultiSelectData>;
  bathRooms:Array<MultiSelectData>;
  furnishTypes:Array<MultiSelectData>;
  propertyTypes:Array<MultiSelectData>;

  constructor(private propertyService:PropertyService,private route: ActivatedRoute,private router:Router,
    private locationService:Location,private masterService:MasterService) { 
    this.properties=new Array<Property>();
    this.propertyFilter=new PropertyFilter();
    this.bedRooms=new Array<MultiSelectData>();
    this.bathRooms=new Array<MultiSelectData>();
    this.furnishTypes=new Array<MultiSelectData>();
    this.propertyTypes=new Array<MultiSelectData>();
  }

  ngOnInit(): void {
    this.loading=true;
    this.initializePageData();
    initializePropertyListing();
    var state=this.locationService.getState();
    this.propertyFilter=new PropertyFilter(state);
    this.endRent=this.propertyFilter.endRent!=null?this.propertyFilter.endRent:undefined;
    this.startRent=this.propertyFilter.startRent!=null?this.propertyFilter.startRent:undefined;

    this.propertyService.getProperties(this.propertyFilter).subscribe(data=>{
      this.properties=data as Array<Property>;
      this.loading=false;
    },
    error=>{
      this.loading=false;
    },
    ()=>{
      this.loading=false;
    });
  }

  onSearch(){
    this.loading=true;
    let instance=getFilterPriceRangeSlider();
    let filter=new PropertyFilter();
    filter.location="";
    filter.startRent=instance.old_from;
    filter.endRent=instance.old_to;
    if(this.selectedBathRoomCount){
      filter.bathRoomCount=this.selectedBathRoomCount;
    }
    if(this.selectedBedRoomCount){
      filter.bedroomCount=this.selectedBedRoomCount;
    }
    if(this.selectedFurnishTypeUID){
      filter.furnishTypeUID=this.selectedFurnishTypeUID;
    }
    if(this.selectedPropertyTypeUID){
      filter.propertyTypeUID=this.selectedPropertyTypeUID;
    }
    this.propertyService.getProperties(filter).subscribe(data=>{
      this.properties=data as Array<Property>;
      this.loading=false;
    },
    error=>{
      this.loading=false;
    },
    ()=>{
      this.loading=false;
    });
  }
  
  private initializePageData(){
    this.bathRooms=this.masterService.getRooms(5,"BATH");
    this.bedRooms=this.masterService.getRooms(5,"BED");
    this.masterService.getFurnishTypes().subscribe(
      data=>{
        if(data){
          data.forEach(
            (element: any)=>{
              var record=new MultiSelectData(element);
              record.controlContextName="FUR";
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
              record.controlContextName="PROP";
              this.propertyTypes.push(record);
            }
          )
        }
      },
      error=>{

      }
    );
  }

  onFurnishTypeSelectionChanged(event:any){
    this.selectedFurnishTypeUID=event.target.value;
    let selectedData=this.getSelectedData(event.target.value,this.furnishTypes);
    this.updateSelectedFilters(selectedData);
  }

  onPropertyTypeSelectionChanged(event:any){
    this.selectedPropertyTypeUID=event.target.value;
    let selectedData=this.getSelectedData(event.target.value,this.propertyTypes);
    this.updateSelectedFilters(selectedData);
  }

  onBedRoomCountSelectionChanged(event:any){
    this.selectedBedRoomCount=event.target.value;
    let selectedData=this.getSelectedData(event.target.value,this.bedRooms);
    if(selectedData){
      selectedData.displayName=selectedData.displayName+" BHK";
    }
    this.updateSelectedFilters(selectedData);
  }

  onBathRoomCountSelectionChanged(event:any){
    this.selectedBathRoomCount=event.target.value;
    let selectedData=this.getSelectedData(event.target.value,this.bathRooms);
    if(selectedData){
      selectedData.displayName=selectedData.displayName+" Bathroom";
    }
    this.updateSelectedFilters(selectedData);
  }

  clearAllFilters(){
    this.selectedFilters.length=0;
  }

  clearFilter(uid:number,type:string){
    let selectedData=this.selectedFilters.find(x=>x.uid==uid && x.controlContextName==type);
    this.removeFilterItem(selectedData);
  }

  clearPropertyTypes(){
    var item=this.propertyTypes.find(x=>x.isEnabled);
    this.removeFilterItem(item);
   this.propertyTypes.forEach(element=>{
    element.isEnabled=false;
   });
  }

  clearFurnishTypes(){
    var item=this.furnishTypes.find(x=>x.isEnabled);
    this.removeFilterItem(item);
    this.furnishTypes.forEach(element=>{
      element.isEnabled=false;
     });
  }

  clearBedRooms(){
    debugger;
    var item=this.bedRooms.find(x=>x.isEnabled);
    this.removeFilterItem(item);
    this.bedRooms.forEach(element=>{
      element.isEnabled=false;
     });
  }

  clearBathRooms(){
    var item=this.bathRooms.find(x=>x.isEnabled);
    this.removeFilterItem(item);
    this.bathRooms.forEach(element=>{
      element.isEnabled=false;
     });
  }

  private getSelectedData(selectedDataUID:number,data:Array<MultiSelectData>):MultiSelectData|undefined{
    let selectedData= data.find(x=>x.uid==selectedDataUID);
    if(selectedData){
      selectedData=new MultiSelectData(selectedData)
    }
    return selectedData;
  }

  private updateSelectedFilters(selectedData:MultiSelectData|undefined){   
    if(selectedData){
      let index=this.selectedFilters.findIndex(x=>x.controlContextName==selectedData.controlContextName);
      if(index!=-1){
        this.removeItem(index,this.selectedFilters);
      }
      this.selectedFilters.push(selectedData);
    }
  }

  private removeItem(index:number,data:Array<MultiSelectData>):boolean{
    if(index!=-1){
      return data.splice(index,1).length>0;
    }
    else{
      return false;
    }
  }

  private removeFilterItem(selectedData:MultiSelectData|undefined){
    if(selectedData){
      let index=this.selectedFilters.findIndex(x=>x.controlContextName==selectedData.controlContextName && x.uid==selectedData.uid);
      this.removeItem(index,this.selectedFilters);
    }
  }

}
