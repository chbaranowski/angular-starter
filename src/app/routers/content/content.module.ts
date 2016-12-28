import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { RouterModule } from '@angular/router';

import { contentRoutes } from './content.routes';
import { ContentComponent } from './content.component';
import { TableComponent} from './table.component';
import { ListComponent} from './list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(contentRoutes)
  ],
  declarations: [
    ContentComponent,
    TableComponent,
    ListComponent
  ], 
  exports: [
    ContentComponent,
    RouterModule
  ]
})
export class ContentModule {
}
