import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TypesauthModel } from 'src/app/Models/typesauth-model';
import { TypesauthService } from 'src/app/Services/typesauth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-typeauth',
  templateUrl: './typeauth.component.html',
  styleUrls: ['./typeauth.component.css']
})
export class TypeauthComponent implements OnInit {

  mesTypesAuth : any;
  nbreTypes: any;
  p : number = 1;
  userFilter : any={user: ''};

  //add pays
  ObjetsAuth : TypesauthModel = {
    libelle: '',
 
   }
 
   formulaire!: FormGroup
    contenu?:String;
  
   libelleTypesauth: any;
   id_Typesauth: any;

  constructor(private serviceAuth: TypesauthService, private formB: FormBuilder) { }

  ngOnInit(): void {

    this.serviceAuth.getAllTypeAuth().subscribe(data =>{
      this.mesTypesAuth = data;
      this.nbreTypes = data.length
      console.log(this.mesTypesAuth);
    })

    //:::::::::::::::::::::::::::: insertion formulaire :::::::::::::::::::::::::::
    this.formulaire = this.formB.group({
      libelle: ["", Validators.required],
})

}

// ======================================= ICI ON AJOUTE UN typesAuth ======================================


CreerAuth(){

  this.ObjetsAuth = this.formulaire.value

  this.serviceAuth.AjouterTypesAuth(this.ObjetsAuth).subscribe(
    data =>{
      this.ObjetsAuth = data
    },
    err => console.log(err)
  )
  // window.location.reload();
}
// ======================================= add typesAuth ======================================

popAddAuth(){

  // Vérification que tous les champs sont remplis
  if (this.ObjetsAuth.libelle === '') {
    Swal.fire({
      icon: 'error',
      title: 'Erreur de saisie',
      text: 'Veuillez renseigner type d\'authentification',
      confirmButtonText: 'OK'
    });
    // return;
  }
// Vérification si le pays existe déjà
this.ObjetsAuth = this.formulaire.value
this.serviceAuth.checkTypeAuth(this.ObjetsAuth.libelle).subscribe((libelleExists) => {
  if (libelleExists) {
    Swal.fire({
      icon: 'error',
      title: 'Erreur',
      text: 'Cet type d\'authentification existe déjà'
    });
  }
      // Sinon, demander confirmation avant d'ajouter le pays
      else {
        Swal.fire({
          position: 'center',
          title: 'Voulez-vous ajouter cet type d\'authentification ?',
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
            this.serviceAuth.AjouterTypesAuth(this.ObjetsAuth).subscribe(
              data => {
                // this.ObjetsEvents = data;
                Swal.fire({
                  title: 'Succès',
                  text: 'Letype d\'authentification a été ajouté avec succès.',
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
              text: 'L\'ajout du type d\'authentification a été annulé.',
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
// popAddAuth(){

  

//  Swal.fire({
//    position:'center',
//    title: 'Voulez-vous ajouter cet type authentificatication ?',
//    showDenyButton: true,
//    showCancelButton: false,
//    confirmButtonText: 'Oui',
//    denyButtonText: 'Non',
//    icon : 'success',
//    denyButtonColor:'red',
   
//    cancelButtonColor:'red',
//    confirmButtonColor: 'green',
//    heightAuto: false,
//  }).then((result) => {
  
//    if (result.isConfirmed) {
    
//      this.ObjetsAuth = this.formulaire.value

//      this.serviceAuth.AjouterTypesAuth(this.ObjetsAuth).subscribe(
//        data =>{
//          this.ObjetsAuth = data
//        },
//        err => console.log(err)
//      )

//      window.location.reload();

//    } else if (result.isDenied) {
   
//    }
//  });

// }


// ============================================= suprime pays =======================

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
      this.serviceAuth.deleteTypesAuthById(id).subscribe(() => {
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
  
