import { NgModule } from '@angular/core';
import { InternetDataSource } from './internet.component';
import { dataSource } from '../datasource/datasource.service';

@NgModule({
  imports: [],
  exports: [
  ],
  declarations: [],
  providers: [
    {
      provide: dataSource,
      useClass: InternetDataSource,
      multi: true
    }
  ],
})
export class InternetModule { }
