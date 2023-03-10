import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypesauthModel } from '../Models/typesauth-model';

@Injectable({
  providedIn: 'root'
})
export class TypesauthService {

  constructor(private http: HttpClient) { }

  //affichage des typesAuth

  public getAllTypeAuth():Observable<any> {
    return this.http.get('http://localhost:8080/api/auth/getalltype');
    
  }

     //verification des typesAuth

     public checkTypeAuth(libelle:any):Observable<any> {
      return this.http.get(`http://localhost:8080/api/auth/checkTypeAuth/${libelle}`);
    }

  //:::::::::::::::::::::::::::::::: AJOUTER UN auth ::::::::::::::::::::::::::::::::::::::: 

AjouterTypesAuth(typeauth: TypesauthModel):Observable<any>{

  let data =new FormData();

  data.append("libelle", typeauth.libelle);


  return this.http.post(`http://localhost:8080/api/auth/ajouttypesauth`,data);
}

// ========================================= suprimer un pays ====================

url="http://localhost:8080/api/auth/supprimeauth"
  public deleteTypesAuthById(id:number) {
    return this.http.delete(`${this.url}/${id}`);
    
  }
}
