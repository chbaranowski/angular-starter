import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MenuRoute } from '../app.routes';

@Component({
  selector: 'nav',
  template: `
  <div class="list-group">
      <a  class="list-group-item" 
          *ngFor="let item of navItems" 
          [routerLinkActive]="['active']" 
          [routerLink]="[item.path]">
          {{item.path}}
      </a>
  </div>
  `
})
export class NavComponent implements OnInit {
  
  navItems: Route[]

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.navItems = this.router.config.filter(item => (<MenuRoute> item).nav);
  }

}