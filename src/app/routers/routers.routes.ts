import { Routes } from '@angular/router';
import { RoutersComponent } from './routers.component';
import { ContentModule } from './content/content.module';
import { MenuRoute } from '../app.routes';

export const routersRoutes: Routes = [
  {
    path: '',
    redirectTo: 'routers/list',
    pathMatch: 'full'
  },
  {
    path: 'routers',
    redirectTo: 'routers/list',
    pathMatch: 'full'
  },
  <MenuRoute> {
    path: 'routers',
    component: RoutersComponent,
    loadChildren: () => ContentModule,
    nav: true
  },
];