import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { INgxOptionProps } from '@rp_custom_library/appkit-styled-lib/src/lib/model/ngx-option';

@Component({
  selector: 'ngx-option',
  templateUrl: './ngx-option.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxOptionComponent implements OnInit {
  _optionData: INgxOptionProps = {
    displayValue: '',
    multi: false,
    selected: false,
    value: '',
    innerHTML: ''
  };
  @Input() set optionData(v: INgxOptionProps) {
    if (v.selected !== this._optionData.selected) {
      this.changeSelection(v.selected);
    }
    this._optionData = v;
    if (this._optionData.multi) {
      this.cdr.detectChanges();
    }
  }
  @Input() set selected(v: boolean) {
    this.changeSelection(v);
  }
  @Input() set multi(v: boolean) {
    this._optionData.multi = v;
  }
  private innerValue: any = 'noInnerValue..AtAll';
  @Input() set value(v: any) {
    this.innerValue = v;
    this._optionData.value = v;
  }
  @Input() set displayValue(v: any) {
    this._optionData.displayValue = v;
  }
  @Output() clickEvent: EventEmitter<void> = new EventEmitter<void>();
  @ViewChild('content') content!: ElementRef;
  fcSelected: FormControl = new FormControl(false);

  constructor(
    private cdr: ChangeDetectorRef,
    public host: ElementRef
  ) {}

  ngOnInit(): void {
    if (!this.host.nativeElement.closest('div')) {
      this._optionData.multi = false;
      return;
    } else {
      this._optionData.multi = this.host.nativeElement.closest('div').getAttribute('multi');
    }
  }

  clickOption() {
    if (this.innerValue !== 'noInnerValue..AtAll') {
      this._optionData.innerHTML = this.innerValue;  
    } else {
      this._optionData.innerHTML = this.content.nativeElement.innerHTML;
    }
    this.clickEvent.emit();
    this.cdr.detectChanges();
  }

  changeSelection(v: boolean) {
    this._optionData.selected = v;
    this.fcSelected.patchValue(v);
    this.cdr.markForCheck();
  }

  clickCheckbox(e: Event) {
    e.stopPropagation();
  }
}
