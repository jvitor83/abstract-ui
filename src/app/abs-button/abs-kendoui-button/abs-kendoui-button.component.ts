import { Button } from '@progress/kendo-angular-buttons';
import { Component, ViewEncapsulation } from '@angular/core';
import { prefix, Suite } from 'src/app/definitions';
import { BaseButtonSuiteComponentWrapper } from '../interface';

@Component({
  selector: `[${prefix}-${Suite.kendoui}-button]`,
  styleUrls: [ './abs-kendoui-button.component.scss' ],
  templateUrl: './abs-kendoui-button.component.html',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AbsKendoUIButtonComponent extends BaseButtonSuiteComponentWrapper<Button> {
  suite = Suite.kendoui;
}
