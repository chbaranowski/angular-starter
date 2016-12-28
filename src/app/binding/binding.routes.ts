import { Routes } from '@angular/router';
import { MenuRoute } from '../app.routes';
import { BindingComponent } from './binding.component';

export const bindingRoutes: Routes = [
  <MenuRoute> { 
    path: 'binding',  
    component: BindingComponent, 
    nav: true
  },
];