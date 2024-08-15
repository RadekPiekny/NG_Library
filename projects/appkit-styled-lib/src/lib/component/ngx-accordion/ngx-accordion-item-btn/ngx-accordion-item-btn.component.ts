import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ngx-accordion-item-btn',
  templateUrl: './ngx-accordion-item-btn.component.html',
  animations: [
    trigger('smoothCollapse', [
      state(
        'collapse',
        style({
          height: '0px',
          opacity: 0,
        })
      ),
      state(
        'expand',
        style({
          height: '*',
          opacity: 1,
        })
      ),
      transition(
        'expand <=> collapse',
        animate('300ms cubic-bezier(.37,1.04,.68,.98)')
      )
    ])
  ]
})
export class NgxAccordionItemBtnComponent {
  _state = new BehaviorSubject<'expand' | 'collapse'>('collapse');
  @Input() set state(v: 'expand' | 'collapse' | null) {
    if (v) {
      this._state.next(v);
    }
  };
  @Output() stateChange: EventEmitter<'expand' | 'collapse'> = new EventEmitter<'expand' | 'collapse'>();
  @Input() title: string = '';
  @Input() icon = 'icon-down-chevron-outline';

  toggle() {
    const newState = this._state.getValue() === 'collapse' ? 'expand' : 'collapse';
    this._state.next(newState);
    this.stateChange.emit(newState);
  }
}
