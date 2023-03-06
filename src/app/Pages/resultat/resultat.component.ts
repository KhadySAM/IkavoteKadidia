import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultatModel } from 'src/app/Models/resultat-model';
import { ResultatServiceService } from 'src/app/Services/resultat-service.service';


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



  constructor(
    private resultatService: ResultatServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {


    this.MontarGrafico();
    
  }

  public List: Array<ResultatModel> = [];

  MontarGrafico(){
    this.idEvents = this.route.snapshot.params['idEvents']
    this.resultatService.getResultaByIdEvents(this.idEvents).subscribe(data =>{
      this.allProject = data;

      console.log(this.allProject)
    
      this.List = this.allProject.map((element: any) => {

       
        return {
       
          Valeur: element.noteFinal,
          couleur: '#EC972D',
          taille: '',
        
          nom: element.projets.libelle
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
