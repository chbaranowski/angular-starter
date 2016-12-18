import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list.component';
import { TableComponent } from './table.component';

const ContentRoutes: Routes = [
  { path: 'list',   component: ListComponent },
  { path: 'table',  component: TableComponent },
];

export const ContentRoutesModule = RouterModule.forChild(ContentRoutes);