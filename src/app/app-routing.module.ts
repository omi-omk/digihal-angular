import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalPageComponentComponent } from './components/final-page-component/final-page-component.component';
import { FormComponentComponent } from './components/form-component/form-component.component';
import { HomePageComponentComponent } from './components/home-page-component/home-page-component.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SuggestionsComponentComponent } from './components/suggestions-component/suggestions-component.component';
import { ComparisonComponentComponent } from './components/comparison-component/comparison-component.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminAddComponent } from './components/admin-add/admin-add.component';
import { AdminDeleteComponent } from './components/admin-delete/admin-delete.component';

const routes: Routes = [
  {path: 'home',component:HomePageComponentComponent},
  {path: 'input',component:FormComponentComponent},
  {path: 'output',component:SuggestionsComponentComponent},
 {path: 'finalOutput',component:FinalPageComponentComponent},
 {path: 'compare',component:ComparisonComponentComponent},
 {path: 'admin-dashboard',component:AdminDashboardComponent}, 
 {path: 'admin-login',component:AdminLoginComponent}, 
 {path: 'admin-add',component:AdminAddComponent}, 
 {path: 'admin-delete',component:AdminDeleteComponent}, 
 {path: '',redirectTo: '/home', pathMatch: 'full'},
  {path: '**',component:NotFoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'top',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
