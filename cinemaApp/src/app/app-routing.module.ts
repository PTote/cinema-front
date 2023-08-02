import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutomaticSliderComponent } from './components/automatic-slider/automatic-slider.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { PromotionsComponent } from './pages/promotions/promotions.component';
import { SessionComponent } from './pages/session/session.component';

const routes: Routes = [

{
  path: '',
  component: HomeComponent
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'promotions',
  component: PromotionsComponent
},
{
  path: 'locations',
  component: LocationsComponent
},
{
  path: 'contact',
  component: ContactComponent
},
{
  path: 'session',
  component: SessionComponent
},
{
  path: 'slider',
  component: AutomaticSliderComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
