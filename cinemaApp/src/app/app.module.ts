import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutomaticSliderComponent } from './components/automatic-slider/automatic-slider.component';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImageHeaderComponent } from './components/image-header/image-header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { PromotionsComponent } from './pages/promotions/promotions.component';
import { SessionComponent } from './pages/session/session.component';
import { LoaderComponent } from './components/loader/loader.component';

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
    AutomaticSliderComponent,
    FooterComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
