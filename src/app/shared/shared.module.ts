import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService, UserService } from './services';
import { AuthGuard } from './guards';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors';
import { LoadingComponent } from './loading/loading.component';
import { PropertyService } from './services/property.service';
import { LocationService } from './services/location.service';



@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    AuthenticationService,
    UserService,
    PropertyService,
    LocationService,
    AuthGuard,
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  exports:[
    LoadingComponent
  ]
})
export class SharedModule { }
