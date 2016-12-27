import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { DataSourceComponent } from './datasource.component';
import { ChildDataViewerComponent, DataViewerComponent } from './dataviewer.component';
import { TrainDataSource, CarDataSource, DATA_SOURCE } from './datasource.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    DataSourceComponent
  ],
  declarations: [
    DataSourceComponent,
    DataViewerComponent,
    ChildDataViewerComponent
  ],
  providers: [
    {
      provide: DATA_SOURCE,
      useClass: TrainDataSource,
      multi: true
    },
    {
      provide: DATA_SOURCE,
      useClass: CarDataSource,
      multi: true
    }
  ],
})
export class DataSourceModule { }
