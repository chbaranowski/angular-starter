import { HighlightComponent } from './highlight.directive';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BindingComponent } from './binding.component';
import { bindingRoutes } from './binding.routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forChild(bindingRoutes)
  ],
  exports: [
    BindingComponent,
    RouterModule
  ],
  declarations: [
    BindingComponent,
    HighlightComponent
  ],
  providers: [],
})
export class BindingModule { }
