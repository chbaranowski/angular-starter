import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  template: `
  <h1>Router Example</h1>
  <h4>Child routes in sub-component</h4>
  <content-child-routes></content-child-routes>`
})
export class ChildRoutersComponent {}

@Component({
  template: `
  <h1>Router Example</h1>
  <h4>Sub-component routes in named outlets</h4>
  <content-named-outlets></content-named-outlets>`
})
export class NamedRoutersComponent {}