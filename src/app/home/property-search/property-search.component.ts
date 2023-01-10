import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyFilter } from 'src/app/shared/models';
import { PropertyService } from 'src/app/shared/services';

@Component({
  selector: 'app-property-search',
  templateUrl: './property-search.component.html',
  styleUrls: ['./property-search.component.css']
})
export class PropertySearchComponent implements OnInit {

  propertyFilter:PropertyFilter;
  constructor( private router: Router,private propertyService:PropertyService) { 
    this.propertyFilter=new PropertyFilter();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.router.navigateByUrl('/home/lists',{state:this.propertyFilter});
  }

}
