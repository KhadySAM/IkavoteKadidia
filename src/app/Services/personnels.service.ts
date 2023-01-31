import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/personnels/user';

@Injectable({
  providedIn: 'root'
})
export class PersonnelsService {


  constructor( private http: HttpClient) { }


  //affichage des users

  public getAll():Observable<any> {
    return this.http.get('http://localhost:8080/api/auth/getalluser');
    
  }

  

  

}
