import { Component } from '@angular/core';

@Component({
  templateUrl: 'carousel.example.component.html'
})
export class CarouselExampleComponent {

  images = [
    { url: '/assets/images/emilycampbell.jpg', title: 'emily campbell' },
    { url: '/assets/images/kai-oberhauser.jpg', title: 'kai oberhauser' },
    { url: '/assets/images/maxheaaauki-vincent-guth.jpg', title: 'maxheaaauki vincent guth' },
    { url: '/assets/images/kai-oberhauser.jpg', title: 'kai oberhauser' },
  ];

}
