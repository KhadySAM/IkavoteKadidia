import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evenement } from '../Models/evenement';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  constructor(private http: HttpClient) { }

  //affichage des jury

  public getAllEvents():Observable<any> {
    return this.http.get('http://localhost:8080/api/auth/getallevents');
    
  }

  // Recuperation des evements par id
  getEventsById(idevent:any):Observable<any>{
    return this.http.get(`http://localhost:8080/api/auth/events/${idevent}`)
   }

   //:::::::::::::::::::::::::::::::: AJOUTER UN PAYS ::::::::::::::::::::::::::::::::::::::: 



//:::::::::::::::::::::::::::::::: AJOUTER UN EVENTS ::::::::::::::::::::::::::::::::::::::: 

AjouterEvents(libelle:any, dateDebut:any, dateFin:any, bareme:any, coefficientUser:any, coefficientJury:any, nbreVotant:any, file:File, nompays: any, libelleauth: any):Observable<any>{

  let data =new FormData();

  data.append("libelle", libelle);
  data.append("dateDebut", dateDebut);
  data.append("dateFin", dateFin);
  data.append("bareme", bareme);
  data.append("coefficientUser", coefficientUser);
  data.append("coefficientJury", coefficientJury);
  data.append("nbreVotant", nbreVotant);
  data.append("file",file)

  
  return this.http.post(`http://localhost:8080/api/auth/ajoutevents/${nompays}/${libelleauth}`,data);
  
}

}
