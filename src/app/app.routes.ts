import { BindingComponent } from './binding/binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { RouterModule, Routes } from '@angular/router';

import { RoutersComponent } from './routers/routers.component';
import { ContentModule } from './routers/content/content.module';
import { DataSourceComponent } from './multiproviders/datasource.component';

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
  { 
    path: 'pipes',  
    component: PipesComponent, 
  },
  { 
    path: 'binding',  
    component: BindingComponent, 
  },
];

export const AppRoutesModule = RouterModule.forRoot(routes);
