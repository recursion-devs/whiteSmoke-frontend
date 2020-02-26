import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentLayoutComponent } from '@parent/parent-layout/parent-layout.component';
import { HomeComponent } from './core/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: ParentLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('@parent/parent.module').then(m => m.ParentModule)
      }],
  },
  { 
    path: "**", 
    redirectTo: "home" 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
