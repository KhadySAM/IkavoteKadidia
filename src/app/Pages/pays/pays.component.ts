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

// ============================================= suprime pays =======================

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
      Swal.fire(
        'Supprimer!',
        'Pays supprimé avec succès'
      );
    });

    }
  });

}


}
