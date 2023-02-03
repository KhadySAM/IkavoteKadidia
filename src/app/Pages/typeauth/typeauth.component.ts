import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TypesauthModel } from 'src/app/Models/typesauth-model';
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

  //add pays
  ObjetsAuth : TypesauthModel = {
   libelle: '',

  }

  formulaire!: FormGroup
  contenu?:String;
 
  libelleTypesauth: any;  
  id_Typesauth: any;


  constructor(private serviceAuth: TypesauthService, private formB: FormBuilder) { }

  ngOnInit(): void {

    this.serviceAuth.getAllTypeAuth().subscribe(data =>{
      this.mesTypesAuth = data;
      console.log(this.mesTypesAuth);
    })

    //:::::::::::::::::::::::::::: insertion formulaire :::::::::::::::::::::::::::
    this.formulaire = this.formB.group({
      libelle: ["", Validators.required],
})

}

// ======================================= ICI ON AJOUTE UN typesAuth ======================================


CreerAuth(){

  this.ObjetsAuth = this.formulaire.value

  this.serviceAuth.AjouterTypesAuth(this.ObjetsAuth).subscribe(
    data =>{
      this.ObjetsAuth = data
    },
    err => console.log(err)
  )

}
}
  
