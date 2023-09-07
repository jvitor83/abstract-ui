import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { AbsButtonComponentModule } from './app/abs-button/abs-button.module';
import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

const bootstrap = () => {
  if (!environment.production) {
    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err));
  } else {
    // TODO: put a SuiteModule
    platformBrowserDynamic().bootstrapModule(AbsButtonComponentModule)
      .catch(err => console.error(err));
  }
}

bootstrap();
