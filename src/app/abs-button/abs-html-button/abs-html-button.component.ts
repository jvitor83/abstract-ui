import { Components, AnimationBuilder, RouterDirection, Color } from '@ionic/core';
import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { AbsButtonComponent } from '../abs-button.component';
import { getDefaultSuite, prefix, Suite } from 'src/app/definitions';
import { SuiteComponentWrapper } from 'src/app/abs.component';
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
