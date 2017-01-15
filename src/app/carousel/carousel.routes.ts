import { MenuRoutes } from '../app.routes';
import { CarouselExampleComponent } from './carousel.example.component';

export const carouselRoutes: MenuRoutes = [
  { 
    path: 'carousel',  
    component: CarouselExampleComponent, 
    nav: true
  }
];