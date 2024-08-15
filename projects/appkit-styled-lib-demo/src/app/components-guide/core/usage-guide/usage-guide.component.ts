import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'usage-guide',
  templateUrl: './usage-guide.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsageGuideComponent {
  @Input() heading: string;
  @Input() list: string[];
}
