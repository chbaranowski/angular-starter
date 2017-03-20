import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    HttpModule,
    BrowserModule,
    MaterialModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
