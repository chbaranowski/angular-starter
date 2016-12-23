import { Component, Inject, Injector, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSource, dataSource, DataSourceService } from './datasource.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  templateUrl: './datasource.component.html',
  providers: [DataSourceService]
})
export class DataSourceComponent implements OnInit, OnDestroy {

  selectedDataSource: string

  dataSourceTypeName: string

  dataSourceChangeSubscription: Subscription

  constructor(
    @Inject(dataSource) private dataSources: DataSource[],
    private dataSourceService: DataSourceService) {
      this.selectedDataSource = dataSources[0].name;
  }

  ngOnInit(): void {
    this.dataSourceChangeSubscription = this.dataSourceService.dataSourceChanged$.subscribe((dataSource) => {
      this.dataSourceTypeName = dataSource.constructor.name
    });
  }

  ngOnDestroy(): void {
    this.dataSourceChangeSubscription.unsubscribe();
  }

}