import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { I18nComponent } from './i18n.component';
import { i18nRoutes } from './i18n.routes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(i18nRoutes),
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    I18nComponent
  ],
  providers: [],
})
export class I18NModule { }
