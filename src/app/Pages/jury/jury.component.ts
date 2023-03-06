import { Component, OnInit } from '@angular/core';
import { JuryService } from 'src/app/Services/jury.service';
import { PaysService } from 'src/app/Services/pays.service';
import { PersonnelsService } from 'src/app/Services/personnels.service';
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
  nbreJury:any

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

  constructor(private serviceJury: JuryService,
    private authService: AuthService,
    private paysService: PaysService,
    private servicepersonnels: PersonnelsService) { }

  ngOnInit(): void {

    this.serviceJury.getTousJury().subscribe(data =>{
      this.mesjury = data;
      console.log(this.mesjury);
      this.nbreJury = data.length
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



  onSubmitJury(): void {
    const { username, email, password, pays} = this.form;
  
    console.log(pays)
    this.authService.registerJury(username, email, password, pays).subscribe({
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
//=================================== add Jury ===================================================
popAddJury(){
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
              this.authService.registerJury(username, email, password, pays).subscribe({
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


  //   popAddJury(){
      

  //     const { username, email, password, pays} = this.form;
  
  //    Swal.fire({
  //      position:'center',
  //      title: 'Voulez-vous ajouter cet jury ?',
  //      showDenyButton: true,
  //      showCancelButton: false,
  //      confirmButtonText: 'Oui',
  //      denyButtonText: 'Non',
  //      icon : 'success',
  //      denyButtonColor:'red',
  //      // cancelButtonText: 'Annuler',
  //      cancelButtonColor:'red',
  //      confirmButtonColor: 'green',
  //      heightAuto: false,
  //    }).then((result) => {
  //      /* Read more about isConfirmed, isDenied below */
  //      if (result.isConfirmed) {
  //        //Swal.fire('Saved!', '', 'success');
  //        this.authService.registerJury(username, email, password, pays).subscribe({
  //         next: data => {
  //           console.log(data);
            
  //           this.isSuccessful = true;
  //           this.isSignUpFailed = false;
  //         },
  //         error: err => {
  //           this.errorMessage = err.error.message;
  //           this.isSignUpFailed = true;
  //         }
  //        })

  //        window.location.reload();
    
  //      } else if (result.isDenied) {
  //        //Swal.fire('Changes are not saved', '', 'info');
  //      //  this.route.navigate(['tirage'])
  //      }
  //    });
   
  //     //  window.location.reload();
   
  //  }

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
