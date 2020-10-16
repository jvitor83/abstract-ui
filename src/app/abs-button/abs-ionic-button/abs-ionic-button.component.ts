import { Components, AnimationBuilder, RouterDirection, Color } from '@ionic/core';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { AbsButtonComponent } from '../abs-button.component';
import { getDefaultSuite, prefix, Suite } from 'src/app/definitions';
import { SuiteComponentWrapper } from 'src/app/abs.component';
import { fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';
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
