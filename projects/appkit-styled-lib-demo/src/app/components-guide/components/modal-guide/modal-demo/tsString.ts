export const modalDefaultDemoTs = `
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-modal-darken-demo',
  templateUrl: './modal-darken-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalDarkenDemoComponent {
  showModal = false;
}
`