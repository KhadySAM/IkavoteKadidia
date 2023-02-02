import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/_services/auth.service';
import { StorageService } from 'src/app/Services/_services/storage.service';

@Component({
  selector: 'app-dashboardadmin',
  templateUrl: './dashboardadmin.component.html',
  styleUrls: ['./dashboardadmin.component.css']
})
export class DashboardadminComponent implements OnInit {

//   //Mes attributs pour l'authentification
//   form: any = {
//     usernam: null,
//     password: null
//   };
//   isLoggedIn = false;
//   isLoginFailed = false;
//   errorMessage = '';
//   roles: string[] = [];
//   username:any

//   constructor(private authService: AuthService, private storageService: StorageService, private route: Router) { }

//   ngOnInit(): void {
//     if (this.storageService.isLoggedIn()) {
//       this.isLoggedIn = true;
//       this.username = this.storageService.getUser().username;
     
//     }
//   }

//   onSubmit(): void {
//     const { username, password } = this.form;

//     this.authService.login(username, password).subscribe({
//       next: data => {
//         this.storageService.saveUser(data);

//         this.isLoginFailed = false;
//         this.isLoggedIn = true;

        
    

//       this.route.navigate(['/dashboard/personnels']).then(()=>{
//         setTimeout(() => {
//           location.reload();
//         }, 100);
//       });
//       this.roles = this.storageService.getUser().roles;

//       },
//       error: err => {
//         this.errorMessage = err.error.message;
//         this.isLoginFailed = true;
        
//       }
//     });
//   }

//   reloadPage(): void {
//    window.location.reload();

//   }
// }


  currentUser: any;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
  }
}

