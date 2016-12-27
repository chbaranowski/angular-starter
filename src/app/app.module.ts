import { PipesModule } from './pipes/pipes.module';
import { BrowserModule }  from '@angular/platform-browser';
import { NgModule, ClassProvider, Injectable } from '@angular/core';

import { AppRoutesModule } from './app.routes';

import { AppComponent } from './app.component';

import { RoutersComponent } from './routers/routers.component';
import { PipesComponent } from './pipes/pipes.component';
import { ContentModule } from './routers/content/content.module';
import { BindingModule } from './binding/binding.module';
import { MultiProvidersModule } from './multiproviders/multiproviders.module';
import { InternetModule } from './multiproviders/internet/internet.module';

@NgModule({
  imports: [
    BrowserModule, 
    AppRoutesModule,
    ContentModule,
    MultiProvidersModule,
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
