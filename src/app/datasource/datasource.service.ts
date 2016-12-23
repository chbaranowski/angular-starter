import { Data } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

export const dataSource = 'DataSource'

// Example interface for a data source
export interface DataSource {

  readonly name : string;

  getData() : string[];

}

// Example data source for cars
@Injectable()
export class CarDataSource implements DataSource {

  name = 'car';

  getData() {
    return ['VW', 'Audi', 'BMW'];
  }

}

// Example data source for trains
@Injectable()
export class TrainDataSource implements DataSource {

  name = 'train';

  getData() {
    return ['ICE', 'TCW']
  }

}

// service to get a selected data source in a component and in the child components
@Injectable()
export class DataSourceService {
  
  dataSource: DataSource;
  
  private dataSourceSelectedSource = new Subject<DataSource>();

  dataSourceChanged$ = this.dataSourceSelectedSource.asObservable();

  selectDataSource(dataSource: DataSource) {
    this.dataSourceSelectedSource.next(dataSource);
    this.dataSource = dataSource;
  }

}
