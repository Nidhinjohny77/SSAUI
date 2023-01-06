import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PropertyListingComponent } from './property-listing/property-listing.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { LocationComponent } from './location/location.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PropertySearchComponent } from './property-search/property-search.component';
import { PropertyCardComponent } from './property-card/property-card.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    PropertyListingComponent,
    PropertyDetailComponent,
    LocationComponent,
    UserComponent,
    DashboardComponent,
    PropertySearchComponent,
    PropertyCardComponent,
    ProfileEditComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
