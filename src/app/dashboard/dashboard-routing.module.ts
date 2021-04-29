import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';

const dashboardrouting:Routes=[
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[AuthGuard],
    children:[{

        path:'profile',
        component:ProfileComponent

    }]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(dashboardrouting)],
  exports: [RouterModule]
})

export class DashboardRoutingModule{}

