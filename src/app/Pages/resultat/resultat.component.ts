import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultatModel } from 'src/app/Models/resultat-model';
import { ProjetService } from 'src/app/Services/projet.service';


@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {



  public Total=0;
  public MaxHeight= 160;


  allProject:any
  nomProject:any
  idEvents:any
  premier !: number;


  constructor(
    private projetService: ProjetService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.MontarGrafico();
    
  }

  public List: Array<ResultatModel> = [];

  MontarGrafico(){
    this.idEvents = this.route.snapshot.params['idEvents']
    this.projetService.getProjetsByIdEvents(this.idEvents).subscribe(data =>{
      this.allProject = data;
    
      this.List = this.allProject.map((element: any) => {

        console.log(this.allProject)
        return {
          Valeur: element.moyTotal,
          couleur: '#EC972D',
          taille: '',
          nom: element.libelle
        }
      });
      
      this.Total = 0;
      this.List.forEach(element  => {
        this.Total += element.Valeur;
      });
    
      this.List.forEach(element => {
        element.taille = Math.round((element.Valeur*this.MaxHeight)/this.Total) + '%';
      });
    });
  }
 

}
