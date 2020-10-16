import { Button } from '@progress/kendo-angular-buttons';
import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { AbsButtonComponent } from '../abs-button.component';
import { getDefaultSuite, prefix, Suite } from 'src/app/definitions';
import { SuiteComponentWrapper } from 'src/app/abs.component';
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
