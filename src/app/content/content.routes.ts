import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list.component';
import { TableComponent } from './table.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list',   component: ListComponent },
  { path: 'table',  component: TableComponent },
];

export const ContentRoutesModule = RouterModule.forChild(routes);
