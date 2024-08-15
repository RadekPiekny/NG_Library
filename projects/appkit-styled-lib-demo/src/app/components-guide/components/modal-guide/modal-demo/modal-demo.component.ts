import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'modal-demo',
  templateUrl: './modal-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalDemoComponent {
  showModal = false;
  @Input() content: 'empty' | 'termsOfUse' = 'empty';
}
