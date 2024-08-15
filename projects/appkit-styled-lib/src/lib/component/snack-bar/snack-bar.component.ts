import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { slideFromBottom } from '@rp_custom_library/appkit-styled-lib/src/lib/animation';
import { ISnackBar } from '@rp_custom_library/appkit-styled-lib/src/lib/model/snack-bar';


@Component({
  selector: 'snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    slideFromBottom
  ],
})
export class SnackBarComponent {

  @Input() data: ISnackBar | undefined;

  stopped = new BehaviorSubject<null>(null);
  _counterDown = new BehaviorSubject<number | null>(null);
  _counterDown$ = this._counterDown.asObservable().pipe(
    tap(d => {
      if (d === 0) {
        if (this.data?.close) {
          this.data?.close();
        }
      }
    })
  )
  @Input() set counterDown(v: number) {
    this._counterDown.next(v);
  };
  @Input() counterMax: number | undefined;
  _duplicate = new BehaviorSubject<number | null>(null);
  @Input() set duplicate(v: number) {
    this._duplicate.next(v);
  };

  snackClick(snack: ISnackBar | undefined) {
    if (snack) {      
      if (snack.close) {
        snack.close()
      }
    }
  }

}
