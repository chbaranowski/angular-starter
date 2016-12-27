import { PipesModule } from './pipes/pipes.module';
import { BrowserModule }  from '@angular/platform-browser';
import { NgModule, ClassProvider, Injectable } from '@angular/core';

import { AppRoutesModule } from './app.routes';

import { AppComponent } from './app.component';

import { DataSourceModule } from './datasource/datasource.module';
import { RoutersComponent } from './routers/routers.component';
import { PipesComponent, SimpleDatePipe } from './pipes/pipes.component';
import { InternetModule } from './datasource/internet/internet.module';
import { ContentModule } from './routers/content/content.module';
import { BindingModule } from './binding/binding.module';

@NgModule({
  imports: [
    BrowserModule, 
    AppRoutesModule,
    ContentModule,
    DataSourceModule,
    InternetModule,
    PipesModule,
    BindingModule
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
