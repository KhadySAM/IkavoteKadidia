import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Evenement } from 'src/app/Models/evenement';
import { EvenementService } from 'src/app/Services/evenement.service';
import { ProjetService } from 'src/app/Services/projet.service';
import { TypesauthService } from 'src/app/Services/typesauth.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

  mesevents: any
  totalEventLength = 0;
  p : number = 1;


   //add pays
   ObjetsEvents : Evenement = {

    libelle: '',
    dateDebut: '',
    dateFin: '',
    images: '',
    bareme: '',
    coefficientUser: '',
    coefficientJury: '',
    nbreVotant: '',
    idauth: '',


  }

  formulaire!: FormGroup
  fichier: any;
  contenu?:String;

  file: any;
  libelle: any;
  dateDebut:  any;
  dateFin:  any;
  images:  any;
  bareme:  any;
  coefficientUser:  any;
  coefficientJury:  any;
  nbreVotant:  any;
  idauth:  any;
  id_evenements:  any;

  mesTypesAuth:any
  form: any = {
    libelle: null
  };

  


  constructor(
    private serviceEvents: EvenementService,
    private router: Router,
    private formB: FormBuilder,
    private serviceAuth: TypesauthService,
    ) { }

  ngOnInit(): void {

    this.serviceEvents.getAllEvents().subscribe(data =>{
      this.mesevents = data;
      this.totalEventLength = data.length
      console.log(this.mesevents);
    });



    //:::::::::::::::::::::::::::::::::: get type auth ::::::::::::::::::::::
    this.serviceAuth.getAllTypeAuth().subscribe(data =>{
      this.mesTypesAuth = data;
      console.log(this.mesTypesAuth);
    })

    //:::::::::::::::::::::::::::: insertion formulaire :::::::::::::::::::::::::::
    this.formulaire = this.formB.group({
      libelle: ["", Validators.required],
      file: ["", Validators.required],
      dateDebut: ["", Validators.required],
      dateFin: ["", Validators.required],
      bareme: ["", Validators.required],
      coefficientUser: ["", Validators.required],
      coefficientJury: ["", Validators.required],
      nbreVotant: ["", Validators.required],
      idauth: ["", Validators.required],
})

    console.log("Events kadi :"+this.formulaire.value)

    
  }

  // ======================================= ICI ON AJOUTE UN Evenement ======================================

fileChang(event: any) {
  this.file = event.target.files[0]
  console.log(event)
}

CreerEvenement(){
  this.ObjetsEvents = this.formulaire.value
  this.serviceEvents.AjouterEvents(this.ObjetsEvents, this.file).subscribe(
    data =>{
      this.ObjetsEvents = data
    },
    err => console.log(err)
  )
}

  


  goAllProjetByIdEvents(id:number){
    console.log(id);
    return this.router.navigate(['dashboard/projets', id])
  }

  goAllCritereByIdEvents(id:number){
    console.log(id);
    return this.router.navigate(['dashboard/criteres', id])
  }

}
