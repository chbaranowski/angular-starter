import { BrowserModule }  from '@angular/platform-browser';
import { NgModule, ClassProvider, Injectable } from '@angular/core';

import { AppRoutesModule } from './app.routes';

import { AppComponent } from './app.component';

import { ContentModule } from './content/content.module';
import { InternetModule } from './internet/internet.module';
import { DataSourceModule } from './datasource/datasource.module';
import { RoutersComponent } from './routers/routers.component';

@NgModule({
  imports: [
    BrowserModule, 
    AppRoutesModule,
    ContentModule,
    DataSourceModule,
    InternetModule
  ], 
  declarations: [
    AppComponent, 
    RoutersComponent
  ], 
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule {
}
