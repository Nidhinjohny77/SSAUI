import { Component, OnInit } from '@angular/core';

declare function initializeSlick(factory:any):any;
declare function slickFactory():any;
declare function initializeDashboard():any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  ngAfterViewInit():void{
    initializeSlick(slickFactory);
    initializeDashboard();
  }

}
