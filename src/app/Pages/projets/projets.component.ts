import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EvenementService } from 'src/app/Services/evenement.service';
import { ProjetService } from 'src/app/Services/projet.service';
import Swal from 'sweetalert2';

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


    //:::::::::::::::::::::::::::::::::: get event ::::::::::::::::::::::
  

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
  // window.location.reload();
}
//===============================add projet =========================================================

popAddProjet(){

  // const { username, email, password, pays} = this.form;

 Swal.fire({
   position:'center',
   title: 'Voulez-vous ajouter cet projet ?',
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
     this.projetService.AjouterProjet(this.ObjetsProjets.libelle, this.ObjetsProjets.description, this.file, this.idEvents).subscribe(
      data =>{
        this.ObjetsProjets =data
      })

     window.location.reload();

   } else if (result.isDenied) {
     //Swal.fire('Changes are not saved', '', 'info');
   //  this.route.navigate(['tirage'])
   }
 });

 //  window.location.reload();

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
          this.projetService.deleteProjetById(id).subscribe(() => {
          console.log(id)
          Swal.fire({
            title: 'Supprimer  avec succès',
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          });
         
        });
    
        window.location.reload()
        }
      });
    }


}
