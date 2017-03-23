import { Component, ViewChild, ElementRef, Input } from '@angular/core';

/**
 * Angular component to render a div with a background css class. Content of the div is the name of the
 * class and the  computed RGB and HEX color style values.
 */
@Component({
  selector: 'cb-color',
  template: `<div [ngClass]="'bg-'+name" #colorElement></div>`
})
export class ColorComponent {

  @Input() name: string;

  @ViewChild('colorElement') element: ElementRef;

  hexDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  // After rendering we can ask the browser for the background
  ngAfterViewChecked() {
    const colorRGB = window.getComputedStyle(this.element.nativeElement, null).getPropertyValue('background-color');
    const colorHEX = this.rgb2hex(colorRGB);
    this.element.nativeElement.innerHTML = `${this.name} <br> ${colorRGB} <br> ${colorHEX}`;
  }

  rgb2hex(rgb: string) {
    const tmp = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return '#' + this.hex(tmp[1]) + this.hex(tmp[2]) + this.hex(tmp[3]);
  }

  hex(x: any) {
    return isNaN(x) ? '00' : this.hexDigits[(x - x % 16) / 16] + this.hexDigits[x % 16];
  }

}
