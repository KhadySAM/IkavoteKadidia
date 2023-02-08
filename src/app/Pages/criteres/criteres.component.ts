import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CriteresService } from 'src/app/Services/criteres.service';
import { EvenementService } from 'src/app/Services/evenement.service';

@Component({
  selector: 'app-criteres',
  templateUrl: './criteres.component.html',
  styleUrls: ['./criteres.component.css']
})
export class CriteresComponent implements OnInit {

  id:any
  criteresAff:any
  libelleEvents:any
  allEvents:any
  nbrCritere:any

   //add critere
   ObjetsCritere : any = {

    titre: null,
    contenu: null,
    

  }

  constructor(
    private route: ActivatedRoute,
    private criteresService: CriteresService,
    private evenementService: EvenementService,
  ) { }

  ngOnInit(): void {

    // get des criteres
    this.id = this.route.snapshot.params['id'] 
    this.criteresService.getCritersByIdEvents(this.id).subscribe(data =>{
      this.criteresAff = data;
      this.nbrCritere = data.length
      console.log(this.criteresAff)
      console.log(this.id)
      
    this.evenementService.getEventsById(this.id).subscribe(data =>{
      this.allEvents = data
      this.libelleEvents=data.libelle
      console.log(this.libelleEvents)
    });

        // nom events
    // this.id = this.route.snapshot.params['id']
    
      
    })
  }



// ======================================= ICI ON CREE CRITERE ======================================

CreerCritere(){
  this.criteresService.AjouterCritere(this.ObjetsCritere.titre, this.ObjetsCritere.contenu, this.id).subscribe(
    data =>{
      this.ObjetsCritere =data
      console.log(this.ObjetsCritere)
    },
  )
}

}
