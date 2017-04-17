import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DataSource, DataSourceService, DATA_SOURCE } from './datasource.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  templateUrl: './datasource.component.html',
  providers: [DataSourceService]
})
export class DataSourceComponent implements OnInit, OnDestroy {

  selectedDataSource: string;

  dataSourceTypeName: string;

  dataSourceChangeSubscription: Subscription;

  constructor(
    @Inject(DATA_SOURCE)
    public dataSources: DataSource[],
    private dataSourceService: DataSourceService) {
      this.selectedDataSource = dataSources[0].name;
  }

  ngOnInit(): void {
    this.dataSourceChangeSubscription = this.dataSourceService.dataSourceChanged$.subscribe((dataSource) => {
      this.dataSourceTypeName = dataSource.constructor.name;
    });
  }

  ngOnDestroy(): void {
    this.dataSourceChangeSubscription.unsubscribe();
  }

}
