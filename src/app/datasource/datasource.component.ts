import { Component, Inject, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { DataSource, dataSource } from './datasource.service';

@Component({
  templateUrl: './datasource.component.html'
})
export class DataSourceComponent {

  selectedDataSource: string

  constructor(@Inject(dataSource) private dataSources: DataSource[]) {
      this.selectedDataSource = dataSources[0].name;
  }



}