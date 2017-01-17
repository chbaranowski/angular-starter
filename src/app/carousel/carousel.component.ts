import { Component, transition, animate, trigger, state, style, Input } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
      trigger('imageState', [
      state('inactive', style({
        transform: 'translateX(100%)',
      })),
      state('active',   style({
        transform: 'translateX(0)',
      })),
      transition('inactive => active', animate('0.6s ease-in')),
      transition('active => inactive', animate('0.6s ease-out'))
    ])
  ]
})
export class CarouselComponent {

  /**
   * Example:
   * images = [
   *  { url: require('./../../images/emilycampbell.jpg').toString() },
   *  { url: require('./../../images/kai-oberhauser.jpg').toString() },
   *  { url: require('./../../images/maxheaaauki-vincent-guth.jpg').toString() },
   * ]
  */
  @Input() images: Image[];

  activeIndex = 0;

  next() {
    this.activeIndex = (this.images.length + this.activeIndex + 1) % this.images.length;
  }

  previous() {
    this.activeIndex = (this.images.length + this.activeIndex - 1) % this.images.length;
  }

}

export interface Image {
  url: String;
  title: String;
}
