import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuryService {

  constructor(private http: HttpClient) { }

    //affichage des jury

    public getTousJury():Observable<any> {
      return this.http.get('http://localhost:8080/api/auth/userByRole/3');
      
    }

    

    // =============================== suprime pays ==========================
    
    url="http://localhost:8080/api/auth/supprimeuser"
    public deleteUserById(id:number) {
  return this.http.delete(`${this.url}/${id}`);
  
}
}
