import { Component, OnInit } from '@angular/core';
import { NamesService } from '../names.service';

@Component({
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  data: string[];

  constructor(private namesService: NamesService) {}

  ngOnInit() {
    this.namesService.get().then(data => {
      this.data = data;
    });
  }

}
