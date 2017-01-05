import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { NamesService } from './names.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  template: `
<div [hidden]="name.valid || name.pristine" class="alert alert-danger">
  Name is required.
</div>
<form (ngSubmit)="onSubmit()" #nameForm="ngForm">
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" class="form-control" id="name" 
            [(ngModel)]="selectedName" 
            name="name" 
            required
            #name="ngModel">
  </div>
  <button type="submit" class="btn btn-primary" [disabled]="!nameForm.form.valid">Save</button>
  <button type="reset"  class="btn btn-default" (click)="onCancel()" >Cancel</button>
</form>
`,
  styles:[`
    .ng-valid[required], .ng-valid.required  {
      border-left: 5px solid #42A948; /* green */
    }

    .ng-invalid:not(form)  {
      border-left: 5px solid #a94442; /* red */
    }
  `]
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