import { Component, OnInit } from '@angular/core';
import { TypesauthService } from 'src/app/Services/typesauth.service';

@Component({
  selector: 'app-typeauth',
  templateUrl: './typeauth.component.html',
  styleUrls: ['./typeauth.component.css']
})
export class TypeauthComponent implements OnInit {

  mesTypesAuth : any;
  p : number = 1;
  userFilter : any={user: ''};

  constructor(private serviceAuth: TypesauthService) { }

  ngOnInit(): void {

    this.serviceAuth.getAllTypeAuth().subscribe(data =>{
      this.mesTypesAuth = data;
      console.log(this.mesTypesAuth);
    })
  }
}
