import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from 'src/app/shared/models';

declare function initializePropertyDetails():any;

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  property:Property|undefined;
  constructor(private route:ActivatedRoute) { 
  }
  
  ngOnInit(): void {
    if(this.route.snapshot.data){
      this.property= this.route.snapshot.data as Property;
    }
    initializePropertyDetails();
  }

}
