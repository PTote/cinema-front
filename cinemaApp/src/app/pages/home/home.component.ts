import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { EIdCine, EUbicationName } from 'src/app/enum/id-ubicationCine.enum';
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
  billboard: IMovieData[] = [];
  cinemaData: IUbicationsCinema[] = ubicationsCinemaData;
  cineName: string[] = [];
  defaultTitleBillboard: string = 'Nuestra cartelera';
  titleBillboard: string = '';
  searchForm!: FormGroup
  showLoader: boolean = false;
  moviesLessFive: boolean = false;
  noMatches: boolean = false;
  noMatchesMessage: string = '';


  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }


  createForm() {

    this.searchForm = this.formBuilder.group({
      ubications: [this.cinemaData.length > 0 ? this.cinemaData[0].id : ''],
      nameCine: [''],
      nameMovie: ['']
    })

    const initUbication: number = this.searchForm.get('ubications')?.value;
    this.selectCineByName(initUbication.toString());


    this.searchForm.get('ubications')?.valueChanges.subscribe((value) => {
      this.showLoader = true;

      setTimeout(() => {
        this.selectCineByName(value);
        this.showLoader = false;
      }, 1500);
    });

    this.searchByName()

  }

  submitForm() {
    this.searchByName()
  }

  selectCineByName(ubications: string) {


    this.cineName = [];

    switch (ubications) {
      case EIdCine.GUATEMALA:
        this.titleBillboard = `${this.defaultTitleBillboard} en ${EUbicationName.GUATEMALA}`;
        this.cinemaData.forEach(cine => {
          if (cine.ubication === EUbicationName.GUATEMALA) {
            this.cineName = cine.cinemaName
            this.moviesByUbication(cine.movies);
          };
        });

        break;

      case EIdCine.PETEN:
        this.titleBillboard = `${this.defaultTitleBillboard} en ${EUbicationName.PETEN}`;

        this.cinemaData.forEach(cine => {
          if (cine.ubication === EUbicationName.PETEN) {
            this.cineName = cine.cinemaName
            this.moviesByUbication(cine.movies)
          };
        });
        break;

      case EIdCine.QUETZALTENANGO:
        this.titleBillboard = `${this.defaultTitleBillboard} en ${EUbicationName.QUETZALTENANGO}`;

        this.cinemaData.forEach(cine => {
          if (cine.ubication === EUbicationName.QUETZALTENANGO) {
            this.cineName = cine.cinemaName
            this.moviesByUbication(cine.movies)
          };
        });
        break;

      default:
        this.cineName = ['Selecciona un cine']
        break;
    }


  }


  moviesByUbication(moviesTitle: string[]) {
    console.log('object');
    this.changeClassCarteleraContainer(moviesTitle);
    this.billboard = [];
    moviesTitle.forEach(title => {
      const titleFind = billboardData.find(movie => movie.title === title)
      if (titleFind) {
        this.billboard.push(titleFind);
      }
    });
  }

  changeClassCarteleraContainer(moviesTitle: string[] | IMovieData[]) {
    this.moviesLessFive = moviesTitle.length < 5;
  }

  searchByName() {
    this.searchForm.get('nameMovie')?.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((value: string) => {

        if (value !== '') {
          const filter = this.billboard.filter(movie => movie.title.toLowerCase().includes(value.toLowerCase()))

          if (filter.length > 0) {
            this.billboard = filter;
            this.noMatches = false;
            this.changeClassCarteleraContainer(filter);
            return;
          }

          this.noMatches = true;
          this.noMatchesMessage = `No se han encontrado incidencias para ${value}`;

        } else {
          const initUbication: number = this.searchForm.get('ubications')?.value;
          this.selectCineByName(initUbication.toString());
          this.noMatches = false;
          this.changeClassCarteleraContainer(this.billboard);
        }

      });


  }

}
