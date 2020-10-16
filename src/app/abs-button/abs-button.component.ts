import { Component, EventEmitter, Input, Output, ViewEncapsulation, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AbsComponent } from '../abs.component';
import { getDefaultSuite, prefix, Suite } from '../definitions';
import { AbsButton, BaseButtonSuiteComponentWrapper, ButtonSuiteComponentWrapper } from './interface';

@Component({
  selector: `${prefix}-button`,
  styleUrls: ['./abs-button.component.scss'],
  templateUrl: './abs-button.component.html',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AbsButtonComponent extends AbsButton implements AfterViewInit {
  @Input() suite: Suite = Suite.html;

  @Output(`clickEvent`) clickEvent = new EventEmitter();

  @ViewChildren('divUnderlyingComponent') private divUnderlyingComponentQueryList: QueryList<BaseButtonSuiteComponentWrapper<any>>;
  private divUnderlyingComponentSubject: BehaviorSubject<BaseButtonSuiteComponentWrapper<any>> = new BehaviorSubject(null);
  divUnderlyingComponent = this.divUnderlyingComponentSubject.asObservable();


  ngAfterViewInit(): void {
    // TODO: Test dynamic change suite to see if it change the click subscription
    this.setDivUnderlyingComponent(this.divUnderlyingComponentQueryList);
    this.divUnderlyingComponentQueryList.changes.subscribe((divUnderlyingComponentQueryList: QueryList<BaseButtonSuiteComponentWrapper<any>>) => {
      this.setDivUnderlyingComponent(divUnderlyingComponentQueryList);
    });

    // Update the component instance once it changes
    this.divUnderlyingComponent.pipe(switchMap((e) => e.clickEvent)).subscribe((event) => this.clickEvent.emit(event));
  }

  private setDivUnderlyingComponent(divUnderlyingComponentQueryList: QueryList<BaseButtonSuiteComponentWrapper<any>>) {
    this.divUnderlyingComponentSubject.next(divUnderlyingComponentQueryList.first);
  }
}
