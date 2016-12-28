import { Routes, Route } from '@angular/router';

export interface MenuRoute extends Route {
  nav?: boolean;
}

export const appRoutes: Routes = [];