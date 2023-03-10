import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PersonnelsService {


  constructor( private http: HttpClient) { }


  //affichage des admin

  public getTousAdmin():Observable<any> {
    return this.http.get('http://localhost:8080/api/auth/userByRole/2');
    
  }

  //verification username
  public checkUsername(username:any):Observable<any> {
    return this.http.get(`http://localhost:8080/api/auth/checkusername/${username}`);
  }

   //verification email
   public checkEmail(email:any):Observable<any> {
    return this.http.get(`http://localhost:8080/api/auth/checkemail/${email}`);
  }


  // ========================================= suprimer un user ====================


url="http://localhost:8080/api/auth/supprimeuser"
public deleteUserById(id:number) {
  return this.http.delete(`${this.url}/${id}`);
  
}



  
  }
  
 

  


