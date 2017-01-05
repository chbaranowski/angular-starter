import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'content-child-routes',
  templateUrl: './contentchild.component.html'
})
export class ContentChildComponent {

  private router: Router;

	constructor($router: Router) {
		this.router = $router;
	}

}