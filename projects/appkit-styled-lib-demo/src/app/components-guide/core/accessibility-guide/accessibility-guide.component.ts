import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'accessibility-guide',
  templateUrl: './accessibility-guide.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccessibilityGuideComponent {
  @Input() heading: string;
  @Input() list: string[];
}
