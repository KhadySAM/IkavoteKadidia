import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { Personnels } from 'src/app/Models/personnels';
import { PersonnelsService } from 'src/app/Services/personnels.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personnels',
  templateUrl: './personnels.component.html',
  styleUrls: ['./personnels.component.css']
})
export class PersonnelsComponent implements OnInit {

  ids=0;
  mesusers : any;
  mesadmin : any;
  
  p : number = 1;
  userFilter : any={user: ''};

  //add perso
  ObjetUser : Personnels = {
    username: '',
    email: '',
    password: '',
  }
 
   formulaire!: FormGroup
    contenu?:String;
  
    usernamePerso: any;
   id_user: any;


  constructor(private servicepersonnels : PersonnelsService, private formB: FormBuilder,private route:ActivatedRoute) { }

  ngOnInit(): void {
    
     this.servicepersonnels.getTousAdmin().subscribe(data =>{
      this.mesadmin = data;
      console.log(this.mesadmin);
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
}
