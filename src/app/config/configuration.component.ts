import { Component } from '@angular/core';
import { Configuration } from './configuration.service';

@Component({
  template: `
    <h2>Configuration</h2>
    <pre>{{ config | json }}</pre>
  `
})
export class ConfigurationComponent {
  constructor(private config: Configuration) { }
}
