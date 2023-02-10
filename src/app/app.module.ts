import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { PersonnelsComponent } from './Pages/personnels/personnels.component';
import { PaysComponent } from './Pages/pays/pays.component';
import { TypeauthComponent } from './Pages/typeauth/typeauth.component';
import { ProjetsComponent } from './Pages/projets/projets.component';
import { JuryComponent } from './Pages/jury/jury.component';
import { EvenementComponent } from './Pages/evenement/evenement.component';
import { DashboardadminComponent } from './Pages/dashboardadmin/dashboardadmin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './Pages/login/login.component';
import { CriteresComponent } from './Pages/criteres/criteres.component';
import { GenererCodeComponent } from './Pages/generer-code/generer-code.component';
import { QRCodeModule } from 'angularx-qrcode';
import { MesCodeComponent } from './Pages/mes-code/mes-code.component';





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
    DashboardadminComponent,
    LoginComponent,
    CriteresComponent,
    GenererCodeComponent,
    MesCodeComponent,
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    QRCodeModule,

  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
