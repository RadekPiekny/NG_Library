import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'process-header',
  templateUrl: './process-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProcessHeaderComponent {
  @Input() number: number;
  @Input() optional: boolean = false;
}
