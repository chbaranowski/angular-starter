import { Component } from '@angular/core';
import { NamesService } from '../names.service';

@Component({
  templateUrl: './list.component.html'
})
export class ListComponent {   

  private data: string[];

  constructor(
    private namesService: NamesService
  ) {}

  ngOnInit(): void {
    this.namesService.get().then(data => {
      this.data = data;
    });
  }
  
}