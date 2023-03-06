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
 
}



// Méthode pour vérifier si la date est passée ou non
isDatePassed(date: any): boolean {
  const today = new Date();
  return date < today;
}

// Méthode pour vérifier si la date de fin est après la date de début
isEndDateAfterStartDate(startDate: any, endDate: any): boolean {
  return endDate < startDate;
}

//==================================== Ajout Event ===================================================
popAddEvent() {

  // Vérification que tous les champs sont remplis
  if (this.ObjetsEvents.libelle === '' || this.ObjetsEvents.dateDebut === null || this.ObjetsEvents.dateFin === null || this.ObjetsEvents.bareme === null || this.ObjetsEvents.coefficientUser === null || this.ObjetsEvents.coefficientJury === null || this.ObjetsEvents.nbreVotant === null || this.file === null || this.mespays.nom === '' || this.mesTypesAuth.libelle === '') {
    Swal.fire({
      icon: 'error',
      title: 'Erreur de saisie',
      text: 'Veuillez remplir tous les champs du formulaire',
      confirmButtonText: 'OK'
    });
    return;
  }

  // Récupération des dates saisies dans le formulaire
  const startDate = new Date(this.ObjetsEvents.dateDebut);
  const endDate = new Date(this.ObjetsEvents.dateFin);
  const coefficientUser = this.ObjetsEvents.coefficientUser;
  const coefficientJury = this.ObjetsEvents.coefficientJury;

  // Vérification des dates saisies
  if (this.isDatePassed(startDate)) {
    Swal.fire({
      title: 'Erreur',
      text: 'La date de début est passée.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
    return;
  }

  if (this.isEndDateAfterStartDate(startDate, endDate)) {
    Swal.fire({
      title: 'Erreur',
      text: 'La date de fin doit être après la date de début.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
    return;
  }

     // Vérification de la somme des coefficients
     const totalCoefficients = coefficientUser + coefficientJury;
     if (totalCoefficients !== 100) {
       Swal.fire({
         icon: 'error',
         title: 'Erreur de saisie',
         text: 'La somme des coefficients Jury et Votant doit être égale à 100',
         confirmButtonText: 'OK'
       });
       return;
     }

  // Vérification si l'événement existe déjà
  this.serviceEvents.checkEvent(this.ObjetsEvents.libelle).subscribe((libelleExists) => {
    if (libelleExists) {
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Cet evenement existe déjà'
      });
    }
        // Sinon, demander confirmation avant d'ajouter l'événement
        else {
          Swal.fire({
            position: 'center',
            title: 'Voulez-vous ajouter cet event ?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Oui',
            denyButtonText: 'Non',
            icon: 'success',
            denyButtonColor: 'red',
            cancelButtonColor: 'red',
            confirmButtonColor: 'green',
            heightAuto: false,
          }).then((result) => {
            if (result.isConfirmed) {
              // Ajout de l'événement
              this.serviceEvents.AjouterEvents(this.ObjetsEvents.libelle, this.ObjetsEvents.dateDebut, this.ObjetsEvents.dateFin,
                this.ObjetsEvents.bareme, this.ObjetsEvents.coefficientUser, this.ObjetsEvents.coefficientJury,
                this.ObjetsEvents.nbreVotant, this.file, this.mespays.nom, this.mesTypesAuth.libelle).subscribe(
                data => {
                  this.ObjetsEvents = data;
                  Swal.fire({
                    title: 'Succès',
                    text: 'L\'événement a été ajouté avec succès.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  });
                },
                err => console.log(err)
              );
              window.location.reload();
            } else if (result.isDenied) {
              // Annulation de l'ajout de l'événement
              Swal.fire({
                title: 'Information',
                text: 'L\'ajout de l\'événement a été annulé.',
                icon: 'info',
                confirmButtonText: 'OK'
              });
            }
          });
        }
      },
      err => console.log(err)
    );
}


// popAddEvent(){

  //  // Vérification que tous les champs sont remplis
  //  if (this.ObjetsEvents.libelle === '' || this.ObjetsEvents.dateDebut === null || this.ObjetsEvents.dateFin === null || this.ObjetsEvents.bareme === null || this.ObjetsEvents.coefficientUser === null || this.ObjetsEvents.coefficientJury === null || this.ObjetsEvents.nbreVotant === null || this.file === null || this.mespays.nom === '' || this.mesTypesAuth.libelle === '') {
  //   Swal.fire({
  //     icon: 'error',
  //     title: 'Erreur de saisie',
  //     text: 'Veuillez remplir tous les champs du formulaire',
  //     confirmButtonText: 'OK'
  //   });
  //   return;
  // }

//   // Récupération des dates saisies dans le formulaire
//   const startDate = new Date(this.ObjetsEvents.dateDebut);
//   const endDate = new Date(this.ObjetsEvents.dateFin);
  // const coefficientUser = this.ObjetsEvents.coefficientUser;
  // const coefficientJury = this.ObjetsEvents.coefficientJury;

//   // Vérification des dates saisies
//   if (this.isDatePassed(startDate)) {
//     Swal.fire({
//       icon: 'error',
//       title: 'Erreur de saisie',
//       text: 'La date de début est déjà passée',
//       confirmButtonText: 'OK'
//     });
//     return;
//   }

//   if (this.isEndDateAfterStartDate(startDate, endDate)) {
//     Swal.fire({
//       icon: 'error',
//       title: 'Erreur de saisie',
//       text: 'La date de fin doit être après la date de début',
//       confirmButtonText: 'OK'
//     });
//     return;
//   }
  
    // // Vérification de la somme des coefficients
    // const totalCoefficients = coefficientUser + coefficientJury;
    // if (totalCoefficients !== 100) {
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Erreur de saisie',
    //     text: 'La somme des coefficients Jury et Votant doit être égale à 100',
    //     confirmButtonText: 'OK'
    //   });
    //   return;
    // }

//   // Si les dates sont valides, on peut poursuivre avec la soumission du formulaire
//   console.log('Formulaire soumis avec succès !');

  

//   Swal.fire({
//     position: 'center',
//     title: 'Voulez-vous ajouter cet event ?',
//     showDenyButton: true,
//     showCancelButton: false,
//     confirmButtonText: 'Oui',
//     denyButtonText: 'Non',
//     icon: 'success',
//     denyButtonColor: 'red',
//     cancelButtonColor: 'red',
//     confirmButtonColor: 'green',
//     heightAuto: false,
//   }).then((result) => {
//     if (result.isConfirmed) {

    
//       this.serviceEvents.AjouterEvents(this.ObjetsEvents.libelle,  this.ObjetsEvents.dateDebut, this.ObjetsEvents.dateFin,
//       this.ObjetsEvents.bareme, this.ObjetsEvents.coefficientUser, this.ObjetsEvents.coefficientJury,
//       this.ObjetsEvents.nbreVotant, this.file, this.mespays.nom, this.mesTypesAuth.libelle).subscribe(
//         data =>{
//           this.ObjetsEvents = data
//         },
//         err => console.log(err)
//       )
//       window.location.reload();
//     } else if (result.isDenied) {
      
//     }
//   });
// }


// //==================================== Ajout Event ===================================================
// popAddEvent(){

//    // Récupération des dates saisies dans le formulaire
//    const startDate = new Date(this.ObjetsEvents.dateDebut);
//    const endDate = new Date(this.ObjetsEvents.dateFin);

//    // Vérification des dates saisies
//    if (this.isDatePassed(startDate)) {
//      alert('La date de début est passée.');
//      return;
//    }

//    if (this.isEndDateAfterStartDate(startDate, endDate)) {
//      alert('La date de fin doit etre après la date de début.');
//      return;
//    }

//    // Si les dates sont valides, on peut poursuivre avec la soumission du formulaire
//    console.log('Formulaire soumis avec succès !');
 


//     Swal.fire({
//       position:'center',
//       title: 'Voulez-vous ajouter cet event ?',
//       showDenyButton: true,
//       showCancelButton: false,
//       confirmButtonText: 'Oui',
//       denyButtonText: 'Non',
//       icon : 'success',
//       denyButtonColor:'red',
//       // cancelButtonText: 'Annuler',
//       cancelButtonColor:'red',
//       confirmButtonColor: 'green',
//       heightAuto: false,
//     }).then((result) => {
//       /* Read more about isConfirmed, isDenied below */
//       if (result.isConfirmed) {
//         //Swal.fire('Saved!', '', 'success');
//         this.serviceEvents.AjouterEvents(this.ObjetsEvents.libelle,  this.ObjetsEvents.dateDebut, this.ObjetsEvents.dateFin,
//           this.ObjetsEvents.bareme, this.ObjetsEvents.coefficientUser, this.ObjetsEvents.coefficientJury,
//            this.ObjetsEvents.nbreVotant, this.file, this.mespays.nom, this.mesTypesAuth.libelle).subscribe(
//          data =>{
//            this.ObjetsEvents = data
//          },
//          err => console.log(err)
//          )

//          window.location.reload();
    
//        } else if (result.isDenied) {
//         //Swal.fire('Changes are not saved', '', 'info');
//       //  this.route.navigate(['tirage'])
//       }
//     });

   

//   }

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
