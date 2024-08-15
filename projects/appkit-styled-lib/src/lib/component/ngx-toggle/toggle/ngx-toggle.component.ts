import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormControlBaseComponent } from '@rp_custom_library/appkit-styled-lib/src/lib/component/form-field/form-control-base';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'ngx-toggle, ngx-input-toggle',
  templateUrl: './ngx-toggle.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxToggleComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxToggleComponent extends FormControlBaseComponent<boolean> implements OnInit, OnDestroy {


  @Input() indicator: boolean = false;
  @Input() checked: boolean = false;
  @Input() label: string = '';
  s: Subscription = new Subscription;

  ngOnInit(): void {
    this.s = this.fc.valueChanges.subscribe(v => {
      this.valueChange.emit(v);
      this.onChange(v);
    })
  }

  ngOnDestroy(): void {
    this.s?.unsubscribe();
  }

  onToggle() {
    if (this.fc.disabled) {
      return;
    }
    this.fc.patchValue(!this.fc.value);
  }

}
