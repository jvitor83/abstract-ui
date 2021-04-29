import { environment } from './../environments/environment';
import { AbsKendoUIButtonComponent } from './abs-button/abs-kendoui-button/abs-kendoui-button.component';
import { AbsBootstrapButtonComponent } from './abs-button/abs-bootstrap-button/abs-bootstrap-button.component';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule, Optional } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbsButtonComponent } from './abs-button/abs-button.component';
import { createCustomElement } from '@angular/elements';
import { IonicModule, IonButton } from '@ionic/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { AbsIonicButtonComponent } from './abs-button/abs-ionic-button/abs-ionic-button.component';
import { AbsHtmlButtonComponent } from './abs-button/abs-html-button/abs-html-button.component';

import { ButtonModule } from 'primeng/button';
import { AbsPrimeNGButtonComponent } from './abs-button/abs-primeng-button/abs-primeng-button.component';
import { AbsMaterialButtonComponent } from './abs-button/abs-material-button/abs-material-button.component';
import { MatButtonModule } from '@angular/material/button';
import { prefix } from './definitions';

console.log(environment.production);


@NgModule({
  declarations: [
    AppComponent,

    AbsButtonComponent,
    AbsHtmlButtonComponent,
    AbsIonicButtonComponent,
    AbsPrimeNGButtonComponent,
    AbsMaterialButtonComponent,
    AbsBootstrapButtonComponent,
    AbsKendoUIButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    IonicModule.forRoot(),
    NgbModule,
    ButtonModule,
    ButtonsModule,
    MatButtonModule,

  ],
  entryComponents: [AbsButtonComponent, AbsHtmlButtonComponent,
    AbsIonicButtonComponent, AbsPrimeNGButtonComponent, AbsMaterialButtonComponent,
    AbsBootstrapButtonComponent, AbsKendoUIButtonComponent],
  providers: [],
  bootstrap: [AppComponent], //TODO: THIS NEED TO BE REMOVED INTO PRODUCTION BUILD IN ORDER TO USE THE BUNDLE (one-js-only by concat [bundle.js])
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule implements DoBootstrap {
    constructor(@Optional() public injector: Injector) {

  }
  ngDoBootstrap() {

    if(environment.production) {
      const injector = this.injector;

      // all components
      console.log('Registering components...');
      const el = createCustomElement(AbsButtonComponent, { injector });
      customElements.define(`${prefix}-button`, el);

      const app = createCustomElement(AppComponent, { injector });
      customElements.define(`${prefix}-root`, app);
    } else {
      console.log('NOT registering custom components...');
    }
  }
}
