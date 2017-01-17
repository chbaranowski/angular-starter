import { KeyboardEvent, MouseEvent } from '@angular/platform-browser/src/facade/browser';
import { Component } from '@angular/core';

@Component({
  templateUrl: './binding.component.html'
})
export class BindingComponent {

  data = {
    lastname: 'Baranowski',
    counterValue: 0,
    pos: {
      x: 0,
      y: 0
    },
    text: ''
  };

  get counter() {
    return this.data.counterValue;
  }

  set counter(value) {
    this.data.counterValue = value;
  }

  decrement() {
    this.counter--;
  }

  increment() {
    this.counter++;
  }

  mousemove(event: MouseEvent) {
    this.data.pos.x = event.pageX;
    this.data.pos.y = event.pageY;
  }

  keyup(event: KeyboardEvent) {
    this.data.text += event.key;
  }

}
