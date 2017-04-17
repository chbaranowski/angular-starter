import { Configuration, createConfiguration } from './config/configuration.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { CoreComponentsModule } from './core/core.components.module';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { ConfigurationComponent } from './config/configuration.component';
import { HttpModule } from '@angular/http';
import { DashboardModule } from './dashboard/dashboard.module';
import { WidgetAComponent } from './widgets/widget-a.component';
import { WidgetBComponent } from './widgets/widget-b.component';

@NgModule({
  imports: [
    HttpModule,
    BrowserModule,
    CoreComponentsModule,
    DashboardModule.withComponents([
      WidgetAComponent,
      WidgetBComponent
    ]),
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    ConfigurationComponent
  ],
  providers: [
    { provide: Configuration, useFactory: createConfiguration, deps: [] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
