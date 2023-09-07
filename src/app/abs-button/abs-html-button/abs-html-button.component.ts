import { Component, ViewEncapsulation } from '@angular/core';
import { prefix, Suite } from 'src/app/definitions';
import { BaseButtonSuiteComponentWrapper } from '../interface';

@Component({
  selector: `[${prefix}-${Suite.html}-button]`,
  styleUrls: [ `./abs-html-button.component.scss` ],
  templateUrl: `./abs-html-button.component.html`,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AbsHtmlButtonComponent extends BaseButtonSuiteComponentWrapper<HTMLButtonElement> {
  suite = Suite.html;
}
