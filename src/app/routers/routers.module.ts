import { NamesService } from './names.service';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChildRoutersComponent, NamedRoutersComponent } from './routers.component';
import { ContentModule } from './content/content.module';
import { routersRoutes } from './routers.routes';
import { NamesEditComponent } from './names.edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ContentModule,
    FormsModule,
    RouterModule.forChild(routersRoutes),
  ],
  exports: [
    RouterModule,
  ],
  declarations: [
    ChildRoutersComponent,
    NamedRoutersComponent,
    NamesEditComponent
  ],
  providers: [
    NamesService,
  ],
})
export class RoutersModule { }
