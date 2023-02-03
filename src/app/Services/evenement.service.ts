import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  constructor(private http: HttpClient) { }

  //affichage des jury

  public getAllEvents():Observable<any> {
    return this.http.get('http://localhost:8080/api/auth/getallevents');
    
  }
}
