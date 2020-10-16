import { Component, EventEmitter, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AbsComponent, SuiteComponentWrapper } from '../abs.component';

export interface ButtonSuiteComponentWrapper {
  clickEvent: EventEmitter<unknown>;
}

export interface WrappedEvent<T> {
  underlyingEvent: T;
  timestamp: number;
  sourceComponent: BaseButtonSuiteComponentWrapper<unknown>;
}

export interface ClickEvent<T = unknown> extends WrappedEvent<T> {
  underlyingEvent: T;
}

@Component({ template: '' })
// tslint:disable-next-line: max-line-length
export abstract class BaseButtonSuiteComponentWrapper<TButtonSuitComponentWrapper> extends SuiteComponentWrapper<TButtonSuitComponentWrapper> {
  public clickEvent: EventEmitter<ClickEvent> = new EventEmitter();
  @ViewChild('underlyingComponent') underlyingComponent;
  public click(suiteSourceEvent: unknown) {
    const clickEventToEmit = this.convertSuiteSourceEventToClickEvent(suiteSourceEvent);
    this.clickEvent.emit(clickEventToEmit);
  }
  protected convertSuiteSourceEventToClickEvent<TEvent = unknown>(suiteSourceEvent: TEvent): ClickEvent<TEvent> {
    return { underlyingEvent: suiteSourceEvent, timestamp: Date.now(), sourceComponent: this };
  }
}

export abstract class AbsButton {
  divUnderlyingComponent: Observable<BaseButtonSuiteComponentWrapper<unknown>>;
}

// export abstract class BaseAbsButton extends AbsComponent<AbsButton> {

// }

// // PrimeNG
// export declare class Button implements AfterContentInit {
//   type: string;
//   iconPos: string;
//   icon: string;
//   badge: string;
//   label: string;
//   disabled: boolean;
//   style: any;
//   styleClass: string;
//   badgeClass: string;
//   contentTemplate: TemplateRef<any>;
//   templates: QueryList<any>;
//   onClick: EventEmitter<any>;
//   onFocus: EventEmitter<any>;
//   onBlur: EventEmitter<any>;
//   ngAfterContentInit(): void;
// }

// import { Button } from '@progress/kendo-angular-buttons';
// // KendoUI
// export declare class ButtonDirective implements OnDestroy {
//   private service;
//   private ngZone;
//   /**
//    * Provides visual styling that indicates if the Button is active.
//    * By default, `toggleable` is set to `false`.
//    */
//   toggleable: boolean;
//   /**
//    * Backwards-compatible alias
//    *
//    * @hidden
//    */
//   /**
//   * @hidden
//   */
//   togglable: boolean;
//   /**
//    * Adds visual weight to the Button and makes it primary.
//    */
//   primary: boolean;
//   /**
//    * Changes the visual appearance by using alternative styling options
//    * ([more information and examples]({% slug appearance_button %})).
//    *
//    * The available values are:
//    * * [`ButtonLook`]({% slug api_buttons_buttonlook %}) = `flat` | `outline`
//    * * `clear`
//    */
//   look: ButtonLook | 'clear';
//   /**
//    * Sets the selected state of the Button.
//    */
//   selected: boolean;
//   /**
//    * @hidden
//    */
//   tabIndex: number;
//   /**
//    * Defines the name for an existing icon in a Kendo UI theme.
//    * The icon is rendered inside the Button by a `span.k-icon` element.
//    */
//   icon: string;
//   /**
//    * Defines a CSS class&mdash;or multiple classes separated by spaces&mdash;
//    * which are applied to a `span` element inside the Button. Allows the usage of custom icons.
//    */
//   iconClass: string;
//   /**
//    * Defines a URL which is used for an `img` element inside the Button.
//    * The URL can be relative or absolute. If relative, it is evaluated with relation to the web page URL.
//    */
//   imageUrl: string;
//   /**
//    * If set to `true`, it disables the Button.
//    */
//   disabled: boolean;
//   /**
//    * @hidden
//    */
//   role: string;
//   /**
//    * Fires each time the selected state of a toggleable button is changed.
//    *
//    * The event argument is the new selected state (boolean).
//    */
//   selectedChange: EventEmitter<any>;
//   /**
//    * Fires each time the user clicks the button.
//    */
//   click: EventEmitter<any>;
//   element: HTMLElement;
//   renderer: Renderer;
//   isDisabled: boolean;
//   isIcon: boolean;
//   isIconClass: boolean;
//   imageNode: HTMLImageElement;
//   iconNode: HTMLElement;
//   private localizationChangeSubscription;
//   private buttonLookChangeSubscription;
//   private _focused;
//   private direction;
//   private _selected;
//   private deferTimeout;
//   private domEvents;
//   isFocused: boolean;
//   readonly classButton: boolean;
//   readonly classPrimary: boolean;
//   readonly isFlat: boolean;
//   readonly isBare: boolean;
//   readonly isOutline: boolean;
//   readonly isClear: boolean;
//   readonly roleSetter: string;
//   readonly classDisabled: boolean;
//   readonly classActive: boolean;
//   readonly getDirection: string;
//   constructor(element: ElementRef, renderer: Renderer, service: KendoButtonService, localization: LocalizationService, ngZone: NgZone);
//   ngOnInit(): void;
//   ngOnChanges(change: SimpleChanges): void;
//   ngAfterViewChecked(): void;
//   ngOnDestroy(): void;
//   /**
//    * Focuses the Button component.
//    */
//   focus(): void;
//   /**
//    * Blurs the Button component.
//    */
//   blur(): void;
//   private toggleAriaPressed;
//   private hasText;
//   private addImgIcon;
//   private addIcon;
//   private prependChild;
//   private defer;
//   private iconSetter;
//   private removeImageNode;
//   private removeIconNode;
//   private updateIconNode;
//   private setIconTextClasses;
//   private toggleClass;
//   private _onButtonClick;
// }

