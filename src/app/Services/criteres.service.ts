import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CriteresService {

  constructor(public http: HttpClient) { }

  getCritersByIdEvents(idevent:any):Observable<any>{
    return this.http.get(`http://localhost:8080/api/auth/criteresbyevents/${idevent}`)
   }

   
   //:::::::::::::::::::::::::::::::: AJOUTER UN PROJET ::::::::::::::::::::::::::::::::::::::: 

AjouterCritere(titre:any, contenu:any, idEvents: any):Observable<any>{

  let data =new FormData();

  data.append("titre", titre);
  data.append("contenu", contenu);


  
  return this.http.post(`http://localhost:8080/api/auth/ajoutcriteres/${idEvents}`,data);
  
}


    // =============================== suprime pays ==========================
    
    url="http://localhost:8080/api/auth/supprimecriteres"
    public deleteCritereById(id:number) {
  return this.http.delete(`${this.url}/${id}`);
}


}
