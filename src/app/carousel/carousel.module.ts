import { CarouselComponent } from './carousel.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { carouselRoutes } from './carousel.routes';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselExampleComponent } from './carousel.example.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild(carouselRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    CarouselComponent,
    CarouselExampleComponent
  ],
  providers: [],
})
export class CarouselModule { }
