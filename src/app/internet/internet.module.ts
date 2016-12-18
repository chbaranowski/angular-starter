import { NgModule } from '@angular/core';
import { InternetDataSource } from './internet.component';

@NgModule({
  imports: [],
  exports: [
  ],
  declarations: [],
  providers: [
    {
      provide: 'DataSource',
      useClass: InternetDataSource,
      multi: true
    }
  ],
})
export class InternetModule { }
