import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { DataSourceComponent } from './datasource.component';
import { ChildDataViewerComponent, DataViewerComponent } from './dataviewer.component';
import { TrainDataSource, CarDataSource, DATA_SOURCE } from './datasource.service';
import { multiProvidersRoutes } from './multiproviders.routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forChild(multiProvidersRoutes)
  ],
  exports: [
    DataSourceComponent,
    RouterModule
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
export class MultiProvidersModule { }
