import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { data } from 'jquery';
import { Observable, retry } from 'rxjs';
import { Evenement } from '../Models/evenement';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  constructor(private http: HttpClient) { }

   //verification event
   public checkEvent(libelle:any):Observable<any> {
    return this.http.get(`http://localhost:8080/api/auth/checkevent/${libelle}`);
  }


  //affichage des jury

  public getAllEvents():Observable<any> {
    return this.http.get('http://localhost:8080/api/auth/getallevents');
    
  }

  // Recuperation des evements par id
  getEventsById(idevent:any):Observable<any>{
    return this.http.get(`http://localhost:8080/api/auth/events/${idevent}`)
   }


   
    // =============================== suprime evenement ==========================
    
    url="http://localhost:8080/api/auth/supprimevent"
    public deleteEvenementById(id:number) {
  return this.http.delete(`${this.url}/${id}`);
}



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


Modifier(id:any, libelle:any, dateDebut:any, dateFin:any, bareme:any, coefficientUser:any, coefficientJury:any, nbreVotant:any):Observable<any>{
  const data = new FormData();
  data.append("libelle", libelle);
  data.append("dateDebut", dateDebut);
  data.append("dateFin", dateFin);
  data.append("bareme", bareme);
  data.append("coefficientUser", coefficientUser);
  data.append("coefficientJury", coefficientJury);
  data.append("nbreVotant", nbreVotant);

  return this.http.put<any>(`http://localhost:8080/api/auth/modifiier/${id}`, data)

}

getById(id:number):Observable<any>{
  return this.http.get(`http://localhost:8080/api/auth/events/${id}`)
}
}
