import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ContentChildren,
  QueryList,
  Output,
  EventEmitter,
  OnDestroy,
  AfterContentInit,
  HostBinding
} from '@angular/core';
import { BehaviorSubject, Subscription, filter } from 'rxjs';
import { NgxAccordionItemComponent } from './ngx-accordion-item/ngx-accordion-item.component';
import { NgxAccordionItemBtnComponent } from './ngx-accordion-item-btn/ngx-accordion-item-btn.component';

@Component({
  selector: 'ngx-accordion',
  templateUrl: './ngx-accordion.component.html',
  styleUrls: ['./ngx-accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxAccordionComponent implements OnDestroy, AfterContentInit {

  @HostBinding('class') class = '';
  _single = false;
  @Input() set single(val: boolean) {
    this._single = val;
    if (val === true && this._state.getValue() !== 'collapse') {
      this.collapseAll();
      if (this.latestActive) {
        this.changeAccordion(this.latestActive, 'expand');
      }
    }
  }
  @Input() set state(val: 'expand' | 'collapse' | 'partial') {
    this._state.next(val);
    this.toggle();
    
  }
  @Output() stateChange: EventEmitter<string> = new EventEmitter<string>();
  @ContentChildren(NgxAccordionItemComponent) itemsDefault!: QueryList<NgxAccordionItemComponent>;
  @ContentChildren(NgxAccordionItemBtnComponent) itemsBtn!: QueryList<NgxAccordionItemBtnComponent>;

  _state = new BehaviorSubject<'expand' | 'collapse' | 'partial'>('expand');
  latestActive!: number;
  subscriptionList: Subscription[] = [];

  ngAfterContentInit() {
    if (this.itemsDefault) {
      this.itemsDefault.toArray().forEach((c, i) => {
        const subscription = c.stateChange.subscribe(
          (state: 'expand' | 'collapse' | null) => {
            if (!state) {
              return;
            }
            if (state === 'expand' && this._single) {
              this.collapseAll();
            }
            this.changeAccordion(i, state);
            this.accordionChange();
          }
        );
        this.subscriptionList.push(subscription);
      });
    }
    if (this.itemsBtn) {
      this.itemsBtn.toArray().forEach((c, i) => {
        const subscription = c.stateChange.subscribe(

          (state: 'expand' | 'collapse') => {
            if (state === 'expand' && this._single) {
              this.collapseAll();
            }
            this.changeAccordion(i, state);
            this.accordionChange();
          }
        );
        this.subscriptionList.push(subscription);
      });
    }
  }

  ngOnDestroy(): void {
    this.subscriptionList.forEach((s) => s.unsubscribe());
  }

  toggle() {
    if (this._state.getValue() === 'expand') {
      this.expandAll();
      return;
    }
    if (this._state.getValue() === 'collapse') {
      this.collapseAll();
      return;
    }
  }

  changeAccordion(i: number, state: 'expand' | 'collapse') {
    const items = this.contentType();
    const accordion = items?.toArray();
    accordion[i].state = state;
    if (state === 'expand') {
      this.latestActive = i;
    }
  }

  expandAll() {
    const items = this.contentType();
    if (!items) {
      return;
    }
    if (this._single) {
      throw 'State attribute on ngx-accordion cannot be set to expand if you have single parameter set to true';
    }
    items?.toArray().forEach((component) => {
      component['state'] = 'expand';
      //component.stateChange.subscribe(v => console.log(v));
    });
    if (!this.latestActive) {
      this.latestActive = items.toArray().length - 1;
    }
  }

  collapseAll() {
    const items = this.contentType();
    items?.toArray().forEach((component) => {
      component['state'] = 'collapse';
    });
  }

  accordionChange() {
    const items = this.contentType();
    const qq: string[] = [];
    items.forEach(c => {
      qq.push(c._state.getValue());
    })
    if (qq.every((state) => state === 'collapse')) {
      this.stateChange.emit('collapse');
      this._state.next('collapse');
      return;
    }
    if (qq.every((state) => state === 'expand')) {
      this.stateChange.emit('expand');
      this._state.next('expand');
      return;
    }
    this.stateChange.emit('partial');
    this._state.next('partial');
  }

  stateOutput(state: 'expand' | 'collapse' | 'partial') {
    this.stateChange.emit(state);
    this._state.next(state);
    this.toggle();

  }

  contentType() {
    if (this.itemsDefault?.length) {      
      return this.itemsDefault
    }
    if (this.itemsBtn?.length) {
      return this.itemsBtn
    }
  }
}
