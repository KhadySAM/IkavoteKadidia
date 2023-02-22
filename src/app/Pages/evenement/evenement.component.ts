import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EvenementService } from 'src/app/Services/evenement.service';
import { PaysService } from 'src/app/Services/pays.service';
import { TypesauthService } from 'src/app/Services/typesauth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

  mesevents: any
  totalEventLength = 0;
  p : number = 1;


   //add events
   ObjetsEvents : any = {

    libelle: null,
    dateDebut: null,
    dateFin: null,
    images: null,
    bareme: null,
    coefficientUser:null,
    coefficientJury: null,
    nbreVotant: null,

  }

  nompays: any;
  mespays: any;
  libelleauth: any;
  mesTypesAuth: any;
  file: any;

  constructor(
    private serviceEvents: EvenementService,
    private router: Router,
   // private formB: FormBuilder,
    private serviceAuth: TypesauthService,
    private paysService: PaysService,
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
      this.libelleauth =data[1].libelle
      console.log(this.libelleauth);

    });

    //:::::::::::::::::::::::::::::::::: get type pays ::::::::::::::::::::::

    this.paysService.getAllPays().subscribe(data =>{
      this.mespays = data;
     
      console.log(this.nompays);
      console.log(this.mespays)
      console.log(data)
    })
  
  }

  // ======================================= ICI ON AJOUTE L'IMAGE ======================================

fileChang(event: any) {
  this.file = event.target.files[0]
  console.log(event)
}


// ======================================= ICI ON CREE L'EVENT ======================================


CreerEvenement(){
  this.serviceEvents.AjouterEvents(this.ObjetsEvents.libelle,  this.ObjetsEvents.dateDebut, this.ObjetsEvents.dateFin,
     this.ObjetsEvents.bareme, this.ObjetsEvents.coefficientUser, this.ObjetsEvents.coefficientJury,
      this.ObjetsEvents.nbreVotant, this.file, this.mespays.nom, this.mesTypesAuth.libelle).subscribe(
    data =>{
      this.ObjetsEvents = data
    },
    err => console.log(err)
  )
  window.location.reload();
}

    //================================================ suprimer ===================

    openModal(libelle : any, id : number) {
      Swal.fire({
        title: libelle,
        text: "Commfirmer la suppression ?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText : "NON",
        confirmButtonText: 'OUI'
      }).then((result) => {
        if (result.isConfirmed) {
          //suppp
          this.serviceEvents.deleteEvenementById(id).subscribe(() => {
          console.log(id)
          Swal.fire({
            title: 'Supprimer  avec succès',
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          });
          window.location.reload()

        });
    
        }
      });
    }

  // goResultatByIdEvents(id:number){
  //   console.log(id);
  //   return this.router.navigate(['dashboard/criteres', id])
  // }

  goAllProjetByIdEvents(idEvents:number){
    console.log(idEvents);
    return this.router.navigate(['dashboard/projets', idEvents])
  }

  goAllCritereByIdEvents(id:number){
    console.log(id);
    return this.router.navigate(['dashboard/criteres', id])
  }

  goAllResultatsByIdEvents(idEvents:number){
    console.log(idEvents);
    return this.router.navigate(['dashboard/resultat', idEvents])
  }

}
