import { environment } from './../environments/environment';
import { AbsKendoUIButtonComponent } from './abs-button/abs-kendoui-button/abs-kendoui-button.component';
import { AbsBootstrapButtonComponent } from './abs-button/abs-bootstrap-button/abs-bootstrap-button.component';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule, Optional, Type, isDevMode } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
//const { AppComponent } = await import('./app.component');
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
import { AbsButtonComponentModule } from './abs-button/abs-button.module';

console.log(environment.production);
console.log(isDevMode());

// if (environment.production) {
//   var bootstrap: Array<Type<any> | any[]> = [];
// } else {
// }
var bootstrap: Array<Type<any> | any[]> = [AppComponent];
if (environment.production) {
  bootstrap = [];
}

// var componentsDeclarations = [
//   AbsButtonComponent,
//   AbsHtmlButtonComponent,
//   AbsIonicButtonComponent,
//   AbsPrimeNGButtonComponent,
//   AbsMaterialButtonComponent,
//   AbsBootstrapButtonComponent,
//   AbsKendoUIButtonComponent,
// ];
// var appDeclaration = [AppComponent];
// var declarations: Array<Type<any> | any[]> = [
//   ...appDeclaration,
//   ...componentsDeclarations
// ];
// if (!isDevMode()) {
//   declarations = [
//     ...componentsDeclarations
//   ];
// }


@NgModule({
  declarations: [
    AppComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    AbsButtonComponentModule,

  ],
  entryComponents: [AppComponent],
  providers: [],
  bootstrap: bootstrap,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule implements DoBootstrap {
  ngDoBootstrap() {}
}