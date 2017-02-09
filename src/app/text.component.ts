import { Component, Input } from '@angular/core';

@Component({
  selector: 'text',
  template: `<span [style.width]="key+'.width' | translate">{{ key+'.message' | translate }}</span>`
})
export class TextComponent  {

  @Input() key: string;

  constructor() { }
}
