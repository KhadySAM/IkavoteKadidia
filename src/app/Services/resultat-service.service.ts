import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultatServiceService {

  constructor(public http: HttpClient) { }

  //  // Recuperation des resultats par id evements
  //  getResultatsByIdEvents(idEvents:any):Observable<any>{
  //   return this.http.get(`http://localhost:8080/api/auth/moyenneJuryParEvent/${idEvents}`)
  //  }

    // Recuperation des resultats par id evements
    getCalculerResultatsByIdEvents(idEvents:any):Observable<any>{
      return this.http.get(`http://localhost:8080/api/auth/resultat/${idEvents}`)
     }

    // Recuperation des resultats par id evements
  getResultaByIdEvents(idEvents:any):Observable<any>{
    return this.http.get(`http://localhost:8080/api/auth/getResultatParId/${idEvents}`)
   }

  //      // Recuperation des resultats par id evements
  // getResultaByIdEvents(idEvents:any):Observable<any>{
  //   return this.http.get(`http://localhost:8080/api/auth/getResultatParId/${idEvents}`)
  //  }
}
