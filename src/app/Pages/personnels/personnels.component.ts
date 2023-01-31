import { Component, OnInit } from '@angular/core';
import { PersonnelsService } from 'src/app/Services/personnels.service';

@Component({
  selector: 'app-personnels',
  templateUrl: './personnels.component.html',
  styleUrls: ['./personnels.component.css']
})
export class PersonnelsComponent implements OnInit {

  mesusers : any;
  mesadmin : any;
  p : number = 1;
  userFilter : any={uti: ''};

  constructor(private servicepersonnels : PersonnelsService) { }

  ngOnInit(): void {

    this.servicepersonnels.getAll().subscribe(data => {
      return this.mesusers = data
      console.log(this.mesusers);
    });
  
    
  }
  

}
