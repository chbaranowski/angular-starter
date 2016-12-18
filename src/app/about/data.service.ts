import { Data } from '@angular/router';
import { Injectable } from '@angular/core';

export interface DataSource {

  readonly name : string

  getData() : string[]

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