import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS, ModuleWithProviders } from '@angular/core';
import { WidgetComponent } from './widget.component';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { dashboardRoutes } from './dashboard.routes';
import { BrowserModule } from '@angular/platform-browser';
import { WidgetAComponent } from '../widgets/widget-a.component';
import { WidgetBComponent } from '../widgets/widget-b.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
    WidgetComponent,
  ],
  declarations: [
    WidgetComponent,
    DashboardComponent,
    WidgetAComponent,
    WidgetBComponent,
  ],
})
export class DashboardModule {

  static componentTypes: any[];

  static withComponents(components: any[]): ModuleWithProviders {
    this.componentTypes = components;
    return {
      ngModule: DashboardModule,
      providers: [
        { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true }
      ]
    };
  }

}
