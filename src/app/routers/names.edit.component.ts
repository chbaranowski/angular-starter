import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { NamesService } from './names.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  templateUrl: 'names.edit.component.html'
})
export class NamesEditComponent implements OnInit {

  private selectedName: string;
  private index: number;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private service: NamesService
  ) { }

  ngOnInit() {
    this.route.params
      // returns the selected element by the index
      .switchMap(params => { 
        this.index = +params['index'];
        return this.service.getByIndex(this.index)
      })
      // subscribe for the selected name
      .subscribe(selectedName => this.selectedName = selectedName);
  }

  onSubmit() {
    this.service.update(this.index, this.selectedName);
    this.location.back();
  }

  onCancel() {
    this.location.back();
  }

}