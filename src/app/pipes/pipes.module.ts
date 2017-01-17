import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { PipesComponent } from './pipes.component';
import { SimpleDatePipe } from './simpledate.pipe';
import { pipesRoutes } from './pipes.routes';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(pipesRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    PipesComponent,
    SimpleDatePipe
],
  providers: [],
})
export class PipesModule { }
