import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EvenementService } from 'src/app/Services/evenement.service';
import { ProjetService } from 'src/app/Services/projet.service';
import { ResultatServiceService } from 'src/app/Services/resultat-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-generer-code',
  templateUrl: './generer-code.component.html',
  styleUrls: ['./generer-code.component.css']
})
export class GenererCodeComponent implements OnInit {

  mesevents: any
  idEvents:any
  p : number = 1;

  
  mesCalcule:any

  boutonCliquer = false;

  constructor(
    private serviceEvents: EvenementService,
    private router: Router,
     private route: ActivatedRoute,
    private resultatsService: ResultatServiceService,
  ) { }

  ngOnInit(): void {

    this.serviceEvents.getAllEvents().subscribe(data =>{
      this.mesevents = data;
      console.log(this.mesevents);
    });

    
   
  }

  goAllResultatsByIdEvents(idEvents:number){
    console.log(idEvents);
    return this.router.navigate(['dashboard/resultat', idEvents])
  }

  goAllCodeVotanttByIdEvents(idEvents:number){
    console.log(idEvents);
    return this.router.navigate(['dashboard/mescode', idEvents])
  }

  goAllCalculerResultatByIdEvents(idEvents:number){
    console.log(idEvents);
    return this.router.navigate(['dashboard/resultat', idEvents])
  }


  
popCalcultResultat(){

  
  Swal.fire({
    position:'center',
    title: 'Voulez-vous ajouter cet projet ?',
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: 'Oui',
    denyButtonText: 'Non',
    icon : 'success',
    denyButtonColor:'red',
    cancelButtonColor:'red',
    confirmButtonColor: 'green',
    heightAuto: false,
  }).then((result) => {
  
    if (result.isConfirmed) {
       this.idEvents = this.route.snapshot.params['idEvents']
      this.resultatsService.getCalculerResultatsByIdEvents(this.idEvents).subscribe(data =>{

        // this.mesCalcule = "resultat calculer avec succes";
      })
 
      window.location.reload();
 
    } else if (result.isDenied) {
  
    }
  });
 }

}
