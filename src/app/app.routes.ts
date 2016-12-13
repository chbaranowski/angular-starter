import { RouterModule, Routes } from '@angular/router';

import { HomeComponent} from './home/home.component';
import { AboutComponent} from './about/about.component';

import { ContentModule } from './content/content.module';
import { ListComponent } from './content/list.component';
import { TableComponent } from './content/table.component';
import { ContentRoutesModule } from './content/content.routes';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  { 
    path: 'home',  
    component: HomeComponent, 
    loadChildren: () => ContentModule,
 //   children: [
 //      { path: '', redirectTo: 'list', pathMatch: 'full'},
 //      { path: 'list',   component: ListComponent },
 //      { path: 'table',  component: TableComponent },
 //   ]
  },
  { 
    path: 'about',  
    component: AboutComponent, 
  },
];

export const AppRoutesModule = RouterModule.forRoot(routes);
