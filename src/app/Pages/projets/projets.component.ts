import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EvenementService } from 'src/app/Services/evenement.service';
import { ProjetService } from 'src/app/Services/projet.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {

  allProjets:any
  nbrProjet:number=0
  libelleEvents:any
  idEvents:any
  allEvents:any
  id:any
  p : number = 1;

   //add projet
   ObjetsProjets : any = {

    libelle: null,
    description: null,
    images: null,

  }
  mesevents: any;
  file: any;

  constructor(
    private projetService: ProjetService,
    private route: ActivatedRoute,
    private evenementService: EvenementService
    ) { }

  ngOnInit(): void {

    this.idEvents = this.route.snapshot.params['idEvents'] 
    this.projetService.getProjetsByIdEvents(this.idEvents).subscribe(data =>{
      this.allProjets = data
      this.nbrProjet = data.length
      console.log(this.allProjets)
    })


    //:::::::::::::::::::::::::::::::::: get  event ::::::::::::::::::::::
  

    this.evenementService.getEventsById(this.idEvents).subscribe(data =>{
      this.allEvents = data
      this.libelleEvents=data.libelle
      this.idEvents = data.id
      console.log(this.libelleEvents)

      console.log(this.idEvents)
      
    });
    
  }

    // ======================================= ICI ON AJOUTE L'IMAGE ======================================

fileChang(event: any) {
  this.file = event.target.files[0]
  console.log(event)
}

// ======================================= ICI ON CREE L'EVENT ======================================

CreerProjet(){
  this.projetService.AjouterProjet(this.ObjetsProjets.libelle, this.ObjetsProjets.description, this.file, this.idEvents).subscribe(
    data =>{
      this.ObjetsProjets =data
    },
  )
}



}
