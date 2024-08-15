import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { IComponentCode, IComponentData, IComponentDemo } from '../../model/component.model';
import { createNewFormControlState } from '../form-controls/form-control.model';

@Component({
  selector: 'guide-base',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuideBaseComponent {

  componentData!: IComponentData;
  optionActive!: IComponentDemo;
  view: string = 'html';
  componentCode: IComponentCode[] = [];
  formState = createNewFormControlState();
}
