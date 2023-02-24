import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CriteresService } from 'src/app/Services/criteres.service';
import { EvenementService } from 'src/app/Services/evenement.service';
import  Swal from 'sweetalert2';


@Component({
  selector: 'app-criteres',
  templateUrl: './criteres.component.html',
  styleUrls: ['./criteres.component.css']
})
export class CriteresComponent implements OnInit {

  id:any
  p:any
  totalCritere: any
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
  // window.location.reload();
}

//==================================== Ajout Event ===================================================
popAddCriteret(){

  Swal.fire({
    position:'center',
    title: 'Voulez-vous ajouter cet critere ?',
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: 'Oui',
    denyButtonText: 'Non',
    icon : 'success',
    denyButtonColor:'red',
    // cancelButtonText: 'Annuler',
    cancelButtonColor:'red',
    confirmButtonColor: 'green',
    heightAuto: false,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      //Swal.fire('Saved!', '', 'success');
      this.criteresService.AjouterCritere(this.ObjetsCritere.titre, this.ObjetsCritere.contenu, this.id).subscribe(
        data =>{
          this.ObjetsCritere =data
          console.log(this.ObjetsCritere)
        },
       )

       window.location.reload();
  
     } else if (result.isDenied) {
      //Swal.fire('Changes are not saved', '', 'info');
    //  this.route.navigate(['tirage'])
    }
  });

 

}


    //================================================ suprimer ===================

    
    openModal(username : any, id : number) {
      Swal.fire({
        title: username,
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
          this.criteresService.deleteCritereById(id).subscribe(() => {});
          console.log(id)
          Swal.fire({
            title: 'Supprimer  avec succès',
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          });
          window.location.reload()
        
    
        }
      });
    }
}
