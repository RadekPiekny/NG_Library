import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-loader-line',
  templateUrl: './ngx-loader-line.component.html',
  styleUrls: ['./ngx-loader-line.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxLoaderLineComponent {
  @Input() progress: number = 0;
  @Input() indeterminate = false;
  @Input() compact = false;

}
