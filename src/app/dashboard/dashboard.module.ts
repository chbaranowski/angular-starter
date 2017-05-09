import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS, ModuleWithProviders } from '@angular/core';
import { WidgetComponent } from './widget.component';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { dashboardRoutes } from './dashboard.routes';
import { dashboardWidgets } from './dashboard.widgets';

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
    ...dashboardWidgets
  ],
})
export class DashboardModule {

  static withWidgets(): ModuleWithProviders {
    return {
      ngModule: DashboardModule,
      providers: [
        { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: dashboardWidgets, multi: true }
      ]
    };
  }

}
