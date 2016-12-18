import { DataComponent } from './data.component';
import { Component, Inject, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { DataSource, CarDataSource } from './data.service';

@Component({
  templateUrl: './about.component.html'
})
export class AboutComponent {

  constructor(private router: Router) {
  }

  clickAction() {
    this.router.navigate(['home']);
  }

}