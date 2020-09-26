import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MasterComponent } from './master/master.component';
import { UsersComponent } from './users/users.component';
import { RouterComponent } from './router/router.component';
import { HomeComponent } from './home/home.component';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { MaterialModule } from './Shared/Models/material.module';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    UsersComponent,
    RouterComponent,
    HomeComponent,
    ActivityLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
