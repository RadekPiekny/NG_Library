import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ngx-loader',
  templateUrl: './ngx-loader.component.html',
  styleUrls: ['./ngx-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxLoaderComponent {

  @Input() type: 'line' | 'circle' = 'line';
  @Input() progress: number = 0;
  @Input() indeterminate = false;
  @Input() compact = false;
  @HostBinding('class.w-full') setWidthClass = false;
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.type){
      if (changes.type.currentValue === 'line') {
        this.setWidthClass = true;
      } else {
        this.setWidthClass = false;
      }
    }
  }
}
