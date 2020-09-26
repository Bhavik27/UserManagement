import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { HomeComponent } from './home/home.component';
import { RouterComponent } from './router/router.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'router',
    component:RouterComponent
  },
  {
    path:'activity-log',
    component:ActivityLogComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
