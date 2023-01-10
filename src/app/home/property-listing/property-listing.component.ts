import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property, PropertyFilter } from 'src/app/shared/models';
import { PropertyService } from 'src/app/shared/services';

declare function initializePropertyListing():any;

@Component({
  selector: 'app-property-listing',
  templateUrl: './property-listing.component.html',
  styleUrls: ['./property-listing.component.css']
})
export class PropertyListingComponent implements OnInit {

  loading:boolean=false;
  propertyFilter:PropertyFilter;
  properties:Array<Property>;

  constructor(private propertyService:PropertyService,private route: ActivatedRoute,) { 
    this.properties=new Array<Property>();
    this.propertyFilter=this.route.snapshot.data as PropertyFilter;
  }

  ngOnInit(): void {
    this.loading=true;
    initializePropertyListing();
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

}
