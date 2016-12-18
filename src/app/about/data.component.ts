import { Component, Input, OnInit, Inject } from '@angular/core';
import { DataSource } from './data.service';

import { Injectable } from '@angular/core';

@Injectable()
class DataSourceService {
  
  selectedDataSource: DataSource;

  public getData() {
    return this.selectedDataSource.getData();
  }

}

@Component({
  selector: 'data-viewer',
  template: `
    <p>Selected DataSource Name: {{dataSourceName}}</p>
    <data-viewer-details></data-viewer-details>`,
  providers: [DataSourceService]
})
export class DataComponent implements OnInit {

  @Input('dataSource') dataSourceName: string;

  constructor(@Inject('DataSource') 
              private dataSourceInjected: DataSource[], 
              private dataSourceService: DataSourceService) {}

  ngOnInit(): void {
    // Select the dataSource for the component based on the name
    this.dataSourceService.selectedDataSource = this.dataSourceInjected
      .find(dataSource => dataSource.name === this.dataSourceName)
    if(!this.dataSourceService.selectedDataSource) {
      throw new Error(`No data source service configured for name ${this.dataSourceName}`);
    }
  }

}

@Component({
  selector: 'data-viewer-details',
  template: `<ul>
              <li *ngFor="let value of data">{{value}}</li>
            </ul>`
})
export class ChildDataComponent implements OnInit {

  data: string[];

  constructor(private dataSourceService: DataSourceService) { }

  ngOnInit(): void {
    this.data = this.dataSourceService.getData();
  }
  
}
