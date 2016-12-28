import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContentModule } from './content/content.module';
import { RoutersComponent } from './routers.component';
import { routersRoutes } from './routers.routes';

@NgModule({
  imports: [
    ContentModule,
    RouterModule.forChild(routersRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    RoutersComponent
  ],
  providers: [],
})
export class RoutersModule { }
