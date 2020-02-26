import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ParentRoutingModule } from './parent-routing.module';

// parents
import { ParentLayoutComponent } from './parent-layout/parent-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';

// core
import { HomeComponent } from '@core/home/home.component'
import { DashboardComponent } from '@core/dashboard/dashboard.component'

@NgModule({
  declarations: [
    // parent
    ParentLayoutComponent, 
    SidebarComponent,

    // core
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ParentRoutingModule,
    FontAwesomeModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class ParentModule { }
