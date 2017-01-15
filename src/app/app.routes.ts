import { Routes, Route } from '@angular/router';
import { ConfigurationComponent } from './config/configuration.component';

/**
 * Extend Route class add a property nav,
 * to mark which routes are part of the navigation menu.
 */
export interface MenuRoute extends Route {
  nav?: boolean;
}

/**
 * Type to configure routes in the modules.
 */
export declare type MenuRoutes = MenuRoute[];

/**
 * App (root) routes configuration.
 */
export const appRoutes: MenuRoutes = [
  {
    path: 'config',
    component: ConfigurationComponent,
    nav: true
  }
];