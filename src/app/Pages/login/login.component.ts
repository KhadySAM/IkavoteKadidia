import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/_services/auth.service';  
import { StorageService } from 'src/app/Services/_services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private route: Router) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        this.roles = this.storageService.getUser().roles;

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        if(this.roles[0]=="ADMIN"){
          this.route.navigate(['dashboard/jury']).then(()=>{
            setTimeout(() => {
              location.reload();
            }, 100);
          });
          
        }else if(this.roles[0]=="SUPERADMIN"){
          this.route.navigate(['dashboard/pays']).then(()=>{
            setTimeout(() => {
              location.reload();
            }, 100);
          });
        }

      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}