import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriteresComponent } from './Pages/criteres/criteres.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { EvenementComponent } from './Pages/evenement/evenement.component';
import { GenererCodeComponent } from './Pages/generer-code/generer-code.component';
import { JuryComponent } from './Pages/jury/jury.component';
import { LoginComponent } from './Pages/login/login.component';
import { MesCodeComponent } from './Pages/mes-code/mes-code.component';
import { PaysComponent } from './Pages/pays/pays.component';
import { PersonnelsComponent } from './Pages/personnels/personnels.component';
import { ProjetsComponent } from './Pages/projets/projets.component';
import { ResultatComponent } from './Pages/resultat/resultat.component';
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
      {path: 'pays', component: PaysComponent},
      {path: 'personnels', component: PersonnelsComponent},
      {path: 'resultat/:idEvents', component: ResultatComponent},
     
      {path: 'typeauth', component: TypeauthComponent},
      {path: 'evenement', component: EvenementComponent},
      {path: 'jury', component: JuryComponent},
      {path: 'projets/:idEvents', component: ProjetsComponent},
      {path: 'criteres/:id', component: CriteresComponent},
      {path: 'generercode', component: GenererCodeComponent},
      {path: 'mescode/:idEvents', component: MesCodeComponent},
      
    ]

    
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
