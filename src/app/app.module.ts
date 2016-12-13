import { BrowserModule }  from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutesModule } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';

import { ContentModule } from './content/content.module';
import { ContentRoutesModule } from './content/content.routes';

@NgModule({
  imports: [
    BrowserModule, 
    AppRoutesModule,
    ContentModule
  ], 
  declarations: [
    AppComponent, 
    HomeComponent,
    AboutComponent
  ], 
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule {
}
