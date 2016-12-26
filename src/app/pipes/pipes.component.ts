import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'simpleDate' })
export class SimpleDatePipe implements PipeTransform {

  public transform(value: Date, args: any[]): any {
    return `${value.getUTCDate() + 1}.${value.getUTCMonth() + 1}.${value.getUTCFullYear()}`;
  }

}

@Component({
  template: `
    <p>My birthday <span class="label label-info">{{ data.birthday | simpleDate}}</span></p>
    <p>Data as JSON string:</p><pre>{{ data | json | uppercase}}</pre>
  `,
})
export class PipesComponent {

  data = {
    birthday: new Date(1981, 10, 26),
    name: 'Baranowski',
    age: 35
  };

}
