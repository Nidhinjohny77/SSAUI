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
import { SharedModule } from '../shared/shared.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotificationComponent } from './notification/notification.component';



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
    ProfileEditComponent,
    AboutUsComponent,
    ContactUsComponent,
    NotificationComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
