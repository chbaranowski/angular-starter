import { Route } from '@angular/router';
import { MenuRoute } from '../app.routes';
import { DashboardComponent } from './dashboard.component';

/**
 * Type to configure routes in the modules.
 */
export declare type MenuRoutes = MenuRoute[];

/**
 * Dashboard (child) routes configuration.
 */
export const dashboardRoutes: MenuRoutes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    nav: true
  }
];
