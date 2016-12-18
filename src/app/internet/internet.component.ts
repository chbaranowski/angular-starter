import { Injectable } from '@angular/core';
import { DataSource } from '../about/data.service';

@Injectable()
export class InternetDataSource implements DataSource {

  name = 'www';

  getData() {
    return ['Google', 'Wikipedia', 'Facebook', 'Twitter'];
  }

}