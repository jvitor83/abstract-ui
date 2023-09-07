import { DoBootstrap, Injector, NgModule, Optional } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { AbsButtonComponent } from './abs-button.component';
import { prefix } from '../definitions';

import { AbsIonicButtonComponent } from '../abs-button/abs-ionic-button/abs-ionic-button.component';
import { AbsHtmlButtonComponent } from '../abs-button/abs-html-button/abs-html-button.component';
import { AbsPrimeNGButtonComponent } from '../abs-button/abs-primeng-button/abs-primeng-button.component';
import { AbsMaterialButtonComponent } from '../abs-button/abs-material-button/abs-material-button.component';
import { AbsKendoUIButtonComponent } from '../abs-button/abs-kendoui-button/abs-kendoui-button.component';
import { AbsBootstrapButtonComponent } from '../abs-button/abs-bootstrap-button/abs-bootstrap-button.component';
import { IonicModule } from '@ionic/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ButtonModule } from 'primeng/button';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AbsButtonComponent,

    AbsHtmlButtonComponent,
    AbsIonicButtonComponent,
    AbsPrimeNGButtonComponent,
    AbsMaterialButtonComponent,
    AbsBootstrapButtonComponent,
    AbsKendoUIButtonComponent,
],
  imports: [BrowserModule,


    IonicModule.forRoot(),
    NgbModule,
    ButtonModule,
    ButtonsModule,
    MatButtonModule,
    
],
  entryComponents: [AbsButtonComponent]
})
export class AbsButtonComponentModule implements DoBootstrap {
  constructor(@Optional() private injector?: Injector) {
    if (this.injector) {
        console.log('Registering components...');
        const meuElemento = createCustomElement(AbsButtonComponent, { injector: this.injector });
        customElements.define(`${prefix}-button`, meuElemento);
    }
  }
  ngDoBootstrap() {}
}
