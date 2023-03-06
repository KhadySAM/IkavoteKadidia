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
  nbreresultat: any
  mesresultat: any
  idEvents:any
  p : number = 1;

  resultatCalcule = false; // Ajouter cette ligne
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
    this.resultatCalcule = false;
   
  }

   // Obtenir les résultats en fonction de l'ID de l'événement
   goAllResultatsByIdEvents(idEvents: number): void {
    console.log(idEvents);

    // Appeler le service pour obtenir les résultats de l'événement
    this.resultatsService.getResultaByIdEvents(idEvents).subscribe(data => {
      const resultats = data.length; // Utiliser une variable locale au lieu d'une variable globale
      console.log(resultats);

      // Vérifier s'il y a des résultats
      if (resultats === 0) {
        // Afficher une notification si l'événement n'est pas terminé
        Swal.fire({
          position:'center',
          title: 'Attendez la fin de l\'événement pour pouvoir voir les resultats !',
          icon : 'warning',
          confirmButtonText: 'Ok',
          confirmButtonColor: 'green',
          heightAuto: false,
        });
      } else {
        console.log(resultats);
        // Naviguer vers la page des résultats
        this.router.navigate(['dashboard/resultat', idEvents]);
      }
    });
  }


//generer code qr
  goAllCodeVotanttByIdEvents(idEvents:number){
    console.log(idEvents);
    return this.router.navigate(['dashboard/mescode', idEvents])
  }

//calculer les resultats
  goAllCalculerResultatByIdEvents(idEvents:number){
    console.log(idEvents);
    return this.router.navigate(['dashboard/resultat', idEvents])
  }

  resultatsCalcules = false; // Ajouter une variable pour garder une trace si les résultats ont été calculés

  popCalcultResultat(idEvents:number){
    console.log(idEvents)
    this.serviceEvents.getEventsById(idEvents).subscribe(event => {
      if (new Date(event.dateFin) < new Date()) {
        if (this.resultatsCalcules) { // Vérifier si les résultats ont déjà été calculés
          Swal.fire({
            position:'center',
            title: 'Les résultats ont déjà été calculés pour cet événement',
            icon : 'warning',
            confirmButtonText: 'Ok',
            confirmButtonColor: 'green',
            heightAuto: false,
          });
        } else {
          Swal.fire({
            position:'center',
            title: 'Voulez-vous proclamer les resultats ?',
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
              this.resultatsService.getCalculerResultatsByIdEvents(idEvents).subscribe(data => {
                this.resultatsCalcules = true; // Marquer les résultats comme calculés
              });
            } else if (result.isDenied) {
              // Traiter le refus de calculer les résultats
            }
          });
        }
      } else {
        Swal.fire({
          position:'center',
          title: 'L\'événement n\'est pas terminé',
          icon : 'warning',
          confirmButtonText: 'Ok',
          confirmButtonColor: 'green',
          heightAuto: false,
        });
      }
    });
  }
  




  // popCalcultResultat(idEvents:number){
  //   // this.idEvents = this.route.snapshot.params['idEvents'];
  //   console.log(idEvents)
  //   // Récupérer l'événement à partir de la base de données en utilisant l'ID de l'événement
  //   this.serviceEvents.getEventsById(idEvents).subscribe(event => {
  //     // Vérifier si la date de fin de l'événement est passée
  //     if (new Date(event.dateFin) < new Date()) {
  //       Swal.fire({
  //         position:'center',
  //         title: 'Voulez-vous proclamer les resultats ?',
  //         showDenyButton: true,
  //         showCancelButton: false,
  //         confirmButtonText: 'Oui',
  //         denyButtonText: 'Non',
  //         icon : 'success',
  //         denyButtonColor:'red',
  //         cancelButtonColor:'red',
  //         confirmButtonColor: 'green',
  //         heightAuto: false,
  //       }).then((result) => {
  //         if (result.isConfirmed) {
  //           // Calculer les résultats de l'événement
          
  //           this.resultatsService.getCalculerResultatsByIdEvents(idEvents).subscribe(data => {
              
  //           });
            
  //     // this.resultatsService.getCalculerResultatsByIdEvents(2).subscribe(data =>{})
   
  //           // window.location.reload();
   
  //         } else if (result.isDenied) {
  //           // Traiter le refus de calculer les résultats
  //         }
  //       });
  //     } else {
  //       // L'événement n'est pas terminé, afficher un message d'erreur
  //       Swal.fire({
  //         position:'center',
  //         title: 'L\'événement n\'est pas terminé',
  //         icon : 'warning',
  //         confirmButtonText: 'Ok',
  //         confirmButtonColor: 'green',
  //         heightAuto: false,
  //       });
  //     }
  //   });
  // }


}
