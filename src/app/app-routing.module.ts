import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { EvenementComponent } from './Pages/evenement/evenement.component';
import { JuryComponent } from './Pages/jury/jury.component';
import { LoginComponent } from './Pages/login/login.component';
import { PaysComponent } from './Pages/pays/pays.component';
import { PersonnelsComponent } from './Pages/personnels/personnels.component';
import { ProjetsComponent } from './Pages/projets/projets.component';
import { TypeauthComponent } from './Pages/typeauth/typeauth.component';

const routes: Routes = [

  {path: 'login', component: LoginComponent},

 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: "dashboard", component: DashboardComponent,

    children: [
      {path: 'personnels', component: PersonnelsComponent},
      {path: 'pays', component: PaysComponent},
      {path: 'typeauth', component: TypeauthComponent},
      {path: 'evenement', component: EvenementComponent},
      {path: 'jury', component: JuryComponent},
      {path: 'projet', component: ProjetsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
