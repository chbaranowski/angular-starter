import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'carousel.example.component.html'
})
export class CarouselExampleComponent {

  images = [
    { url: require('./../../images/emilycampbell.jpg').toString(), title: 'emily campbell' },
    { url: require('./../../images/kai-oberhauser.jpg').toString(), title: 'kai oberhauser' },
    { url: require('./../../images/maxheaaauki-vincent-guth.jpg').toString(), title: 'maxheaaauki vincent guth' },
    { url: require('./../../images/kai-oberhauser.jpg').toString(), title: 'kai oberhauser' },
  ];

}