import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'i18n.component.html',
})
export class I18nComponent implements OnInit {

  emilycampbellImageUrl = require('./../../images/emilycampbell.jpg').toString();

  teamSize = 0;

  constructor() { }
  ngOnInit() { }
}
