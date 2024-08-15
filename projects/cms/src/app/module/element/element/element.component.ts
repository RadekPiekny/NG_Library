import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementComponent {

}
