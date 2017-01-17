import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightComponent implements OnInit {

  @Input('highlight') text: string;

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.element.nativeElement.innerText = this.text;
  }

}
