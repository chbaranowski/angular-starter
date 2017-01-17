import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { RouterModule } from '@angular/router';

import { contentRoutes } from './content.routes';
import { TableComponent} from './table.component';
import { ListComponent } from './list.component';
import { ContentChildComponent } from './contentchild.component';
import { ContentNamedComponent } from './contentnamed.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(contentRoutes)
  ],
  declarations: [
    TableComponent,
    ListComponent,
    ContentChildComponent,
    ContentNamedComponent,
],
  exports: [
    ContentChildComponent,
    ContentNamedComponent,
    RouterModule
  ],
  providers: [
  ]
})
export class ContentModule {
}
