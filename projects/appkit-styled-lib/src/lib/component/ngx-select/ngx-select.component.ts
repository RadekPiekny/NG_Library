import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  forwardRef,
  OnDestroy,
  Input,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ContentChild,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output,
  Attribute,
  ChangeDetectorRef,
  NgZone,
  Inject,
  TemplateRef
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl
} from '@angular/forms';
import { slideFromBottom } from '@rp_custom_library/appkit-styled-lib/src/lib/animation';
import { NgxFieldErrorComponent } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-field-error';
import { BehaviorSubject, Observable, Subscription, delay, map, of, take } from 'rxjs';
import { isEqual } from 'lodash';
import { DOCUMENT } from '@angular/common';
import { CdkConnectedOverlay, ConnectionPositionPair, Overlay } from '@angular/cdk/overlay';
import { FormFieldBaseComponent } from '@rp_custom_library/appkit-styled-lib/src/lib/component/form-field/form-field-base';
import { INgxOptionProps } from '@rp_custom_library/appkit-styled-lib/src/lib/model/ngx-option';
import { NgxOptionComponent } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-option';

@Component({
  selector: 'ngx-select',
  templateUrl: './ngx-select.component.html',
  styleUrls: ['./ngx-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxSelectComponent),
      multi: true
    }
  ],
  animations: [slideFromBottom],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxSelectComponent extends FormFieldBaseComponent<any>
  implements OnInit, AfterContentInit, OnDestroy, ControlValueAccessor
{
  _value: any;
  _multi = false;
  _disabled = false;

  @ContentChild(TemplateRef)
  templateRef!: TemplateRef<NgxSelectComponent[]>;
  itemSize = 48; // 48px height + 2 * 4px margin needs to be precize or use autosize which at the momemnt is still in CDK experimental package only
  optionsOverlayHeight: number = 2 * 8 + this.itemSize;
  optionsSelected: INgxOptionProps[] = []; // we need this if user search for something and array of values changes. We still want toshow previously selected values
  optionsToAdd: BehaviorSubject<INgxOptionProps[]> = new BehaviorSubject<
    INgxOptionProps[]
  >([]);
  optionSubscriptions: Subscription[] = [];
  @Input() changeAllSelection = false;
  @Input() maxScreenRatioContainer = 60;
  @Input() overlayWidthExactMatch = false;
  @Input() emitOnlyOnInteraction = true;
  @Input() retainNonExistingOptions = false;
  @Input()
  displayFn!: Function;
  @Input() overlayItemsShow = 7;
  @Input() set selectText(v: string) {
    // delete some time in future..SelectText should be removed from documentation
    // for compatibility with older lib 2.4.4 >
    this.placeholder$.next(v);
  };

  @Input() set multi(value: boolean | '') {
    this._multi = value === '' ? true : value;
  }
  _search: boolean = false;
  @Input() set search(value: boolean | '') {
    this._search = value === '' ? true : value;
  }
  @Input() override set disabled(value: boolean | '' | null) {
    this._disabled = (value === '' || value === null) ? true : value;
    if (this._disabled) {
      this.fc?.disable();
    } else {
      this.fc?.enable();
    }
    this.cdr.markForCheck();
  }
  @Input() override set value(v: any) {
    this.allowEmit = false;
    this._value = v;
    if (!this.fc) {
      this.fc = new FormControl(this._value);
    } else {
      this.fc.patchValue(this._value);
    }
    setTimeout(() => {
      this.allowEmit = true;
    });
  };

  @Output() searchChange = new EventEmitter<string>();
  selectedValue!: string;
  showOptions = false;
  errorShow = false;
  selectOptionContainerWidth!: number;

  overlayPosition = [
    new ConnectionPositionPair(
      { originX: 'start', originY: 'bottom' },
      { overlayX: 'start', overlayY: 'top' }
    ),
    new ConnectionPositionPair(
      { originX: 'end', originY: 'bottom' },
      { overlayX: 'end', overlayY: 'top' }
    ),
    new ConnectionPositionPair(
      { originX: 'start', originY: 'top' },
      { overlayX: 'start', overlayY: 'bottom' }
    ),
  ];

  @ContentChildren(NgxOptionComponent)
  options!: QueryList<NgxOptionComponent>;
  @ViewChild('btn')
  btn!: ElementRef<HTMLButtonElement>;
  @ViewChild('optionContainer')
  optionContainer!: ElementRef<HTMLDivElement>;
  @ContentChild(NgxFieldErrorComponent) error: any;

  constructor(
    public override host: ElementRef,
    public override cdr: ChangeDetectorRef,
    private ngZone: NgZone,
    @Inject(DOCUMENT) private document: Document,
    @Attribute('formControlName') public formControlName: string,
    private overlay: Overlay
  ) {
    super(cdr,host);
    this.placeholder$.next('Select...');
  }

  ngAfterContentInit(): void {
    
    this.options.changes.subscribe((op) => {
      this.newOptions();
      this.optionsChange();
      this.displayValueChange();
      this.cdr.markForCheck();
    });
    this.newOptions();
    this.optionsChange();
    this.displayValueChange();
    this.cdr.markForCheck();
  }

  optionsChange() {
    const optionsToAdd: INgxOptionProps[] = this.optionsSelected.filter(
      (os) => {
        const wtf = this.options.some((no) => {
          const equal = isEqual(no.value, os.value);
          return equal;
        });
        return !wtf;
      }
    );

    this.optionsToAdd.next(optionsToAdd);
    this.optionSubscriptions?.forEach((s) => s.unsubscribe());
    this.options.forEach((o) => {
      if (this._multi) {
        o.multi = true;
      }
      const s = o.clickEvent.subscribe((oc) =>
        this.optionClick(o._optionData, o)
      );
      this.optionSubscriptions.push(s);
    });
    this.checkDuplicated();
    const items: number = this.options.length + this.optionsToAdd.getValue().length;

    this.getContainerHeight().pipe(take(1)).subscribe( v => {
      this.optionsOverlayHeight = v ;
      this.cdr.markForCheck();
      this.overlayDir?.overlayRef?.updatePosition();
    });
    if (this.displayChangeSelectionAll) {
      this.optionsOverlayHeight += this.changeAllSelection ? 53 : 0; // 52 + hr is 1px
    }

  }

  getContainerHeight(): Observable<number> {
    // this can be run only after container gets into dom, so like after clicking button and chaning ngif condition on the container to true
    let result: number = 0;
    const items: number = this.options.length + this.optionsToAdd.getValue().length;
    const containerRect = this.optionContainer?.nativeElement.getBoundingClientRect();
    if (!containerRect) {
      if (items > this.overlayItemsShow) {
        result = 12 + this.itemSize * this.overlayItemsShow + this.overlayItemsShow * 4 ; // 4 is gap-2 in the container
      } else {
        result = 2 * 12 + this.itemSize * items + (items - 1) * 4;
      }
      if (this.displayChangeSelectionAll) {
        result += this.changeAllSelection ? 53 : 0; // 52 + hr is 1px
      }
      return of(result);
    }
    const screenHeight = window.screen.height;
    const maxContainerHeight = screenHeight * this.maxScreenRatioContainer;
    
    let rectLastOption: DOMRect;
    if (items === 0) {
      const rectLastChild = this.optionContainer.nativeElement.children.item(this.optionContainer.nativeElement.children.length - 1).getBoundingClientRect();
      result = rectLastChild.top - containerRect.top + rectLastChild.height + 20; // 12 being last padding
      return of(result);
    }
    if (items > this.overlayItemsShow) {
      return of(null).pipe(
        delay(0),
        map(() => {
          rectLastOption = this.options.toArray()[this.overlayItemsShow - 1].host.nativeElement.getBoundingClientRect();
          result = rectLastOption.top - containerRect.top + rectLastOption.height + 12; // 12 being last padding
          return result
        })
      );
    } else {
      return of(null).pipe(
        delay(0),
        map(() => {
          rectLastOption = this.options.toArray()[this.options.length - 1].host.nativeElement.getBoundingClientRect();
          result = rectLastOption.top - containerRect.top + rectLastOption.height + 12; // 12 being last padding
          return result
        })
      );
    }
    
  }

  newOptions() {
    this.options.forEach((o) => {
      let selected = o._optionData.selected;
      if (o._optionData.value === "" && o.host.nativeElement?.children[0]?.innerText) {
        // if dev use only <ngx-option>value</ngx-option> so without [value] binding
        o._optionData.value = o.host.nativeElement?.children[0]?.innerText;
      }
      if (this.fc.value) {
        if (this._multi) {
          if (this.fc.value.length > 0) {
            selected = this.fc.value.some((v: any) =>
              isEqual(v, o._optionData.value)
            );
          } else {
            selected = false;
          }
        } else {
          if (isEqual(o._optionData.value, this.fc.value)) {
            selected = true;
          } else {
            selected = false;
          }

        }
      } else {
        selected = false;
      }
      const nOptions: INgxOptionProps = {
        multi: this._multi,
        selected: selected,
        value: o._optionData.value,
        displayValue: o._optionData.displayValue
          ? o._optionData.displayValue
          : '',
        innerHTML: o._optionData.innerHTML
      };
      o.optionData = nOptions;
    });
  }

  ngOnInit(): void {
    this.selectedValue = this.placeholder$.getValue();
    if (this._multi && !this._value) {
      this._value = [];
    }
    if (!this.fc) {
      this.fc = new FormControl(this._value);
    }
    if (!this.emitOnlyOnInteraction) {
      this.onChange && this.onChange(this._value);
      this.valueChange.emit(this._value);
    }
    if (this._disabled) {
      this.fc.disable();
    } else {
      this.fc.enable();
    }
    this.ngZone.runOutsideAngular(() => {
      this.document.addEventListener('click', this.onDocumentClick.bind(this));
    });
  }

  override ngOnDestroy(): void {
    this.optionSubscriptions.forEach((s) => s.unsubscribe());
  }

  override writeValue(obj: any): void {
    this.allowEmit = false;
    if (obj === null || obj === '') {
      if (this._multi) {
        this.fc.patchValue([]);
        if (this.options) {
          this.optionsSelected = [];
          this.newOptions();
        }
        this.displayValueChange();
      } else {
        this.fc.patchValue(obj);
        if (this.options) {
          this.optionsSelected = [];
          this.newOptions();
        }
        this.displayValueChange();
      }
      setTimeout(() => {
        this.allowEmit = true;
      });
      return;
    }
    if (Array.isArray(obj)) {
      if (this._multi) {
        this.fc.patchValue([]);
        if (this.options) {
          this.optionsSelected = [];
          this.newOptions();
        }
        //this.displayValueChange();
      }
      obj.forEach((o) => {
        const ff: INgxOptionProps = {
          displayValue: '',
          multi: this._multi,
          selected: true,
          value: o
        };
        if (this.displayFn) {
          const displayFn: string = this.displayFn(obj[0]);
          ff.innerHTML = displayFn;
          setTimeout(() => {
            this.optionClick(ff,null,false);
          });
          return;
        }
        this.optionClick(ff,null,false);
      });
    } else {
      const ff: INgxOptionProps = {
        displayValue: '',
        multi: this._multi,
        selected: true,
        value: obj
      };
      this.optionClick(ff,null,false);
      
    }

    if (!this.emitOnlyOnInteraction) {
      this.onChange && this.onChange(this.fc.value);
      this.valueChange.emit(this.fc.value);
    }
    setTimeout(() => {
      this.allowEmit = true;
    });
  }

  btnClick() {
    this.btn.nativeElement.focus();
    if (this._readonly) {
      return;
    }
    this.showOptions = !this.showOptions;

    setTimeout(() => {
      const optionsOverlayHeight = this.getContainerHeight();
      this.getContainerHeight().pipe(take(1)).subscribe( v => {
        this.optionsOverlayHeight = v ;
        this.cdr.markForCheck();
        this.overlayDir.overlayRef?.updatePosition();
      });
    });
    if (this.btn.nativeElement.parentElement) {
      this.selectOptionContainerWidth = this.btn.nativeElement.parentElement.offsetWidth;
    }
  }

  optionClick(v: INgxOptionProps, o?: NgxOptionComponent | null, interaction = true) {
    if (!o) {
      this.removeOldOption(v);
    }
    if (this.onTouched) {
      this.onTouched();
    }
    let currentValue: any = this.fc.value ? JSON.parse(JSON.stringify(this.fc.value)) : null;

    if (this._multi) {
      if (Array.isArray(this.fc.value) === false) {
        throw 'NGX-select -> form control is not array even tho component is set to multi';
      }

      if (currentValue[0] === '' && currentValue.length === 1) {
        currentValue = [];
      }
      const present: number = currentValue.findIndex((optionValue: any) => {
        return isEqual(optionValue, v.value);
      });
      if (present === -1) {
        this.optionsSelected.push(v);
        currentValue.push(v.value);
        v.selected = true;
        if (o) {
          o.selected = true;
        }
      } else {
        const i = this.optionsSelected.findIndex((os) => os.value === v.value);
        this.optionsSelected.splice(i, 1);
        currentValue.splice(present, 1);
        v.selected = false;
        if (o) {
          o.selected = false;
        }
      }

      this.fc.patchValue(currentValue);
    } else {
      this.optionsSelected.forEach((o) => (o.selected = false));
      if (this.optionsSelected.some((o) => isEqual(o.value, v.value))) {
        return;
      } else {
        this.optionsSelected = [v];
        if (v.value) {
          // the dev did use data binding for [value]
          currentValue = v.value;
        } else {
          //the dev did not use [value] so we assume we bind what is the innerHTML.
          currentValue = v.innerHTML;
          v.value = v.innerHTML;
        }
        v.selected = true;
        if (o) {
          o.selected = true;
        }
      }
      this.closeOptions();
      this.fc.patchValue(currentValue);
    }
    if (this.options) {
      this.newOptions();
      this.optionsChange();
    }
    this.displayValueChange();
  }

  displayValueChange() {
    let displayText: string = '';
    let selectedOptin: NgxOptionComponent | undefined;
    if (this._multi) {
      if (this.fc.value && this.fc.value.length > 0) {
        displayText = `${this.fc.value.length} selected`;
      } else {
        displayText = this.placeholder$.getValue();
      }
    } else {
      
      if (this.options) {
        this.options.forEach((o) => {
          if (o._optionData.selected) {
            selectedOptin = o;
          }
        });
      }
      if (this.displayFn) {
        displayText = this.displayFn(this.fc.value);
      } else {
        if (selectedOptin) {
          if (selectedOptin?._optionData.displayValue) {
            displayText = selectedOptin?._optionData.displayValue;
          } else {
            displayText = selectedOptin?._optionData.value;
          }
        } else {
          if (this.fc.value) {
            if (typeof this.fc.value === 'object') {
              // this should happen only if there are objects in ngx options, they are async and we have value
              // on the select
              // we should probably show some loader
            } else {
              displayText = this.fc.value;
            }
          } else {
            displayText = this.placeholder$.getValue();
          }
        }
      }
    }
    this.selectedValue = displayText;
    this.cdr.markForCheck();
  }

  closeOptions() {
    this.focused.next(false);
    if (this.onTouched) {
      this.onTouched();
    }
    this.showOptions = false;
  }

  checkDuplicated() {
    const current: INgxOptionProps[] = this.optionsToAdd.getValue();
    const duplicates = current.filter((oToAdd) => {
      return this.options.some((o) => {
        return isEqual(o._optionData.value, oToAdd.value);
      });
    });
    duplicates.forEach((d) => this.removeOldOption(d));
  }

  removeOldOption(option: INgxOptionProps) {
    const current: INgxOptionProps[] = this.optionsToAdd.getValue();
    const i = current.findIndex((o) => o.value === option.value);
    current.splice(i, 1);
    this.optionsToAdd.next(current);
  }

  get someOptionSelected() {
    return this.options.some((o) => o._optionData.selected);
  }

  get displayChangeSelectionAll() {
    return this._multi && this.changeAllSelection && this.options.length > 1;
  }

  testSelectAll() {
    let selection = true;
    if (this.someOptionSelected) {
      selection = false;
    }
    this.options.forEach((o) => {
      o.selected = selection;
    });
    if (selection) {
      this.fc.patchValue(this.options.map((o) => o._optionData.value));
    } else {
      this.fc.patchValue([]);
    }

    this.displayValueChange();
  }
  //
  // Zone experimental stuff
  //

  onDocumentClick(e: MouseEvent) {
    const btnClick: boolean = this.host.nativeElement.contains(e.target);
    const optionsClick: boolean = this.optionContainer?.nativeElement.contains(
      e.target as any
    );

    if (!btnClick && !optionsClick && this.showOptions) {
      this.ngZone.run(() => {
        this.closeOptions();
        //this.cdr.markForCheck();
      });
    }
  }

  selectBlur(e: Event) {
    if (this.showOptions) {
      return;
    } else {
      this.onBlur(e);
    }
  }

  @ViewChild('optionsContainer') overlayDir: CdkConnectedOverlay;
}
