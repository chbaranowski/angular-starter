import { DataSourceComponent } from './datasource/datasource.component';
import { RouterModule, Routes } from '@angular/router';

import { ContentModule } from './content/content.module';
import { ListComponent } from './content/list.component';
import { TableComponent } from './content/table.component';
import { ContentRoutesModule } from './content/content.routes';
import { RoutersComponent } from './routers/routers.component';

const routes: Routes = [
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
  { 
    path: 'routers',  
    component: RoutersComponent, 
    loadChildren: () => ContentModule
  },
  { 
    path: 'datasource',  
    component: DataSourceComponent, 
  },
];

export const AppRoutesModule = RouterModule.forRoot(routes);
