import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GridComponent } from './grid.component';
import { gridRoutes } from './grid.routes';

@NgModule({
  imports: [ 
    RouterModule.forChild(gridRoutes)
  ],
  exports: [ 
    RouterModule
  ],
  declarations: [
    GridComponent
  ],
  providers: [],
})
export class GridModule { }
