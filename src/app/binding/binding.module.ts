import { NgModule } from '@angular/core';
import { BindingComponent } from './binding.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    BindingComponent
  ],
  declarations: [
    BindingComponent
  ],
  providers: [],
})
export class BindingModule { }
