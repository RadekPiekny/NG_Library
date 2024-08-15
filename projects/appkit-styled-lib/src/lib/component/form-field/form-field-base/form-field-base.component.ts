import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Subscription, combineLatest } from 'rxjs';
import { FormControlBaseComponent } from '@rp_custom_library/appkit-styled-lib/src/lib/component/form-field/form-control-base';
import { filter, map, startWith, tap } from 'rxjs/operators';
import { FormControlSize } from '@rp_custom_library/appkit-styled-lib/src/lib/model/form-control';
@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldBaseComponent<T> extends FormControlBaseComponent<T> implements OnDestroy, OnChanges, AfterViewInit{

  constructor(
    public cdr: ChangeDetectorRef,
    public host: ElementRef
  ) {
    super();
    this.inpSubscription = combineLatest([this.focusNativeInputElement, this.nativeInputElement.asObservable().pipe(filter(v => !!v))]).subscribe(v => {
      if (v[0] === null || v[0] === undefined) {
        return;
      }
      if (v[0]) {
        v[1].nativeElement.focus();
      } else {
        v[1].nativeElement.blur();
      }
    })
  }

  ngOnDestroy(): void {
    this.fcSubscription?.unsubscribe();
    this.inpSubscription?.unsubscribe();
  }

  ngAfterViewInitRun: boolean = false;
  allowEmit: boolean = true; // only for select quickfix
  ngAfterViewInit(): void {
    this.ngAfterViewInitRun = true;
    this.fcSubscription = this.fc.valueChanges.subscribe((v) => {
      if (this.allowEmit) {        
        this.onChange && this.onChange(v);
        this.valueChange.emit(v);
      }
    });

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['label']) {
      this.originalLabel = changes['label'].currentValue;
      if (this._size !== 'm') {
        this.label = "";
        this.originalLabel = changes['label'].currentValue;
      }
    }
  }
  
  originalLabel = '';
  leftIcon$ = new BehaviorSubject<string>('');
  @Input() set leftIcon(v: string) {
    this.leftIcon$.next(v);
  };
  label$ = new BehaviorSubject<string>('');
  @Input() fieldCssClass: string = '';
  @Input() set label(v: string) {
    this.label$.next(v);
  };
  placeholder$ = new BehaviorSubject<string>('');
  @Input() set placeholder(v: string) {
    this.placeholder$.next(v);
  };
  
  data$ = combineLatest([this.label$,this.placeholder$,this.leftIcon$,this.fc.valueChanges.pipe(startWith((v: any) => null)),this.focused$]).pipe(
    map(d => {
      return {label: d[0], placeholder: d[1], leftIcon: d[2],value: d[3],focused:d[4]}
    }),
  )

  @Input() set size(v: FormControlSize) {
    this._size = v;
    if (v !== 'm') {
      this.label = '';
    } else {
      if (this.originalLabel) {
        this.label = this.originalLabel;
      }
    }
    switch (v) {
      case 'xs':
        this.heightClass = 'h-6'
        break
      case 's':
        this.heightClass = 'h-8'
        break
      case 'sm':
        this.heightClass = 'h-10'
        break
      case 'm':
        this.heightClass = 'h-12'
        break
      case 'auto':
        this.heightClass = 'h-auto'
        break
    }
  }

  

  fcSubscription!: Subscription;
  inpSubscription!: Subscription;

  _size: FormControlSize = 'm';
  heightClass: string = 'h-12';
  
  style!: Object;

  stl$ = combineLatest([this.focused$,this.data$]).pipe(
    map(d => {
      if (!this.host.nativeElement) {
        return {height: 'auto', marginTop: '8px'};
      }
      const height = this.host.nativeElement.offsetHeight + 'px';
      const dataWithLabel = !!(this.fc.value !== null && d[1].label);
      const focusedWithLabel = !!(d[0] && d[1].label);
      //const noPlaceholderNoValue = !!(!this.placeholder && !this.fc.value);
      const placeholderWithLabelNoValue = !!(d[1].placeholder && d[1].label);
      if ( 
        dataWithLabel || 
        focusedWithLabel || 
        placeholderWithLabelNoValue || 
        (dataWithLabel && height === '0px') ||
        (focusedWithLabel && height === '0px') ||
        (placeholderWithLabelNoValue && height === '0px')
      ) {
        return {height: 'auto', marginTop: '8px'}
      } else {
        return {height: height, lineHeight: height}
      }
    })
  )

  formFieldClick(element: any) { 
    element.focus();
  }

  nativeInputElement = new BehaviorSubject<ElementRef | null>(null);
  private focusNativeInputElement = new BehaviorSubject<boolean>(false);
  @Input() set focus(value: boolean) {
    if (value === null || value === undefined) {
      return;
    }
    this.focusNativeInputElement.next(value);
  }


}
