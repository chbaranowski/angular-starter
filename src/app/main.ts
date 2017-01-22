import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { enableProdMode, LOCALE_ID, TRANSLATIONS, TRANSLATIONS_FORMAT, ReflectiveInjector } from '@angular/core';
import { Http, XHRBackend, RequestOptions, BrowserXhr, BaseRequestOptions,
         ResponseOptions, BaseResponseOptions, XSRFStrategy, Response, Request } from '@angular/http';

// depending on the env mode, enable prod mode or add debugging modules
if (process.env.BUILD_MODE === 'production') {
  enableProdMode();
}

// supported i18n languages 
const i18nMessages = {
  'de': require('../i18n/messages-de.xlf').toString(),
};

export class NoXSRFStrategy extends XSRFStrategy {
  configureRequest(req: Request) { }
}

// HTTP configuration to use the http service outside of angular2.
const HTTP_PROVIDERS = [
    {provide: XSRFStrategy, useClass: NoXSRFStrategy},
    {provide: Http, useFactory:
      (xhrBackend: XHRBackend, requestOptions: RequestOptions): Http =>
          new Http(xhrBackend, requestOptions),
          deps: [XHRBackend, RequestOptions]},
    BrowserXhr,
    {provide: RequestOptions, useClass: BaseRequestOptions},
    {provide: ResponseOptions, useClass: BaseResponseOptions},
    XHRBackend
];
const injector = ReflectiveInjector.resolveAndCreate([HTTP_PROVIDERS]);
const http = injector.get(Http);

// try to find out the user language
declare const navigator: any;
const userLang = navigator.language || navigator.userLanguage;

// select messages file
const messagesFilename = i18nMessages[userLang];
if (messagesFilename) {
  // query for the messages for the user language 
  http.get(`/${messagesFilename}`)
    .map((res: Response) => res.text())
    .subscribe((translations: string) => {
      // use the selected translations for the user language
      platformBrowserDynamic().bootstrapModule(AppModule, {
        providers: [
          { provide: TRANSLATIONS, useValue: translations },
          { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
          { provide: LOCALE_ID, useValue: userLang }
        ]
      });
  });
} else {
  // no messages for language found start app without translations (default en)
  platformBrowserDynamic().bootstrapModule(AppModule);
}

