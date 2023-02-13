import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultatModel } from 'src/app/Models/resultat-model';
import { ProjetService } from 'src/app/Services/projet.service';
import { ResultatServiceService } from 'src/app/Services/resultat-service.service';


@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {

  // @Input() List!: Array<ResultatModel>;
  MOI=1234;

  public Total=0;
  public MaxHeight= 160;
 



  allResultat:any
  allProject:any
  nomProject:any
  idEvents:any
  premier !: number;

  constructor(
    private serviceResultat: ResultatServiceService,
    private projetService: ProjetService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.idEvents = this.route.snapshot.params['idEvents'] 
    this.serviceResultat.getResultatsByIdEvents(this.idEvents).subscribe(data =>{
      this.allResultat = data
      this.premier=this.allResultat[1],
      console.log(this.allResultat)

      this.projetService.getProjetsByIdEvents(this.idEvents).subscribe(data =>{
        this.allProject = data
        this.nomProject = data.libelle
        console.log(this.allProject)
      })
    })

    this.MontarGrafico();
  }

  MontarGrafico(){
    this.List.forEach(element  => {
      this.Total += element.Valeur;
    });

    this.List.forEach(element => {
      console.log("mes ",this.premier)

      element.taille = Math.round((element.Valeur*this.MaxHeight)/this.Total) + '%';
    });
  }

  public List: Array<ResultatModel> = [
    {Valeur: 2, couleur:'#498B94', taille:'', nom:'Projet1'},
    {Valeur: 1, couleur:'#F8C622', taille:'', nom:'Projet2'},
    {Valeur: 1, couleur:'#747474', taille:'', nom:'Projet3'},
    {Valeur: 1, couleur:'#EC972D', taille:'', nom:'Projet4'},
  ];
}
