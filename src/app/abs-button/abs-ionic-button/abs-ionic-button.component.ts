import { Components } from '@ionic/core';
import { Component, ViewEncapsulation } from '@angular/core';
import { prefix, Suite } from 'src/app/definitions';
import { BaseButtonSuiteComponentWrapper } from '../interface';

@Component({
  selector: `[${prefix}-${Suite.ionic}-button]`,
  styleUrls: [ './abs-ionic-button.component.scss' ],
  templateUrl: './abs-ionic-button.component.html',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AbsIonicButtonComponent extends BaseButtonSuiteComponentWrapper<Components.IonButton> {
  suite = Suite.ionic;

}
