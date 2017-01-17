import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'simpleDate' })
export class SimpleDatePipe implements PipeTransform {

  public transform(value: Date, args: any[]): any {
    return `${value.getUTCDate() + 1}.${value.getUTCMonth() + 1}.${value.getUTCFullYear()}`;
  }

}