// // Material
// export declare class MatButton extends _MatButtonMixinBase implements AfterViewInit, OnDestroy, CanDisable, CanColor, CanDisableRipple, FocusableOption {
//   private _focusMonitor;
//   _animationMode: string;
//   /** Whether the button is round. */
//   readonly isRoundButton: boolean;
//   /** Whether the button is icon button. */
//   readonly isIconButton: boolean;
//   /** Reference to the MatRipple instance of the button. */
//   ripple: MatRipple;
//   constructor(elementRef: ElementRef, _focusMonitor: FocusMonitor, _animationMode: string);
//   ngAfterViewInit(): void;
//   ngOnDestroy(): void;
//   /** Focuses the button. */
//   focus(origin?: FocusOrigin, options?: FocusOptions): void;
//   _getHostElement(): any;
//   _isRippleDisabled(): boolean;
//   /** Gets whether the button has one of the given attributes. */
//   _hasHostAttributes(...attributes: string[]): boolean;
//   static ngAcceptInputType_disabled: BooleanInput;
//   static ngAcceptInputType_disableRipple: BooleanInput;
// }

// // Ionic
// interface IonButton {
//   /**
//     * The type of button.
//    */
//   "buttonType": string;
//   /**
//     * The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics).
//    */
//   "color"?: Color;
//   /**
//     * If `true`, the user cannot interact with the button.
//    */
//   "disabled": boolean;
//   /**
//     * This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want).
//    */
//   "download": string | undefined;
//   /**
//     * Set to `"block"` for a full-width button or to `"full"` for a full-width button without left and right borders.
//    */
//   "expand"?: 'full' | 'block';
//   /**
//     * Set to `"clear"` for a transparent button, to `"outline"` for a transparent button with a border, or to `"solid"`. The default style is `"solid"` except inside of a toolbar, where the default is `"clear"`.
//    */
//   "fill"?: 'clear' | 'outline' | 'solid' | 'default';
//   /**
//     * Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.
//    */
//   "href": string | undefined;
//   /**
//     * The mode determines which platform styles to use.
//    */
//   "mode"?: "ios" | "md";
//   /**
//     * Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
//    */
//   "rel": string | undefined;
//   /**
//     * When using a router, it specifies the transition animation when navigating to another page using `href`.
//    */
//   "routerAnimation": AnimationBuilder | undefined;
//   /**
//     * When using a router, it specifies the transition direction when navigating to another page using `href`.
//    */
//   "routerDirection": RouterDirection;
//   /**
//     * The button shape.
//    */
//   "shape"?: 'round';
//   /**
//     * The button size.
//    */
//   "size"?: 'small' | 'default' | 'large';
//   /**
//     * If `true`, activates a button with a heavier font weight.
//    */
//   "strong": boolean;
//   /**
//     * Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
//    */
//   "target": string | undefined;
//   /**
//     * The type of the button.
//    */
//   "type": 'submit' | 'reset' | 'button';
// }

// // Bootstrap
//  // HTML puro

//  // HTML
//  interface HTMLButtonElement extends HTMLElement {
//   disabled: boolean;
//   /**
//    * Retrieves a reference to the form that the object is embedded in.
//    */
//   readonly form: HTMLFormElement | null;
//   /**
//    * Overrides the action attribute (where the data on a form is sent) on the parent form element.
//    */
//   formAction: string;
//   /**
//    * Used to override the encoding (formEnctype attribute) specified on the form element.
//    */
//   formEnctype: string;
//   /**
//    * Overrides the submit method attribute previously specified on a form element.
//    */
//   formMethod: string;
//   /**
//    * Overrides any validation or required attributes on a form or form elements to allow it to be submitted without validation. This can be used to create a "save draft"-type submit option.
//    */
//   formNoValidate: boolean;
//   /**
//    * Overrides the target attribute on a form element.
//    */
//   formTarget: string;
//   readonly labels: NodeListOf<HTMLLabelElement>;
//   /**
//    * Sets or retrieves the name of the object.
//    */
//   name: string;
//   /**
//    * Gets the classification and default behavior of the button.
//    */
//   type: string;
//   /**
//    * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
//    */
//   readonly validationMessage: string;
//   /**
//    * Returns a  ValidityState object that represents the validity states of an element.
//    */
//   readonly validity: ValidityState;
//   /**
//    * Sets or retrieves the default or selected value of the control.
//    */
//   value: string;
//   /**
//    * Returns whether an element will successfully validate based on forms validation rules and constraints.
//    */
//   readonly willValidate: boolean;
//   /**
//    * Returns whether a form will validate when it is submitted, without having to submit it.
//    */
//   checkValidity(): boolean;
//   reportValidity(): boolean;
//   /**
//    * Sets a custom error message that is displayed when a form is submitted.
//    * @param error Sets a custom error message that is displayed when a form is submitted.
//    */
//   setCustomValidity(error: string): void;
//   addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLButtonElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
//   addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
//   removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLButtonElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
//   removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
// }
