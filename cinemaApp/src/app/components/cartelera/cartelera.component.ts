import { Component, Input, OnInit } from '@angular/core';
import { IMovieData } from 'src/app/models/interface-data.interface';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.scss']
})
export class CarteleraComponent implements OnInit {

  @Input() arrMovies: IMovieData[] = [];
  @Input() nameContainer: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  leftControl() {

    console.log(this.nameContainer);

    const container: HTMLElement | null = document.getElementById(this.nameContainer)

    if (container !== null) {
      container.scrollLeft -= 275;
    }

  }

  rightControl() {
    const container: HTMLElement | null = document.getElementById(this.nameContainer)

    if (container !== null) {
      container.scrollLeft += 275;
    }

  }
}
