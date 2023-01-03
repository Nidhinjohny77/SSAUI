import { Component, Input, OnInit } from '@angular/core';
import { Property } from 'src/app/shared/models';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  @Input() thumbNailPath:string|undefined=undefined;
  @Input() isNew:boolean=false;
  @Input() isStudentFriendly=false;
  @Input() bedRoomCount:number|undefined=undefined;
  @Input() bathRoomCount:number|undefined=undefined;
  @Input() price:string|undefined=undefined;
  @Input() title:string|undefined=undefined;
  @Input() location:string|undefined=undefined;
  @Input() landMark:string|undefined=undefined;
  @Input() isPetFriendly:boolean=false;
  @Input() isParkingFriendly:boolean=false;
  @Input() listingDate:string|undefined=undefined;
  @Input() availabeDate:string|undefined=undefined;
  @Input() property:Property|undefined=undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
