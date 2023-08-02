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

  leftControl() {
    const container: HTMLElement | null = document.getElementById('product-container')

    if (container !== null) {
      container.scrollLeft -= 275;
    }

  }

  rightControl() {
    const container: HTMLElement | null = document.getElementById('product-container')

    if (container !== null) {
      container.scrollLeft += 275;
    }

  }
}
