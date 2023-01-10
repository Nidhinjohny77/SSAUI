import { Component, OnInit } from '@angular/core';

declare function initializePropertyDetails():any;

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
    initializePropertyDetails();
  }

}
