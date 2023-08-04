import { Component, OnInit } from '@angular/core';
import billboardData from '../../../assets/data/cartelera.json';
import coomingSoonData from '../../../assets/data/proximamente.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  hola: string = 'pruebaaaaa'
  coomingSoon = coomingSoonData;
  billboard = billboardData;



  constructor() { }

  ngOnInit(): void {
  }

}
