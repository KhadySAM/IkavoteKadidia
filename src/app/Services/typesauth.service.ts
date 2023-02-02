import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypesauthService {

  constructor(private http: HttpClient) { }

  //affichage des typesAuth

  public getAllTypeAuth():Observable<any> {
    return this.http.get('http://localhost:8080/api/auth/getalltype');
    
  }
}
