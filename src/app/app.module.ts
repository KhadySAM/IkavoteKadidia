import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { httpInterceptorProviders } from './_helpers/http.interceptor';

import { AppComponent } from './app.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { PersonnelsComponent } from './Pages/personnels/personnels.component';
import { PaysComponent } from './Pages/pays/pays.component';
import { TypeauthComponent } from './Pages/typeauth/typeauth.component';
import { ProjetsComponent } from './Pages/projets/projets.component';
import { JuryComponent } from './Pages/jury/jury.component';
import { EvenementComponent } from './Pages/evenement/evenement.component';
import { PopupAddPaysComponent } from './Popup/PopupAdd/popup-add-pays/popup-add-pays.component';
import { PopupAddPersonnelsComponent } from './Popup/PopupAdd/popup-add-personnels/popup-add-personnels.component';
import { PopupAddAuthentificationComponent } from './Popup/PopupAdd/popup-add-authentification/popup-add-authentification.component';
import { PopupAddEvenementComponent } from './Popup/PopupAdd/popup-add-evenement/popup-add-evenement.component';
import { PopupAddProjetsComponent } from './Popup/PopupAdd/popup-add-projets/popup-add-projets.component';
import { PopupAddJuryComponent } from './Popup/PopupAdd/popup-add-jury/popup-add-jury.component';
import { PopupUpdateJuryComponent } from './Popup/PopupUpdate/popup-update-jury/popup-update-jury.component';
import { PopupUpdatePaysComponent } from './Popup/PopupUpdate/popup-update-pays/popup-update-pays.component';
import { PopupUpdatePersonnelsComponent } from './Popup/PopupUpdate/popup-update-personnels/popup-update-personnels.component';
import { PopupUpdateEvenementComponent } from './Popup/PopupUpdate/popup-update-evenement/popup-update-evenement.component';
import { PopupUpdateProjetsComponent } from './Popup/PopupUpdate/popup-update-projets/popup-update-projets.component';
import { PopupUpdateAuthentificationComponent } from './Popup/PopupUpdate/popup-update-authentification/popup-update-authentification.component';
import { ConnexionComponent } from './Pages/connexion/connexion.component';
import { DashboardadminComponent } from './Pages/dashboardadmin/dashboardadmin.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './Pages/login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PersonnelsComponent,
    PaysComponent,
    TypeauthComponent,
    ProjetsComponent,
    JuryComponent,
    EvenementComponent,
    PopupAddPaysComponent,
    PopupAddPersonnelsComponent,
    PopupAddAuthentificationComponent,
    PopupAddEvenementComponent,
    PopupAddProjetsComponent,
    PopupAddJuryComponent,
    PopupUpdateJuryComponent,
    PopupUpdatePaysComponent,
    PopupUpdatePersonnelsComponent,
    PopupUpdateEvenementComponent,
    PopupUpdateProjetsComponent,
    PopupUpdateAuthentificationComponent,
    ConnexionComponent,
    DashboardadminComponent,
    LoginComponent,
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
