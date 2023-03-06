import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaysModel } from 'src/app/Models/pays-model';
import { PaysService } from 'src/app/Services/pays.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.css']
})
export class PaysComponent implements OnInit {

  mespays : any;
  nbrePays:any
  p : number = 1;
  userFilter : any={user: ''};


  //add pays
  ObjetsPays : PaysModel = {
    nom: '',
    initiale: '',
    images: '',
  }

  formulaire!: FormGroup
  fichier: any;
  contenu?:String;

  file: any;
  nomPays: any;
  images: any;
  initialePays: any;
  id_Pays: any;
 

  constructor(private paysService: PaysService, private formB: FormBuilder) { }

  
  ngOnInit(): void {

    //:::::::::::::::::::::::::::: affiche pays :::::::::::::::::::::::::::
    
    this.paysService.getAllPays().subscribe(data => {
      this.mespays = data;
      this.nbrePays = data.length
      console.log(this.mespays);
    });
  
//:::::::::::::::::::::::::::: insertion formulaire :::::::::::::::::::::::::::
    this.formulaire = this.formB.group({
      nom: ["", Validators.required],
      file: ["", Validators.required],
      initiale: ["", Validators.required],
})

    console.log("Pays kadi :"+this.formulaire.value)
}

// ======================================= ICI ON AJOUTE UN PAYS ======================================

fileChang(event: any) {
  this.file = event.target.files[0]
  console.log(event)
}

CreerPays(){
  this.ObjetsPays = this.formulaire.value
  this.paysService.AjouterPays(this.ObjetsPays, this.file).subscribe(
    data =>{
      this.ObjetsPays = data
    },
    err => console.log(err)
  )
 
}

//=============================== add Pays===============================
popAddPays(){

  // Vérification que tous les champs sont remplis
  if (this.ObjetsPays.nom === '' || this.ObjetsPays.initiale === null || this.file === null) {
    Swal.fire({
      icon: 'error',
      title: 'Erreur de saisie',
      text: 'Veuillez remplir tous les champs du formulaire',
      confirmButtonText: 'OK'
    });
    return;
  }

  // Vérification si le pays existe déjà
  this.ObjetsPays = this.formulaire.value
  this.paysService.checkPays(this.ObjetsPays.nom).subscribe((nomExists) => {
    if (nomExists) {
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Cet pays existe déjà'
      });
    }
        // Sinon, demander confirmation avant d'ajouter le pays
        else {
          Swal.fire({
            position: 'center',
            title: 'Voulez-vous ajouter cet pays ?',
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
              this.paysService.AjouterPays(this.ObjetsPays, this.file).subscribe(
                data => {
                  // this.ObjetsEvents = data;
                  Swal.fire({
                    title: 'Succès',
                    text: 'Le pays a été ajouté avec succès.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  });
                },
                err => console.log(err)
              );
              window.location.reload();
            } else if (result.isDenied) {
              // Annulation de l'ajout du pays
              Swal.fire({
                title: 'Information',
                text: 'L\'ajout du pays a été annulé.',
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
 
//=============================== delete Pays===============================
openModal(nom : any, id : number) {
  Swal.fire({
    title: nom,
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
      this.paysService.deletePaysById(id).subscribe(() => {
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
