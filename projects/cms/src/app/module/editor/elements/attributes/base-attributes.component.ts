import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { ElementAttribute, WebBlocksComponent } from 'projects/cms/src/app/services/api/models';
import cloneDeep from 'lodash/cloneDeep';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-base-attributes',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseAttributesComponent implements OnDestroy {

  ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
  }

  formSubscription: Subscription;
  _data: WebBlocksComponent;
  @Input() set data(v: WebBlocksComponent) {
    this._data = cloneDeep(v) as WebBlocksComponent;
    this._data.elementBase.attributes.forEach(a => {

      const t = new FormControl(a.value, {
        validators: [Validators.required],
        updateOn: 'blur'
      });
      
      this.attributesForm.addControl(a.name,t);
    })
    console.log(this.attributesForm);
    this.formSubscription = this.attributesForm.valueChanges.subscribe(d => {
      console.log(d);
      const attributes: ElementAttribute[] = [];

      for (const [key, value] of Object.entries(d)) {
        const attribute: ElementAttribute = {name: key, value: (value as string)}
        attributes.push(attribute);
      }
      this._data.elementBase.attributes = attributes;
      this.dataChange.emit(this._data);
    })
  };
  @Output() dataChange: EventEmitter<WebBlocksComponent> = new EventEmitter<WebBlocksComponent>();

  attributesForm: FormGroup = new FormGroup({});
}
