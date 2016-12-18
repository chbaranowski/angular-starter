import { DataComponent } from './data.component';
import { Component, Inject, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { DataSource, CarDataSource } from './data.service';

@Component({
  templateUrl: './about.component.html'
})
export class AboutComponent {

  selectedDataSource: string

  constructor(private router: Router,
              @Inject('DataSource') 
              private dataSources: DataSource[]) {
      this.selectedDataSource = dataSources[0].name
  }

  clickAction() {
    this.router.navigate(['home']);
  }

}