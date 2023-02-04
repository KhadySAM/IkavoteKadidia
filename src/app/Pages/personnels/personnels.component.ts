import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { PersonnelsService } from 'src/app/Services/personnels.service';
import { AuthService } from 'src/app/Services/_services/auth.service';
import { PaysService } from 'src/app/Services/pays.service';

@Component({
  selector: 'app-personnels',
  templateUrl: './personnels.component.html',
  styleUrls: ['./personnels.component.css']
})
export class PersonnelsComponent implements OnInit {

  ids=0;
  mesusers : any;
  mesadmin : any;
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

  constructor(
    private servicepersonnels : PersonnelsService,
    private authService: AuthService,
    private paysService:PaysService) { }

  ngOnInit(): void {
    
     this.servicepersonnels.getTousAdmin().subscribe(data =>{
      this.mesadmin = data;
      console.log(this.mesadmin);
    })

    this.paysService.getAllPays().subscribe(data =>{
      this.mespays = data;
      console.log(data);
    })

    
  }


 // ============================================= suprime pays =======================

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
      this.servicepersonnels.deleteUserById(id).subscribe(() => {
      console.log(id)
      Swal.fire(
        'Supprimer!',
        'supprimé avec succès'
      );
    });

    }
  });
}

//ajouter

onSubmit(): void {
  const { username, email, password, pays} = this.form;

  console.log(pays)
  this.authService.register(username, email, password, pays).subscribe({
    next: data => {
      console.log(data);
      this.isSuccessful = true;
      this.isSignUpFailed = false;
    },
    error: err => {
      this.errorMessage = err.error.message;
      this.isSignUpFailed = true;
    }
  });

}

}
