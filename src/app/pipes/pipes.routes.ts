import { Routes } from '@angular/router';
import { MenuRoute } from '../app.routes';
import { PipesComponent } from './pipes.component';

export const pipesRoutes: Routes = [
  <MenuRoute> { 
    path: 'pipes',  
    component: PipesComponent, 
    nav: true
  },
 ];