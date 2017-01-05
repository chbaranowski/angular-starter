import { NamesEditComponent } from './names.edit.component';
import { Routes } from '@angular/router';
import { ContentModule } from './content/content.module';
import { MenuRoute } from '../app.routes';
import { ChildRoutersComponent, NamedRoutersComponent } from './routers.component';

export const routersRoutes: Routes = [
  {
    path: '',
    redirectTo: '/childrouters/list',
    pathMatch: 'full'
  },
  {
    path: 'childrouters',
    redirectTo: '/childrouters/list',
    pathMatch: 'full',
  },
  {
    path: 'namedrouters',
    redirectTo: '/namedrouters/(content:list)',
    pathMatch: 'full',
  },
  <MenuRoute> {
    path: 'childrouters',
    component: ChildRoutersComponent,
    loadChildren: () => ContentModule,
    nav: true
  },
  <MenuRoute> {
    path: 'namedrouters',
    component: NamedRoutersComponent,
    loadChildren: () => ContentModule,
    nav: true
  },
  {
    path: 'names/:index',
    component: NamesEditComponent
  },
];