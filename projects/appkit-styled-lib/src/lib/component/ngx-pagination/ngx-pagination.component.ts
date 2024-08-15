import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  forwardRef,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgxPaginationRange, _NgxPaginationRange } from './ngx-pagination.model';
import { BehaviorSubject, Observable, combineLatest, distinctUntilChanged, map, switchMap } from 'rxjs';
import { FormControlBaseComponent } from '@rp_custom_library/appkit-styled-lib/src/lib/component/form-field/form-control-base';
import { AnimationMetadata, animate, style, transition, trigger } from '@angular/animations';

const slideFromBottomEnter: AnimationMetadata[] = [
  style({ transform: 'translateY(8px) translateX(-50%)', opacity: 0 }),
  animate('.2s ease-in-out')
]

const slideFromBottomLeave: AnimationMetadata[] = [
  animate('.2s ease-in-out',style({ transform: 'translateY(8px) translateX(-50%)', opacity: 0 }))
]

const slideFromBottomNgxPaginationComponent = trigger('slideFromBottomNgxPaginationComponent', [
  transition(':enter', slideFromBottomEnter),
  transition(':leave', slideFromBottomLeave)
]);

@Component({
  selector: 'ngx-pagination',
  templateUrl: './ngx-pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxPaginationComponent),
      multi: true
    }
  ],
  animations: [slideFromBottomNgxPaginationComponent],
})
export class NgxPaginationComponent extends FormControlBaseComponent<NgxPaginationRange> implements OnInit, OnChanges {
  
  ngOnChanges(changes: SimpleChanges): void {
    this.update = false;
    this.init();
  }
  
  ngOnInit(): void {
    this.init();
  }

  private update: boolean= false;
  @Input() current: number;
  @Input() from: number;
  @Input() itemsPerPage: number;
  @Input() totalItems: number;
  @Input() to: number;
  @Input() step: number;
  @Input() resetOnNewData = true;

  @Input() labels: boolean = false;
  @Output() rangeChange: EventEmitter<NgxPaginationRange> = new EventEmitter<NgxPaginationRange>();

  _current = new BehaviorSubject<number>(1);
  _from = new BehaviorSubject<number>(0);
  _itemsPerPage = new BehaviorSubject<number>(10);
  _totalItems = new BehaviorSubject<number>(10);
  _step = new BehaviorSubject<number>(1);

  private localFrom: number;

  init() {
    if (this.totalItems) {
      this._totalItems.next(this.totalItems);
      if (this.resetOnNewData && this._totalItems.getValue() ! == this.totalItems) {
        this._from.next(0)
      }
    }
    if (this.current) {
      this._current.next(this.current);
    }
    if (this.from && !this.to) {
      this._from.next(this.from)
    }
    if (this.to && !this.from && this.itemsPerPage) {
      this._from.next(this.to - this.itemsPerPage)
    }
    if (this.itemsPerPage) {
      this._itemsPerPage.next(this.itemsPerPage);
    }
    if (this.step) {
      this._step.next(this.step)
    }
  }

  data$: Observable<NgxPaginationRange> = this._totalItems.pipe(
    switchMap(totalItems => {
      return combineLatest([
        this._current.asObservable().pipe(distinctUntilChanged()),
        this._from.asObservable().pipe(distinctUntilChanged()),
        this._itemsPerPage.asObservable().pipe(distinctUntilChanged()),
        this._step.asObservable().pipe(distinctUntilChanged()),
      ]).pipe(
        map(v => {
          return {
            current: v[0],
            from: v[1],
            itemsPerPage: v[2],
            step: v[3]
          }
        }),
        map((v) => {
          this.resetErr();
          const minPage = 1;
          const maxPage = Math.ceil(totalItems / v.itemsPerPage);
          const current = Math.ceil((v.from + 1) /v.itemsPerPage); // zero based
          let currentTo = v.from + v.itemsPerPage - 1;
          if (currentTo > this.totalItems) {
            currentTo = this.totalItems;
          }
          const result = {
            current: current,
            from: v.from,
            to: currentTo,
            itemsPerPage: v.itemsPerPage,
            totalItems: totalItems,
            step: v.step,
            chars: maxPage.toString().length,
            minPage,
            maxPage,
            width: {'width.ch': maxPage.toString().length}
          };
          if (this.update) {
            this.emitChange(result);
          }
          return result
        })
      )
    }),
  )

  data = new BehaviorSubject<NgxPaginationRange>(null);
  
  previous() {
    this.update = true;
    this.resetErr();
    this.localFrom = this._from.getValue() - this._itemsPerPage.getValue();
    this._from.next(this.localFrom);
  }

  next() {
    this.update = true;
    this.resetErr();
    this.localFrom = this._from.getValue()  + this._itemsPerPage.getValue()
    this._from.next(this.localFrom);
  }

  emitChange(val: NgxPaginationRange) {
    this.rangeChange.emit(val);
  }

  inputErr: string[] = [];
  inputChange(event: InputEvent,pagVal: NgxPaginationRange) {
    this.resetErr();
    const val = parseFloat((event.target as HTMLInputElement).value);
    if (val > pagVal.maxPage) {
      this.inputErr.push(`Last page is ${pagVal.maxPage}.`);
    }
    if (val < pagVal.minPage) {
      this.inputErr.push(`Minimum page is ${pagVal.minPage}.`);
    }
    if (this.inputErr.length) {
      event.preventDefault();
      (event.target as HTMLInputElement).value = pagVal.current.toString();
      return;
    };
    this.update = true;
    this._from.next(((val - 1) * this._itemsPerPage.getValue()));
  }

  resetErr() {
    this.inputErr = [];
  }

  
}
