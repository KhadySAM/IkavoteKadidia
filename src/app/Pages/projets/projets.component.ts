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
  allEvents:any
  id:any

  constructor(
    private projetService: ProjetService,
    private route: ActivatedRoute,
    private evenementService: EvenementService
    ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'] 
    this.projetService.getProjetsByIdEvents(this.id).subscribe(data =>{
      this.allProjets = data
      this.nbrProjet = data.length
      console.log(this.allProjets);
      console.log(this.nbrProjet);
    });


    this.id = this.route.snapshot.params['id']
    console.log(this.id)
    // nom events
    this.evenementService.getEventsById(this.id).subscribe(data =>{
      this.allEvents = data
      this.libelleEvents=data.libelle
      console.log(this.libelleEvents)
      
    })
    
  }



}
