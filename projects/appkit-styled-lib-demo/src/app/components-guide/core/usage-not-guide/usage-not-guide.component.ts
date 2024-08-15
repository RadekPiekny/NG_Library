import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'usage-not-guide',
  templateUrl: './usage-not-guide.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsageNotGuideComponent {
  @Input() heading: string;
  @Input() list: string[];
}
