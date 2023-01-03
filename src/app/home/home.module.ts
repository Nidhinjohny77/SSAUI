import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PropertyListingComponent } from './property-listing/property-listing.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { LocationComponent } from './location/location.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    HomeComponent,
    PropertyListingComponent,
    PropertyDetailComponent,
    LocationComponent,
    UserComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
