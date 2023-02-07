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



//:::::::::::::::::::::::::::::::: AJOUTER UN PAYS ::::::::::::::::::::::::::::::::::::::: 

AjouterEvents(evements: Evenement, file:any):Observable<any>{

  let data =new FormData();

  data.append("libelle", evements.libelle);
  data.append("dateDebut", evements.dateDebut);
  data.append("dateFin", evements.dateFin);
  data.append("bareme", evements.bareme);
  data.append("coefficientUser", evements.coefficientUser);
  data.append("coefficientJury", evements.coefficientJury);
  data.append("nbreVotant", evements.nbreVotant);
  data.append("idauth", evements.idauth);
  data.append("file",file)
  
  return this.http.post(`http://localhost:8080/api/auth/ajoutevents`,data);
}
}
