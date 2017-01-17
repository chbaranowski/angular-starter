import { Injectable } from '@angular/core';
import { DataSource } from '../datasource.service';

@Injectable()
export class InternetDataSource implements DataSource {

  name = 'www';

  getData() {
    return ['Google', 'Wikipedia', 'Facebook', 'Twitter'];
  }

}
