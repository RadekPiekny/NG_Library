import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToFormGroup } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'guide-base',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuideFormBaseComponent implements OnInit, OnDestroy {

    ngOnInit(): void {
        this.formSubscription = this.form.valueChanges.subscribe(v => {
          this.formChange.emit(v);
        })
    }
    
    ngOnDestroy(): void {
      this.formSubscription?.unsubscribe();
    }
  
    formSubscription: Subscription;
    @Input() form: FormGroup;
  
    @Output() formChange = new EventEmitter<any>();

    baseChange(e: any) {
      this.form.controls.general.patchValue(e);
    }

}
