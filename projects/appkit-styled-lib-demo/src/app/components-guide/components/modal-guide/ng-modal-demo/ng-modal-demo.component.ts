import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ng-modal-demo',
  templateUrl: './ng-modal-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgModalDemoComponent {
  showModal: boolean = false;
  @Input() content: string = '';
}
