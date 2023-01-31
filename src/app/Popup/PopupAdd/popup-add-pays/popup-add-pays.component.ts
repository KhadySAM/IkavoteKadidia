import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaysModel } from 'src/app/Models/pays-model'; 
import { PaysService } from 'src/app/Services/pays.service';

@Component({
  selector: 'app-popup-add-pays',
  templateUrl: './popup-add-pays.component.html',
  styleUrls: ['./popup-add-pays.component.css']
})
export class PopupAddPaysComponent implements OnInit {

  ObjetPays : PaysModel = {
    id_pays: 0,
    nom: '',
    initiale:'',
    images:'',
    
  }

  formulaire!: FormGroup 
  fichier: any;
  
  contenu?:String;

  file: any;

  nomPays: any;
  images: any;
  initialePays: any;
  id_Pays: any;
  
  

  constructor(private paysService:PaysService,private formB: FormBuilder) { }

  ngOnInit(): void {

    this.formulaire = this.formB.group({
     
      nompays: ["", Validators.required],
      file: ["", Validators.required],
      initialepays: ["", Validators.required],

})

    console.log("Pays kadi :"+this.formulaire.value)
}

// ======================================= ICI ON AJOUTE UN PAYS ======================================

fileChang(event: any) {
  this.file = event.target.files[0]
  console.log(event)
}

CreerPays(){


this.nomPays = this.formulaire.get("nompays")!.value;
this.initialePays = this.formulaire.get("initialepays")!.value;
this.images = this.formulaire!.get("file")!.value;



console.log("ID: "+this.id_Pays+" Nom: " +this.nomPays+"Images: " +this.images+"Initiale: " +this.initialePays);

 this.paysService.PostPays(this.nomPays, this.initialePays, this.file).subscribe(
  data =>{
    const PaysEnregistrer = data
    console.log("================="+PaysEnregistrer)
  })
}

  }

  