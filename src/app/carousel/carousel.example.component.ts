import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <h2>Animations Example</h2>
  <carousel [images]="images"></carousel>
  `
})
export class CarouselExampleComponent {

  images = [
    { url: require('./../../images/emilycampbell.jpg').toString(), title: 'emily campbell' },
    { url: require('./../../images/kai-oberhauser.jpg').toString(), title: 'kai oberhauser' },
    { url: require('./../../images/maxheaaauki-vincent-guth.jpg').toString(), title: 'maxheaaauki vincent guth' },
    { url: require('./../../images/kai-oberhauser.jpg').toString(), title: 'kai oberhauser' },
  ];

}