import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

interface DashboardConfig {
  widgets?: string[];
}

@Component({
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  config: DashboardConfig = {};

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('/assets/dashboard-config.json').subscribe(res => {
      this.config = res.json();
    });
  }

}
