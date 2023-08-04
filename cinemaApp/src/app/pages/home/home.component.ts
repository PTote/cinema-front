import { Component, OnInit } from '@angular/core';
import { EIdCine } from 'src/app/enum/id-ubicationCine.enum';
import { IMovieData, IUbicationsCinema } from 'src/app/models/interface-data.interface';
import billboardData from '../../../assets/data/cartelera.json';
import coomingSoonData from '../../../assets/data/proximamente.json';
import ubicationsCinemaData from '../../../assets/data/ubications.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  coomingSoon: IMovieData[] = coomingSoonData;
  billboard: IMovieData[] = billboardData;
  cinemaData: IUbicationsCinema[] = ubicationsCinemaData;
  cineArr: string[] = []
  cineUbication: string = '';
  cineNameActive: boolean = true;
  cineName: string[] = [];




  constructor() { }

  ngOnInit(): void {
  }



  selectUbications() {

    (this.cineUbication) ? this.cineNameActive = false : this.cineNameActive = true;
    this.cineName = [];

    switch (this.cineUbication) {
      case EIdCine.GUATEMALA:

        this.cinemaData.forEach(cine => {
          if (cine.ubication === 'Guatemala') {
            this.cineName = cine.cinemaName
          };
        });

        break;

      case EIdCine.PETEN:

        this.cinemaData.forEach(cine => {
          if (cine.ubication === 'Petén') {
            this.cineName = cine.cinemaName
          };
        });
        break;

      case EIdCine.QUETZALTENANGO:

        this.cinemaData.forEach(cine => {
          if (cine.ubication === 'Quetzaltenango') {
            this.cineName = cine.cinemaName
          };
        });
        break;

      default:
        this.cineName = ['Selecciona un cine']
        break;
    }


  }

}
