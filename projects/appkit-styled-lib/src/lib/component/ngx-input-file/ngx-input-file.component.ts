import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormControlBaseComponent } from '@rp_custom_library/appkit-styled-lib/src/lib/component/form-field/form-control-base';

declare interface FileChangeEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'ngx-input-file',
  templateUrl: './ngx-input-file.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxInputFileComponent),
      multi: true
    }
  ],
})
export class NgxInputFileComponent extends FormControlBaseComponent<File[]> implements ControlValueAccessor, OnDestroy, OnInit, OnChanges {

  constructor(private cdr: ChangeDetectorRef) {
    super()
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  subscription: Subscription = new Subscription;
  @ViewChild('inp')
  inp!: ElementRef;

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    if (this.icon) {
      this.heightClass ='h-auto';
    }
    this.subscription = this.fc.valueChanges.subscribe((file)=> {
      this.onChange && this.onChange(file);
      this.valueChange.emit(file);
    })
  }

  form: FormControl = new FormControl('');
  _label: string = "Drag and drop";
  wtfffffff = "fffff";
  @Input() set label(v : string) {
    this._label = v;
    //this.cdr.detectChanges();
  } ;
  @Input() disabledLabel : string = "File upload is disabled";
  @Input() uploadInstruction: string = "";
  @Input()
  accept!: string;
  @Input() multiple: boolean = false;
  _icon!: { enabled: string; disabled: string; };
  _iconEnabledDefault = "default";
  _iconDisabledDefault = "icon-cloud-delete-outline";
  @Input() set iconEnabled(v: string | null) {
    if (!this._icon) {
      this._icon = {enabled: this._iconEnabledDefault, disabled: this._iconDisabledDefault}
    }
    if (v === null) {
      this._icon.enabled = this._iconEnabledDefault;
    } else {
      this._icon.enabled = v;
    }
  }
  @Input() set iconDisabled(v: string | null) {
    if (!this._icon) {
      this._icon = {enabled: this._iconEnabledDefault, disabled: this._iconDisabledDefault}
    }
    if (v === null) {
      this._icon.disabled = this._iconDisabledDefault;
    } else {
      this._icon.disabled = v;
    }
  }
  @Input() set icon(v: {enabled: string, disabled: string} | '') {
    if (v === '') {
      this._icon = {enabled: this._iconEnabledDefault, disabled: this._iconDisabledDefault}
    } else {
      this._icon = v;
    }
  };
  heightClass: string = 'h-12';
  @Input() set size(v: 's' | 'xs' | 'm' | 'auto') {
    const correctedSize = this.sizeCheck(v);
    switch (correctedSize) {
      case 'xs':
        this.heightClass = 'h-6'
        break
      case 's':
        this.heightClass = 'h-8'
        break
      case 'm':
        this.heightClass = 'h-12'
        break
      case 'auto':
        this.heightClass = 'h-auto'
        break
    }
  }

  sizeCheck(v: 's' | 'xs' | 'm' | 'auto'): 's' | 'xs' | 'm' | 'auto' {
    if (this._icon && v !== 'auto') {
      console.warn("Warning: Please use 'auto' size with an icon.");
      return 'auto'
    } else {
      return v
    }
  }

  formFieldClick(element: any) { 
    if (this.fc.disabled) {
      return;
    }
    element.focus();
  }

  change(e: any) {
    const inp = (e as FileChangeEvent)
    if (inp.target.files) {
      const files = Array.from(e.target.files)
      this.fc.patchValue(files);
    }
  }

  fileDrop(files: File[]) {
    this.fc.patchValue(files);
  }

}

