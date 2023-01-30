import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { EvenementComponent } from './Pages/evenement/evenement.component';
import { JuryComponent } from './Pages/jury/jury.component';
import { PaysComponent } from './Pages/pays/pays.component';
import { PersonnelsComponent } from './Pages/personnels/personnels.component';
import { ProjetsComponent } from './Pages/projets/projets.component';
import { TypeauthComponent } from './Pages/typeauth/typeauth.component';
import { PopupAddAuthentificationComponent } from './Popup/PopupAdd/popup-add-authentification/popup-add-authentification.component';
import { PopupAddEvenementComponent } from './Popup/PopupAdd/popup-add-evenement/popup-add-evenement.component';
import { PopupAddJuryComponent } from './Popup/PopupAdd/popup-add-jury/popup-add-jury.component';
import { PopupAddPaysComponent } from './Popup/PopupAdd/popup-add-pays/popup-add-pays.component';
import { PopupAddPersonnelsComponent } from './Popup/PopupAdd/popup-add-personnels/popup-add-personnels.component';
import { PopupAddProjetsComponent } from './Popup/PopupAdd/popup-add-projets/popup-add-projets.component';
import { PopupDeleteAuthentificationComponent } from './Popup/PopupDelete/popup-delete-authentification/popup-delete-authentification.component';
import { PopupDeleteEvenementComponent } from './Popup/PopupDelete/popup-delete-evenement/popup-delete-evenement.component';
import { PopupDeleteJuryComponent } from './Popup/PopupDelete/popup-delete-jury/popup-delete-jury.component';
import { PopupDeletePaysComponent } from './Popup/PopupDelete/popup-delete-pays/popup-delete-pays.component';
import { PopupDeletePersonnelsComponent } from './Popup/PopupDelete/popup-delete-personnels/popup-delete-personnels.component';
import { PopupDeleteProjetsComponent } from './Popup/PopupDelete/popup-delete-projets/popup-delete-projets.component';
import { PopupUpdateAuthentificationComponent } from './Popup/PopupUpdate/popup-update-authentification/popup-update-authentification.component';
import { PopupUpdateEvenementComponent } from './Popup/PopupUpdate/popup-update-evenement/popup-update-evenement.component';
import { PopupUpdateJuryComponent } from './Popup/PopupUpdate/popup-update-jury/popup-update-jury.component';
import { PopupUpdatePaysComponent } from './Popup/PopupUpdate/popup-update-pays/popup-update-pays.component';
import { PopupUpdatePersonnelsComponent } from './Popup/PopupUpdate/popup-update-personnels/popup-update-personnels.component';
import { PopupUpdateProjetsComponent } from './Popup/PopupUpdate/popup-update-projets/popup-update-projets.component';

const routes: Routes = [


  {
    path:'dashboard',
    component: DashboardComponent,
  },
  {
    path:'personnel',
    component: PersonnelsComponent
  },
  {
    path:'pays',
    component: PaysComponent
  },
  {
    path:'typeauth',
    component: TypeauthComponent
  },
  {
    path:'projets',
    component: ProjetsComponent
  },
  {
    path:'evenement',
    component: EvenementComponent
  },
  {
    path:'jury',
    component: JuryComponent
  },
  //1
  {
    path:'addauthentification',
    component: PopupAddAuthentificationComponent
  },
  {
    path:'updateauthentification',
    component: PopupUpdateAuthentificationComponent
  },
  {
    path:'deleteauthentification',
    component: PopupDeleteAuthentificationComponent
  },
//2
  {
    path:'addpays',
    component: PopupAddPaysComponent
  },
  {
    path:'updatepays',
    component: PopupUpdatePaysComponent
  },
  {
    path:'deletepays',
    component: PopupDeletePaysComponent
  },
//3
  {
    path:'addevenement',
    component: PopupAddEvenementComponent
  },
  {
    path:'updateevenement',
    component: PopupUpdateEvenementComponent
  },
  {
    path:'deleteevenement',
    component: PopupDeleteEvenementComponent
  },
//4
  {
    path:'addapersonnels',
    component: PopupAddPersonnelsComponent
  },
  {
    path:'updatepersonnels',
    component: PopupUpdatePersonnelsComponent
  },
  {
    path:'deletepersonnels',
    component:  PopupDeletePersonnelsComponent
  },
//5
  {
    path:'addajury',
    component: PopupAddJuryComponent
  },
  {
    path:'updatjury',
    component: PopupUpdateJuryComponent
  },
  {
    path:'deletejury',
    component: PopupDeleteJuryComponent
  },
  //6
  {
    path:'addprojets',
    component: PopupAddProjetsComponent
  },
  {
    path:'updateprojets',
    component: PopupUpdateProjetsComponent
  },
  {
    path:'deleteprojets',
    component: PopupDeleteProjetsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
