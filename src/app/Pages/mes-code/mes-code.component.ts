import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CodeVotantServiceService } from 'src/app/Services/code-votant-service.service';
import { EvenementService } from 'src/app/Services/evenement.service';
import { SafeUrl } from '@angular/platform-browser';






@Component({
  selector: 'app-mes-code',
  templateUrl: './mes-code.component.html',
  styleUrls: ['./mes-code.component.css']
})
export class MesCodeComponent implements OnInit {

  url:SafeUrl = ''
  onCodeChange(url: SafeUrl) {
    console.log(url)
    this.url = url;
  }



  idEvents:any
  p:number=1
  allCodeVotant:any
  nbrCodeVotant:any
  allEvents:any
  libelleEvents:any

  constructor(
    private serviceCodeVotant: CodeVotantServiceService,
    private route: ActivatedRoute,
    private evenementService: EvenementService
  ) { }

  ngOnInit(): void {

    this.idEvents = this.route.snapshot.params['idEvents'] 
    this.serviceCodeVotant.getCodeVotantByEvents(this.idEvents).subscribe(data =>{
      this.allCodeVotant = data
      this.nbrCodeVotant = data.length
      
    })

    //:::::::::::::::::::::::::::::::::: get event ::::::::::::::::::::::
  

    this.evenementService.getEventsById(this.idEvents).subscribe(data =>{
      this.allEvents = data
      this.libelleEvents=data.libelle
      this.idEvents = data.id

      console.log(this.idEvents)
      
    });
  }
}





