import { Button } from 'primeng/button';
import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { AbsButtonComponent } from '../abs-button.component';
import { getDefaultSuite, prefix, Suite } from 'src/app/definitions';
import { SuiteComponentWrapper } from 'src/app/abs.component';
import { BaseButtonSuiteComponentWrapper } from '../interface';

@Component({
  selector: `[${prefix}-${Suite.primeng}-button]`,
  styleUrls: [ './abs-primeng-button.component.scss' ],
  templateUrl: './abs-primeng-button.component.html',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AbsPrimeNGButtonComponent extends BaseButtonSuiteComponentWrapper<Button> {
  suite = Suite.primeng;
}
