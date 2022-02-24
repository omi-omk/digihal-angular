import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalPageComponentComponent } from './components/final-page-component/final-page-component.component';
import { FormComponentComponent } from './components/form-component/form-component.component';
import { HomePageComponentComponent } from './components/home-page-component/home-page-component.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SuggestionsComponentComponent } from './components/suggestions-component/suggestions-component.component';
import { ComparisonComponentComponent } from './components/comparison-component/comparison-component.component';
const routes: Routes = [
  {path: 'home',component:HomePageComponentComponent},
  {path: 'input',component:FormComponentComponent},
  {path: 'output',component:SuggestionsComponentComponent},
 {path: 'finalOutput',component:FinalPageComponentComponent},
 {path: 'compare',component:ComparisonComponentComponent},
  {path: '',redirectTo: '/home', pathMatch: 'full'},
  {path: '**',component:NotFoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
