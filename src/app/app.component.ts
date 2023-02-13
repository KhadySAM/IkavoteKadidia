import { Component } from '@angular/core';
import { ResultatModel } from './Models/resultat-model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ikavoteodk';

  public Animals: Array<ResultatModel> = [
    {Valeur: 350, couleur:'#498B94', taille:'', nom:'Monkeys'},
    {Valeur: 2000, couleur:'#F8C622', taille:'', nom:'Giraffes'},
    {Valeur: 1000, couleur:'#747474', taille:'', nom:'Lions'},
    {Valeur: 500, couleur:'#EC972D', taille:'', nom:'Tigers'},
  ];
}
