import { Component } from '@angular/core';

@Component({
  template: `
  <h1>Router Example</h1>
  <h4>Child routes in sub-component</h4>
  <content-child-routes></content-child-routes>`
})
export class ChildRoutersComponent {}

@Component({
  template: "Hello World"
})
export class NamedRoutersComponent {}
