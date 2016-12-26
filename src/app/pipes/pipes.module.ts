import { PipesComponent, SimpleDatePipe } from './pipes.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule
  ],
  exports: [],
  declarations: [
    PipesComponent, 
    SimpleDatePipe
  ],
  providers: [],
})
export class PipesModule { }
