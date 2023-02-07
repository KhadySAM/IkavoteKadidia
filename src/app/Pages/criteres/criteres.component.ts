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
