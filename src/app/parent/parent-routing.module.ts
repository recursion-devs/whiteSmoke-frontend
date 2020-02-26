import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// core
import { HomeComponent } from '@core/home/home.component';
import { DashboardComponent } from '@core/dashboard/dashboard.component';

const routes: Routes = [
  { 
    path: "home", 
    component:HomeComponent 
  },
  { 
    path: "dashboard", 
    component:DashboardComponent 
  },
  { 
    path: "**", 
    redirectTo: "home" 
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule { }
