import { Component, OnInit } from '@angular/core';

@Component({
  template: `
<h2>SVG Bindings</h2>
<div class="form-group">
  <label>Radius</label>
  <input type="number" class="form-control" [(ngModel)]="radius">
</div>
<div class="form-group">
  <label>Text</label>
  <input type="text" class="form-control" [(ngModel)]="text">
</div>

<svg>  
  <circle [attr.r]="radius" cx="50" cy="50" fill="blue">
  </circle>  
  <text x="100" y="50" font-size="35">
      {{text}}
  </text>  
</svg>`
})
export class SvgComponent {
  radius = 50;
  text = '';
}
