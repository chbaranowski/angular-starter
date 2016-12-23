import { Component, Inject, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSource, dataSource, DataSourceService } from './datasource.service';

@Component({
  templateUrl: './datasource.component.html',
  providers: [DataSourceService]
})
export class DataSourceComponent implements OnInit {

  selectedDataSource: string

  dataSourceTypeName: string

  constructor(
    @Inject(dataSource) private dataSources: DataSource[],
    private dataSourceService: DataSourceService) {
      this.selectedDataSource = dataSources[0].name;
  }

  ngOnInit(): void {
    this.dataSourceService.dataSourceChanged$.subscribe((dataSource) => {
      this.dataSourceTypeName = dataSource.constructor.name
    });
  }

}