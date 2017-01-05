import { Routes } from '@angular/router';
import { MenuRoute } from '../app.routes';
import { DataSourceComponent } from './datasource.component';

export const multiProvidersRoutes: Routes = [
  <MenuRoute> { 
    path: 'multiproviders',  
    component: DataSourceComponent, 
    nav: true
  },
];