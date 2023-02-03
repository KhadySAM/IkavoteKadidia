import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personnels } from '../Models/personnels';
import { UtilisateurModel } from '../Models/utilisateur-model';


@Injectable({
  providedIn: 'root'
})
export class PersonnelsService {


  constructor( private http: HttpClient) { }


  //affichage des admin

  public getTousAdmin():Observable<any> {
    return this.http.get('http://localhost:8080/api/auth/userByRole/2');
    
  }


  // ========================================= suprimer un user ====================


url="http://localhost:8080/api/auth/admin"
public deleteUserById(id=2) {
  return this.http.delete(`${this.url}/${id}`);
  
}


//:::::::::::::::::::::::::::::::: AJOUTER UN PERSONNEL ::::::::::::::::::::::::::::::::::::::: 

AjouterAdmin(utilisateur: UtilisateurModel):Observable<any>{

  let data =new FormData();

  data.append("username", utilisateur.username);
  data.append("email", utilisateur.email);
  data.append("password",utilisateur.password);
  data.append("paysuser" ,utilisateur.paysuser);
  
  return this.http.post(`http://localhost:8080/api/auth/inscadmin`,data);
}


  

}
