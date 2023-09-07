import { MatButton } from '@angular/material/button';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { prefix, Suite } from 'src/app/definitions';
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
