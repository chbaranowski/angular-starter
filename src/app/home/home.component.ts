import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
    console.log('Create Home Component');
  }

  ngOnDestroy(): void {
    console.log('Destroy Home Component');
  }

}