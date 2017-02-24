import { SvgComponent } from './svg.component';
import { MenuRoutes } from '../app.routes';
import { BindingComponent } from './binding.component';

export const bindingRoutes: MenuRoutes = [
  {
    path: 'binding',
    component: BindingComponent,
    nav: true
  },
  {
    path: 'svg',
    component: SvgComponent,
    nav: true
  }
];
