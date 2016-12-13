import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, OnDestroy {

  private router: Router;

	constructor($router: Router) {
		this.router = $router;
	}

  ngOnInit(): void {
    console.log('Content created');
    //this.router.navigate(['./list']);
  }

  ngOnDestroy(): void {
    console.log('Content destroyed');
  }

}