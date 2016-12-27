import { Component } from '@angular/core';

@Component({
  templateUrl: './pipes.component.html'
})
export class PipesComponent {

  data = {
    birthday: new Date(1981, 10, 26),
    name: 'Baranowski',
    age: 35
  };

}
