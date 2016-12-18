import { CommonModule }  from '@angular/common';
import { NgModule } from '@angular/core';

import { ContentComponent } from './content.component';
import { ContentRoutesModule } from './content.routes';
import { TableComponent} from './table.component';
import { ListComponent} from './list.component';


@NgModule({
  imports: [
    CommonModule,
    ContentRoutesModule
  ],
  declarations: [
    ContentComponent,
    TableComponent,
    ListComponent
  ], 
  exports: [
    ContentComponent,
  ]
})
export class ContentModule {
}
