import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { WindowRef } from './shared/wrappers/windowref';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HomeModule,
    SharedModule
  ],
  providers: [
    {provide:"API_BASE_URL",useValue:environment.baseApiUrl},
    {provide:"NativeWindow",useClass:WindowRef}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
