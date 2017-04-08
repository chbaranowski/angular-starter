import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'i18n.component.html',
})
export class I18nComponent implements OnInit {

  emilycampbellImageUrl = '/assets/images/emilycampbell.jpg';

  teamSize = 0;

  gender = '';

  constructor() { }
  ngOnInit() { }
}
