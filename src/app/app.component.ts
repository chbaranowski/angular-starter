import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

import { MenuRoute } from './app.routes';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  navItems: Route[]

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.navItems = this.router.config.filter(item => (<MenuRoute> item).nav);
  }

}