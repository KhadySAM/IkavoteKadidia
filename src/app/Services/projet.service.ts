import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor(public http: HttpClient) { }

  // Recuperation des projets par id evements
  getProjetsByIdEvents(idEvents:any):Observable<any>{
    return this.http.get(`http://localhost:8080/api/auth/projetbyevents/${idEvents}`)
   }


   
 

   //:::::::::::::::::::::::::::::::: AJOUTER UN PROJET ::::::::::::::::::::::::::::::::::::::: 

AjouterProjet(libelle:any, description:any, file:File, idEvents: any):Observable<any>{

  let data =new FormData();

  data.append("libelle", libelle);
  data.append("description", description);
  data.append("file",file)

  
  return this.http.post(`http://localhost:8080/api/auth/ajoutprojet/${idEvents}`,data);
  
}



    // =============================== suprime pays ==========================
    
    url="http://localhost:8080/api/auth/supprimeprojet"
    public deleteProjetById(id:number) {
  return this.http.delete(`${this.url}/${id}`);
}

   
}
