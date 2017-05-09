import { WidgetAComponent } from '../widgets/widget-a.component';
import { WidgetBComponent } from '../widgets/widget-b.component';
import { Type } from '@angular/core';

/**
 * Dashboard widget declarations (Angular components).
 */
export const dashboardWidgets: Type<any>[] = [
  WidgetAComponent,
  WidgetBComponent,
];
