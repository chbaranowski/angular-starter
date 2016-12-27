import { NgModule } from '@angular/core';
import { InternetDataSource } from './internet.component';
import { DATA_SOURCE } from '../datasource.service';

@NgModule({
  imports: [],
  exports: [
  ],
  declarations: [],
  providers: [
    {
      provide: DATA_SOURCE,
      useClass: InternetDataSource,
      multi: true
    }
  ],
})
export class InternetModule { }
