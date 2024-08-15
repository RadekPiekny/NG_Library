import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'component-showcase',
  templateUrl: './component-showcase.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentShowcaseComponent {
  view: 'visual' | 'html' | 'ts' | 'module' = 'visual';
  @Input() bg: string;
}
