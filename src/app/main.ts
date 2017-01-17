import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { enableProdMode } from '@angular/core';

// depending on the env mode, enable prod mode or add debugging modules
if (process.env.BUILD_MODE === 'production') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
