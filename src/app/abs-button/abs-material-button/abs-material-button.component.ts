import { MatButton } from '@angular/material/button';
import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { AbsButtonComponent } from '../abs-button.component';
import { getDefaultSuite, prefix, Suite } from 'src/app/definitions';
import { SuiteComponentWrapper } from 'src/app/abs.component';
import { BaseButtonSuiteComponentWrapper } from '../interface';

@Component({
  selector: `[${prefix}-${Suite.material}-button]`,
  styleUrls: [ './abs-material-button.component.scss' ],
  templateUrl: './abs-material-button.component.html',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AbsMaterialButtonComponent extends BaseButtonSuiteComponentWrapper<MatButton> {
  @Input() suite: Suite = Suite.material;
}
