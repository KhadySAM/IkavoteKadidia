import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit , Inject,  PLATFORM_ID } from '@angular/core';
import { AuthService } from 'src/app/Services/_services/auth.service'; 
import { StorageService } from 'src/app/Services/_services/storage.service'; 


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // les attributs pour l'authentification
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showJuryBoard = false;
  username?: string;
  Role!:any;

  isLoginFailed = false;
  showAdmin=false;
  showSuperAdmin=false;

  constructor( 
    @Inject(PLATFORM_ID) private platformId: object,
    private storageService: StorageService, private authService:AuthService,
    ) {}


  ngOnInit(): void {
    //la methode pour l'authenfication
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;
      this.Role= this.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showJuryBoard = this.roles.includes('ROLE_JURY');

      this.username = user.username;
    }
  }
  logout(): void {
    this.authService.logout1().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });

    


    if (isPlatformBrowser(this.platformId)) {
      const navMain = document.getElementById('navbarCollapse');
      if (navMain) {
        navMain.onclick = function onClick() {
          if (navMain) {
            navMain.classList.remove('show');
          }
        };
      }
    }
  }



}
