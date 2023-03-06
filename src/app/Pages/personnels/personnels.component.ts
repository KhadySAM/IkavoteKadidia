import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { PersonnelsService } from 'src/app/Services/personnels.service';
import { AuthService } from 'src/app/Services/_services/auth.service';
import { PaysService } from 'src/app/Services/pays.service';
import { data } from 'jquery';

@Component({
  selector: 'app-personnels',
  templateUrl: './personnels.component.html',
  styleUrls: ['./personnels.component.css']
})
export class PersonnelsComponent implements OnInit {

  ids=0;
  mesusers : any;
  mesadmin : any;
  nbreAdmin: any;
  paysid : any;
  
  p : number = 1;
  userFilter : any={user: ''};

  form: any = {
    username: null,
    email: null,
    password: null,
    idpays:null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  mespays: any;

  duplicateError: string = '';


  constructor(
    private servicepersonnels : PersonnelsService,
    private authService: AuthService,
    private paysService:PaysService) { }

  ngOnInit(): void {
    
     this.servicepersonnels.getTousAdmin().subscribe(data =>{
      this.mesadmin = data;
      this.nbreAdmin =data.length
      console.log(this.mesadmin);
    })

    this.paysService.getAllPays().subscribe(data =>{
      this.mespays = data;
      console.log(data);
    })

    
  }


 // ============================================= suprime admin =======================

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
      this.servicepersonnels.deleteUserById(id).subscribe(() => {
      console.log(id)
      Swal.fire({
        title: 'Supprimer  avec succès',
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      });
     

    });

    window.location.reload();
    }
  });
}

popAddAdmin(){
  const { username, email, password, pays} = this.form;

  Swal.fire({
    position: 'center',
    title: 'Voulez-vous ajouter cet admin ?',
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
      this.servicepersonnels.checkEmail(email).subscribe((emailExists) => {
        if (emailExists) {
          Swal.fire({
            icon: 'error',
            title: 'Erreur',
            text: 'Cet email est déjà utilisé.'
          });
          this.isSignUpFailed = true;
        } else {
          this.servicepersonnels.checkUsername(username).subscribe((usernameExists) => {
            if (usernameExists) {
              Swal.fire({
                icon: 'error',
                title: 'Erreur',
                text: 'Ce nom d\'utilisateur est déjà utilisé.'
              });
              this.isSignUpFailed = true;
            } else {
              this.authService.register(username, email, password, pays).subscribe({
                next: (data) => {
                  console.log(data);
                  this.isSuccessful = true;
                  this.isSignUpFailed = false;
                },
                
                error: (err) => {

                  this.errorMessage = err.error.message;
                  Swal.fire({
                    icon: 'error',
                    title: 'Erreur',
                    text: this.errorMessage
                  });
                  this.isSignUpFailed = true;
                },
                
              });
              // rafraîchir la page après l'ajout réussi
              window.location.reload();
            }
          });
        }
      });
    } 
    else if (result.isDenied) {
    }
  });
}

}
