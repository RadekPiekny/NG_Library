import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IComponentData } from '../../../model/component.model';

@Component({
  selector: 'all-guides',
  templateUrl: './all-guides.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllGuidesComponent {
  @Input() componentData: IComponentData;
}
