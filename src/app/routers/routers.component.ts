import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  templateUrl: './routers.component.html',
  styleUrls: ['./routers.component.scss']
})
export class RoutersComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
    console.log('Create Home Component');
  }

  ngOnDestroy(): void {
    console.log('Destroy Home Component');
  }

}