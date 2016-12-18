import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AboutComponent } from './about.component';
import { DataComponent, ChildDataComponent } from './data.component';
import { TrainDataSource, CarDataSource } from './data.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    AboutComponent
  ],
  declarations: [
    AboutComponent,
    DataComponent,
    ChildDataComponent
  ],
  providers: [
    {
      provide: 'DataSource',
      useClass: TrainDataSource,
      multi: true
    },
    {
      provide: 'DataSource',
      useClass: CarDataSource,
      multi: true
    }
  ],
})
export class AboutModule { }
