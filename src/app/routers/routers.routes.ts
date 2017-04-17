import { MenuRoutes } from '../app.routes';
import { NamesEditComponent } from './names.edit.component';
import { ContentModule } from './content/content.module';
import { ChildRoutersComponent, NamedRoutersComponent } from './routers.component';

export const routersRoutes: MenuRoutes = [
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
    path: 'childrouters',
    component: ChildRoutersComponent,
    //loadChildren: loadContentModule,
    nav: true
  },
  {
    path: 'namedrouters',
    component: NamedRoutersComponent,
    //loadChildren: loadContentModule,
    nav: true
  },
  {
    path: 'names/:index',
    component: NamesEditComponent
  }
];
