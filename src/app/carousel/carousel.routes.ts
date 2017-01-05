import { Routes } from '@angular/router';
import { MenuRoute } from '../app.routes';
import { CarouselExampleComponent } from './carousel.example.component';

export const carouselRoutes: Routes = [
  <MenuRoute> { 
    path: 'carousel',  
    component: CarouselExampleComponent, 
    nav: true
  },
];