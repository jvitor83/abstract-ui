import { Button } from 'primeng/button';
import { Component, ViewEncapsulation } from '@angular/core';
import { prefix, Suite } from 'src/app/definitions';
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
