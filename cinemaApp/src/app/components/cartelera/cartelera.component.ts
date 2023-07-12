import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.scss']
})
export class CarteleraComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

  leftControl(){
    const container: HTMLElement | null  = document.getElementById('imagenes')

    if(container !== null){
      container.style.backgroundColor = 'blue'
      container.scrollLeft -=275;

    }

  }

  rightControl(){
    const container: HTMLElement | null  = document.getElementById('imagenes')

    if(container !== null){
      container.style.backgroundColor = 'green'
      container.scrollLeft +=275;
    }

  }
}
