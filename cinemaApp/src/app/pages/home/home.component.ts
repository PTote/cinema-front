import { Component, OnInit } from '@angular/core';
import billboardData from '../../../assets/data/cartelera.json';
import coomingSoonData from '../../../assets/data/proximamente.json';
import ubicationsCinemaData from '../../../assets/data/ubications.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  hola: string = 'pruebaaaaa'
  coomingSoon = coomingSoonData;
  billboard = billboardData;
  ubicationsCinema = ubicationsCinemaData;



  constructor() { }

  ngOnInit(): void {
  }


  ubications(){



  }

}
