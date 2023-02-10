import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodeVotantServiceService {

  constructor(public http: HttpClient) { }

  getCodeVotantByEvents(idevent:any):Observable<any>{
    return this.http.get(`http://localhost:8080/api/auth/qrcodebyevents/${idevent}`)
  }

 
}
