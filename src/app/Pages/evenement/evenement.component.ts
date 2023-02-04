import { Component, OnInit } from '@angular/core';
import { EvenementService } from 'src/app/Services/evenement.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

  mesevents: any
  totalEventLength = 0;
  p : number = 1;

  

  constructor(private serviceEvents: EvenementService) { }

  ngOnInit(): void {

    this.serviceEvents.getAllEvents().subscribe(data =>{
      this.mesevents = data;
      console.log(this.mesevents);

      this.totalEventLength = data.data.length

      console.log(this.totalEventLength)
    });
  }

}
