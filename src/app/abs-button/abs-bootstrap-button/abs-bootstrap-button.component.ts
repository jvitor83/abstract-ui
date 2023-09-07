import { Component, ViewEncapsulation } from '@angular/core';
import { prefix, Suite } from 'src/app/definitions';
import { BaseButtonSuiteComponentWrapper } from '../interface';

@Component({
  selector: `[${prefix}-${Suite.bootstrap}-button]`,
  styleUrls: [ './abs-bootstrap-button.component.scss' ],
  templateUrl: './abs-bootstrap-button.component.html',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AbsBootstrapButtonComponent extends BaseButtonSuiteComponentWrapper<any> {
  suite = Suite.bootstrap;
}
