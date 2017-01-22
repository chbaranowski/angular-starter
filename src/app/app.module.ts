import { Configuration, createConfiguration } from './config/configuration.service';
import { GridModule } from './grid/grid.module';
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
import { CoreComponentsModule } from './core/core.components.module';
import { I18NModule } from './internationalization/i18n.module';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { ConfigurationComponent } from './config/configuration.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    HttpModule,
    BrowserModule,
    BindingModule,
    MultiProvidersModule,
    InternetModule,
    PipesModule,
    RoutersModule,
    CarouselModule,
    CoreComponentsModule,
    GridModule,
    I18NModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    ConfigurationComponent
  ],
  providers: [
    ActionService,
    { provide: Configuration, useFactory: createConfiguration, deps: []}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
