import { Component, OnInit } from '@angular/core';
import { JuryService } from 'src/app/Services/jury.service';
import { PaysService } from 'src/app/Services/pays.service';
import { AuthService } from 'src/app/Services/_services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-jury',
  templateUrl: './jury.component.html',
  styleUrls: ['./jury.component.css']
})
export class JuryComponent implements OnInit {

  p : number = 1;
  userFilter : any={user: ''};
  mesjury : any;

  mespays: any;
  form: any = {
    username: null,
    email: null,
    password: null,
    idpays:null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private serviceJury: JuryService, private authService: AuthService, private paysService: PaysService) { }

  ngOnInit(): void {

    this.serviceJury.getTousJury().subscribe(data =>{
      this.mesjury = data;
      console.log(this.mesjury);
    });

    this.paysService.getAllPays().subscribe(data =>{
      this.mespays = data;
      console.log(data);
    })
  }

  actualisationJury(){

    this.serviceJury.getTousJury().subscribe(data =>{
      
    });

  }

  // onSubmitJury(): void {
  //   const { username, email, password, pays} = this.form;
  
  //   console.log(pays)
  //   this.authService.registerJury(username, email, password, pays).subscribe({
  //     next: data => {
  //       console.log(data);
  //       this.isSuccessful = true;
  //       this.isSignUpFailed = false;
  //     },
  //     error: err => {
  //       this.errorMessage = err.error.message;
  //       this.isSignUpFailed = true;
  //     }
  //   });
  
  //   }

  onSubmitJury(): void {
    const { username, email, password, pays} = this.form;
  
    console.log(pays)
    this.authService.registerJury(username, email, password, pays).subscribe({
      next: data => {
        console.log(data);
        
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        if(this.isSuccessful == true){
          Swal.fire({
            title: username,
        text: "Ajouter avec succès ?",
        icon: 'success',

          })
          
          
        }
        window.location.reload();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
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
          this.serviceJury.deleteUserById(id).subscribe(() => {});
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
