import { ChangeDetectionStrategy, Component, OnChanges, SimpleChanges } from '@angular/core';
import { BaseAttributesComponent } from '../base-attributes.component';
import { ElementAttribute } from 'projects/cms/src/app/services/api/models';

@Component({
  selector: 'button-attributes',
  templateUrl: './button-attributes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonAttributesComponent extends BaseAttributesComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      console.log(this._data);
    }
  }


  valChange(atr: ElementAttribute, newVal: any) {
    console.log(atr);
    console.log(newVal);
    
    this.attributesForm.controls[atr.name].patchValue(newVal);
  }

  identify(index, atr: ElementAttribute){ // we use trackby so that input does not re-render while we type something
    return atr.name; 
 }

}
