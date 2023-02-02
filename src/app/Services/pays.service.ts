import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaysModel } from '../Models/pays-model';

@Injectable({
  providedIn: 'root'
})
export class PaysService {

  constructor(private http: HttpClient) { }

   //affichage des pays

   public getAllPays():Observable<any> {
    return this.http.get('http://localhost:8080/api/auth/getallpays');
    
  }

//:::::::::::::::::::::::::::::::: AJOUTER UN PAYS ::::::::::::::::::::::::::::::::::::::: 

AjouterPays(pays: PaysModel, file:any):Observable<any>{

  let data =new FormData();

  data.append("initiale", pays.initiale);
  data.append("nom", pays.nom);
  
  data.append("file",file)
  
  return this.http.post(`http://localhost:8080/api/auth/ajoutpays`,data);
}

}
