import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { AbsButtonComponent } from '../abs-button.component';
import { getDefaultSuite, prefix, Suite } from 'src/app/definitions';
import { SuiteComponentWrapper } from 'src/app/abs.component';
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
