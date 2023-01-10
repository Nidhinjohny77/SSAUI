import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-search',
  templateUrl: './property-search.component.html',
  styleUrls: ['./property-search.component.css']
})
export class PropertySearchComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.router.navigate(['/home/lists']);
  }

}
