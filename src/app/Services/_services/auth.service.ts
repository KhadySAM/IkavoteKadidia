import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
      
    );
  }

  register(username: string, email: string, password: string,pays:string): Observable<any> {
    return this.http.post(
      AUTH_API + 'inscadmin/' + `${pays}`,
      {
        username,
        email,
        password,
        pays
      },
      httpOptions
    );
  }

  registerJury(username: string, email: string, password: string,pays:string): Observable<any> {
    return this.http.post(
      AUTH_API + 'inscjury/' + `${pays}`,
      {
        username,
        email,
        password,
        pays
      },
      httpOptions
    );
  }


  logout1(): Observable<any> {
   
    const req = new HttpRequest('POST', AUTH_API + 'signout', {}, httpOptions);
    return this.http.request(req);
  }
}
