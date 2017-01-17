import { Component, OnInit } from '@angular/core';
import { ActionService } from '../../action.service';
import { NamesService } from '../names.service';

@Component({
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {

  private data: string[];

  constructor(
    private namesService: NamesService,
    private actionService: ActionService
  ) {}

  ngOnInit() {
    this.namesService.get().then(data => {
      this.data = data;
    });
  }

  onEdit(index: number) {
    this.actionService.editName(index);
  }

  onDelete(index: number) {
    this.namesService.delete(index);
  }

}
