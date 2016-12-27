import { Subscription } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Component, Inject, Input, OnDestroy, OnInit, Injectable } from '@angular/core';

import { DataSource, DataSourceService, DATA_SOURCE } from './datasource.service';


@Component({
  selector: 'data-viewer',
  template: `
    <div class="form-group">
      <label>Selected Data Source Name:</label>
      <input class="form-control" type="text" placeholder="{{dataSourceService.dataSource.name}}" readonly>
    </div>

    <data-viewer-details></data-viewer-details>`
})
export class DataViewerComponent {

  constructor( @Inject(DATA_SOURCE)
  private dataSourceInjected: DataSource[],
    private dataSourceService: DataSourceService) { }

  @Input('dataSource') set dataSourceName(dataSourceName: string) {
    var dataSource = this.dataSourceInjected
      .find(dataSource => dataSource.name === dataSourceName)
    if (!dataSource) {
      throw new Error(`No data source service configured for name ${this.dataSourceName}`);
    }
    this.dataSourceService.selectDataSource(dataSource);
  }

}

@Component({
  selector: 'data-viewer-details',
  template: `<ul class="list-group">
              <li class="list-group-item" *ngFor="let value of data">{{value}}</li>
            </ul>`
})
export class ChildDataViewerComponent implements OnInit, OnDestroy {

  data: string[];

  subscription: Subscription;

  constructor(private dataSourceService: DataSourceService) { }

  ngOnInit(): void {
    this.data = this.dataSourceService.dataSource.getData();
    this.subscription = this.dataSourceService.dataSourceChanged$.subscribe(dataSource => {
      this.data = dataSource.getData();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
