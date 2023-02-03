import { Component, OnInit } from '@angular/core';
import { JuryService } from 'src/app/Services/jury.service';

@Component({
  selector: 'app-jury',
  templateUrl: './jury.component.html',
  styleUrls: ['./jury.component.css']
})
export class JuryComponent implements OnInit {

  p : number = 1;
  userFilter : any={user: ''};
  mesjury : any;

  constructor(private serviceJury: JuryService) { }

  ngOnInit(): void {

    this.serviceJury.getTousJury().subscribe(data =>{
      this.mesjury = data;
      console.log(this.mesjury);
    });
  }

}
