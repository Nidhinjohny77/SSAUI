import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/shared/models';
import { LocationService } from 'src/app/shared/services/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  cities:Array<City>;
  constructor(private locationService:LocationService) { 
    this.cities=new Array<City>();
  }

  ngOnInit(): void {
    this.cities=this.locationService.getCities();
  }

}
