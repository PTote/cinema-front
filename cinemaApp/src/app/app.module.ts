import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { PromotionsComponent } from './pages/promotions/promotions.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SessionComponent } from './pages/session/session.component';
import { ImageHeaderComponent } from './components/image-header/image-header.component';
import { AutomaticSliderComponent } from './components/automatic-slider/automatic-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    CarteleraComponent,
    NavbarComponent,
    HomeComponent,
    PromotionsComponent,
    LocationsComponent,
    ContactComponent,
    SessionComponent,
    ImageHeaderComponent,
    AutomaticSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
