import { BrowserModule }  from '@angular/platform-browser';
import { NgModule, ClassProvider } from '@angular/core';

import { AppRoutesModule } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent} from './home/home.component';

import { AboutModule } from './about/about.module';
import { ContentModule } from './content/content.module';

@NgModule({
  imports: [
    BrowserModule, 
    AppRoutesModule,
    ContentModule,
    AboutModule
  ], 
  declarations: [
    AppComponent, 
    HomeComponent
  ], 
  providers: [
  ], 
  bootstrap: [AppComponent]
})
export class AppModule {
}
