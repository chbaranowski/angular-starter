import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  stopSpinner() {
    console.log('stop spinner');
  }

  ngOnInit() {
  }

}
