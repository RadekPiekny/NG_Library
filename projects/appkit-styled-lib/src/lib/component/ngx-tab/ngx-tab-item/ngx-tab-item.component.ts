import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';

@Component({
  selector: 'ngx-tab-item',
  templateUrl: './ngx-tab-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxTabItemComponent {

  constructor(private cdr: ChangeDetectorRef){}

  _filled= new BehaviorSubject<boolean>(false);
  @Input() set filled(value: '' | boolean) {
    if(value === '') {
      this._filled.next(true)
    }
    else 
    this._filled.next(value)
    this.cdr.detectChanges();
  }
  _disabled = new BehaviorSubject<boolean>(false);
  @Input() set disabled(value: '' | boolean) {
    if(value === '') {
      this._disabled.next(true)
    }
    else 
    this._disabled.next(value)
  }

  _active = new BehaviorSubject<boolean>(false);
  @Input() set active(value: '' |boolean) {
    if(value === '') {
      this._active.next(true)
    }
    else 
    this._active.next(value)
  }

  public readonly state$: Observable<any> = combineLatest([
    this._filled.asObservable(),
    this._active.asObservable(),
    this._disabled.asObservable()
  ]).pipe(
    map(d => {
      return {
        filled: d[0],
        active: d[1],
        disabled: d[2]
      }
    })
  )

  @Output() activeChange = new EventEmitter<void>();
  @Input() groupName: string | undefined;

  @Input() textColor: string = '';
  hovered: boolean = false;
  change() {
    if (!this._disabled.getValue()) {
      this.activeChange.emit();
    }
  }

  mouseEnter() {
    if (!this._disabled.getValue()) {
      this.hovered = true;
    }
  }
}
