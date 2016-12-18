import { Data } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

export interface DataSource {

  readonly name : string

  getData() : string[]

}

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

@Injectable()
export class CarDataSource implements DataSource {

  name = 'car';

  getData() {
    return ['VW', 'Audi', 'BMW'];
  }

}

@Injectable()
export class TrainDataSource implements DataSource {

  name = 'train';

  getData() {
    return ['ICE', 'TCW']
  }

}
