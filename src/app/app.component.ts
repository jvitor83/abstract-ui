import { ClickEvent } from './abs-button/interface';
import { Component, ViewEncapsulation } from '@angular/core';
import { Suite } from './definitions';

@Component({
  selector: 'abs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui-jus-ng';
  suite: Suite = Suite.html;
  log(a: string) {
    console.log(a);
  }
  click(value: Suite, event: ClickEvent) {
    console.log(value, event);
    this.suite = value;
  }
}
