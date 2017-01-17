import { MenuRoutes } from '../app.routes';
import { DataSourceComponent } from './datasource.component';

export const multiProvidersRoutes: MenuRoutes = [
  {
    path: 'multiproviders',
    component: DataSourceComponent,
    nav: true
  }
];
