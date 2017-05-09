import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS, ModuleWithProviders, Type } from '@angular/core';
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

  static componentTypes: Type<any>[] = [WidgetAComponent, WidgetBComponent];

  static withComponents(): ModuleWithProviders {
    return {
      ngModule: DashboardModule,
      providers: [
        { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: DashboardModule.componentTypes, multi: true }
      ]
    };
  }

}
