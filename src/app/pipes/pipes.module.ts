import { PipesComponent } from './pipes.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleDatePipe } from './simpledate.pipe';

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
