import { Component, Input, OnInit, Inject } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

import { DataSource, DataSourceService } from './data.service';

import { Injectable } from '@angular/core';

@Component({
  selector: 'data-viewer',
  template: `
    <div class="form-group">
      <label>Selected Data Source Name:</label>
      <input class="form-control" type="text" placeholder="{{dataSourceService.dataSource.name}}" readonly>
    </div>

    <data-viewer-details></data-viewer-details>`,
  providers: [DataSourceService]
})
export class DataComponent implements OnInit {

  constructor(@Inject('DataSource') 
              private dataSourceInjected: DataSource[], 
              private dataSourceService: DataSourceService) {}

  ngOnInit(): void {
  }

  @Input('dataSource') set dataSourceName(dataSourceName : string) {
    var dataSource = this.dataSourceInjected
      .find(dataSource => dataSource.name === dataSourceName)
    if(!dataSource) {
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
export class ChildDataComponent implements OnInit {

  data: string[];

  constructor(private dataSourceService: DataSourceService) { }

  ngOnInit(): void {
    this.data = this.dataSourceService.dataSource.getData();
    this.dataSourceService.dataSourceChanged$.subscribe(dataSource => {
      this.data = dataSource.getData();
    });
  }
  
}
