import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { PersonnelsComponent } from './Pages/personnels/personnels.component';

const routes: Routes = [


  {
    path:'dashboard',
    component: DashboardComponent,
  },
  {
    path:'personnel',
    component: PersonnelsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
