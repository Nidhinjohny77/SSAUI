import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { PropertyCardComponent } from './property-card/property-card.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { PropertyListingComponent } from './property-listing/property-listing.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:'',
        component:DashboardComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'lists',
        component:PropertyListingComponent
      },
      {
        path:'detail',
        component:PropertyDetailComponent
      },
      {
        path:'about-us',
        component:AboutUsComponent
      },
      {
        path:'contact-us',
        component:ContactUsComponent
      },
      {
        path:'notifications',
        component:NotificationComponent
      },
      {
        path:'profile',
        children:[
          {
            path:'edit',
            component:ProfileEditComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
