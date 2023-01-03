import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService, UserService } from './services';
import { AuthGuard } from './guards';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    AuthenticationService,
    UserService,
    AuthGuard,
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ]
})
export class SharedModule { }
