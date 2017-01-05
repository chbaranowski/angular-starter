import { CarouselModule } from './carousel/carousel.module';
import { ActionService } from './action.service';
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
    InternetModule,
    PipesModule,
    RoutersModule,
    CarouselModule,
    RouterModule.forRoot(appRoutes)
  ], 
  declarations: [
    AppComponent
  ], 
  providers: [
    ActionService
  ], 
  bootstrap: [AppComponent]
})
export class AppModule {
}
