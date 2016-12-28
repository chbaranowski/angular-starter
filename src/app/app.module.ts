import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { PipesModule } from './pipes/pipes.module';
import { BindingModule } from './binding/binding.module';
import { MultiProvidersModule } from './multiproviders/multiproviders.module';
import { InternetModule } from './multiproviders/internet/internet.module';
import { RoutersModule } from './routers/routers.module';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule, 
    BindingModule,
    MultiProvidersModule,
    PipesModule,
    RoutersModule,
    RouterModule.forRoot(appRoutes)
  ], 
  declarations: [
    AppComponent
  ], 
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule {
}
