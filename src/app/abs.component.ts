import { Observable } from 'rxjs';

export abstract class AbsComponent<TComponent extends any = any> {
  public underlyingComponent: Observable<TComponent>;
}


export abstract class SuiteComponentWrapper<TComponent extends any = any> {
  underlyingComponent: TComponent;
}
