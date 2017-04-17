import { Component, OnInit, Input, Injector } from '@angular/core';

@Component({
  selector: 'widget-a',
  templateUrl: './widget-a.component.html',
})
export class WidgetAComponent implements OnInit {

  @Input()
  query: string;

  ngOnInit() {
  }

}
