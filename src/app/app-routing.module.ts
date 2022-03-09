import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllProjectsComponent } from './all-projects/all-projects.component';
import { CubixCabComponent } from './cubix-cab/cubix-cab.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { QmenuConceptComponent } from './qmenu-concept/qmenu-concept.component';
const routes: Routes = [
  {
    path: '', component: HomeComponent 
   },
    {
      path: 'allproject', component: AllProjectsComponent 
     },
     {
      path: 'app-navbar', component: NavbarComponent 
     },
     {
      path: 'qmenu', component: QmenuConceptComponent 
     },
     {
      path: 'carRental', component:  CubixCabComponent
     },
     {
      path: 'not-found', pathMatch: 'full', 
      component:NotFoundComponent
     },
   
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = {}