import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingBarComponent {
  @Input() loading: boolean = false;
}
