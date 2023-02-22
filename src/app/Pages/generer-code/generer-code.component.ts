import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EvenementService } from 'src/app/Services/evenement.service';

@Component({
  selector: 'app-generer-code',
  templateUrl: './generer-code.component.html',
  styleUrls: ['./generer-code.component.css']
})
export class GenererCodeComponent implements OnInit {

  mesevents: any
  idEvents:any
  p : number = 1;
  constructor(
    private serviceEvents: EvenementService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.serviceEvents.getAllEvents().subscribe(data =>{
      this.mesevents = data;
      console.log(this.mesevents);
    });

    
   
  }

  goResultatByIdEvents(id:number){
    console.log(id);
    return this.router.navigate(['dashboard/criteres', id])
  }

  goAllCodeVotanttByIdEvents(idEvents:number){
    console.log(idEvents);
    return this.router.navigate(['dashboard/mescode', idEvents])
  }

}
