import { fdatasync, fdatasyncSync } from 'fs';
import { dataSource } from '../datasource/datasource.service';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  template: `
      <h2>ngModel</h2>
      <div class="form-group">
        <label>Two-way Binding (Name)</label>
        <input type="text" class="form-control" [(ngModel)]="data.lastname">
      </div>
      <div class="form-group">
        <label>One-way Binding (Name)</label>
        <input class="form-control" type="text" [ngModel]="data.lastname">
      </div>
      <h2>(click) Binding</h2>
      <button class="btn" (click)="decrement()">-</button>
      <span>{{counter}}</span>
      <button class="btn" (click)="increment()">+</button>
      <p>counterValue = {{data.counterValue}}</p>

  `
})
export class BindingComponent {

  data = { 
    lastname: 'Baranowski',
    counterValue: 0
  }


  get counter() {
    return this.data.counterValue;
  }

  set counter(value) {
    this.data.counterValue = value;
  }

  decrement() {
    this.counter--;
  }

  increment() {
    this.counter++;
  }

}