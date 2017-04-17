import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'widget-b',
  templateUrl: './widget-b.component.html',
})
export class WidgetBComponent implements OnInit {

  @Input()
  num: number;

  constructor() { }

  ngOnInit() {
  }

}
