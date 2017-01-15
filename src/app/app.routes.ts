import { Routes, Route } from '@angular/router';
import { ConfigurationComponent } from './config/configuration.component';

export interface MenuRoute extends Route {
  nav?: boolean;
}

export declare type MenuRoutes = MenuRoute[];

export const appRoutes: MenuRoutes = [
  {
    path: 'config',
    component: ConfigurationComponent,
    nav: true
  }
];