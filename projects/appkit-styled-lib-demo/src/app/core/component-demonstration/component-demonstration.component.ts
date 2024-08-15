import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-component-demonstration',
  templateUrl: './component-demonstration.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentDemonstrationComponent {

}
