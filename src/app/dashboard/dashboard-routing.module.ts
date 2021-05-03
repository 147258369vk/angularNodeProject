import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';
import { DashboardComponent } from './dashboard.component';
import { ProdiuctComponent } from './prodiuct/prodiuct.component';
import { ProfileComponent } from './profile/profile.component';
import { UploadimageComponent } from './uploadimage/uploadimage.component';

const dashboardrouting:Routes=[
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'product',
        component:ProdiuctComponent
      },
      {
        path:'upload',
        component:UploadimageComponent
      }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(dashboardrouting)],
  exports: [RouterModule]
})

export class DashboardRoutingModule{}

