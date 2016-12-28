import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-content',
  templateUrl: './content.component.html'
})
export class ContentComponent {

  private router: Router;

	constructor($router: Router) {
		this.router = $router;
	}

}