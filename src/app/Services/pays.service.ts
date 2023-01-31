import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaysService {

  url = 'http://localhost:8080/api/superadmin'

  constructor(private http: HttpClient) { }

  //La mthode permettant d'ajouter un pays

  PostPays(nom:any, initiale:any, file:any):Observable<any>{
    const data = new FormData()
    data.append('nom', nom );
    data.append('initiale', initiale );
    data.append('file', file );
    
    
    return this.http.post<any>("http://localhost:8080/api/superadmin/ajoutpays" ,data)
  }

}
