import { Component, OnInit } from '@angular/core';

declare function initializePropertyListing():any;

@Component({
  selector: 'app-property-listing',
  templateUrl: './property-listing.component.html',
  styleUrls: ['./property-listing.component.css']
})
export class PropertyListingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    initializePropertyListing();
  }

}
