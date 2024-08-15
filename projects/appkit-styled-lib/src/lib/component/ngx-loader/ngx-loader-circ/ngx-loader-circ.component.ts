import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { easeInOutCubic } from './bezier.function';

@Component({
  selector: 'ngx-loader-circ,ngx-loader-spinner',
  templateUrl: './ngx-loader-circ.component.html',
  styleUrls: ['./ngx-loader-circ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxLoaderCircComponent implements OnChanges {

  constructor(
    private cdr: ChangeDetectorRef
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.indeterminate){
      if (changes.indeterminate.currentValue) {
        this.sstop = false;
        this.start = performance.now();
        this._progressIndeterminate = 0;
        this.animate();
      } else {
        this.sstop = true;
      }

    }
    if (changes.compact) {
      if (changes.compact.currentValue) {
        this.strokeWidth = 2;
        this.size = 6; // h-6 w-6
      } else {
        this.strokeWidth = 4;
        this.size = 10; // // h-10 w-10
      }
    }
  }
  @Input() indeterminate: boolean = false;
  @Input() compact = false;
  _progressIndeterminate: number = 0;
  _progress: number = 0;
  duration = 2000;
  size: number = 10;
  start;
  @Input() set progress(v: number) {
    this._progress = v;
  }
  @Input() strokeWidth: number = 4;

  animate() {
    const wtf = performance.now();
    const elapsed = Math.min(wtf - this.start, this.duration);
    const progress = elapsed / this.duration ;
    this._progressIndeterminate = easeInOutCubic(progress) * 100;
  
    if (this.sstop) {
      return;
    }
    if (elapsed < this.duration) {
      requestAnimationFrame(this.animate.bind(this));
    } else {
      this.start = performance.now();
      requestAnimationFrame(this.animate.bind(this));
    }
    this.cdr.detectChanges();
  }

  sstop = false;

}
