import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'ngx-badge',
  templateUrl: './badge.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxBadgeComponent implements OnChanges {

  constructor() {
    this.setSentiment(this._sentiment);
  }

  ngOnChanges(): void {
    this.changeStyle(this._filled,this._sentiment);
  }

  _filled: boolean = false;
  @Input() set filled(v: boolean) {
    this._filled = v;
  }

  @Input() variation: 'Inline' | 'Contained' = 'Inline';

  _sentiment: 'default' | 'neutral' | 'positive' | 'negative' | 'warning' = 'default';
  _color: string = 'primary';
  @Input() set sentiment(v: 'default' | 'neutral' | 'positive' | 'negative' | 'warning') {
    this.setSentiment(v);
  };

  setSentiment(v: 'default' | 'neutral' | 'positive' | 'negative' | 'warning') {
    if (!v) {
      this._sentiment = 'default';
      this._color = 'rgb(var(--color-primary-rgb))';
    } else {
      switch (v) {
        case 'default':
          this._color = 'rgb(var(--color-primary-rgb))';
          break;
        case 'neutral':
          this._color = '#474747';
          break;
        default:
          this._color = `rgb(var(--color-${v}-rgb))`;
      }
      this._sentiment = v;
    }
  }

  changeStyle(filled: boolean, sentiment: 'default' | 'neutral' | 'positive' | 'negative' | 'warning') {
    if (filled) {
      this.badgeClass = this.bfilled[sentiment];
    } else {
      this.badgeClass = this.boutlined[sentiment];
    }
  }

  boutlined = {
    default: 'text-primary dark:text-primary-lighten-200 bg-primary bg-opacity-[0.12]',
    neutral: 'dark:border-neutral-50 border-neutral-500 bg-opacity-[0.12]',
    positive: 'text-positive dark:text-positive-300 bg-positive bg-opacity-[0.12]',
    negative: 'text-negative dark:text-negative-300 bg-negative bg-opacity-[0.12]',
    warning: 'text-inherit dark:text-white font-medium bg-warning bg-opacity-[0.12]'
  }

  bfilled = {
    default: 'dark:bg-primary-lighten-100 bg-primary',
    neutral: 'bg-neutral-50',
    positive: 'dark:bg-positive-lighten-100 bg-positive',
    negative: 'dark:bg-negative-lighten-100 bg-negative',
    warning: 'bg-warning-lighten-100'
  }

  badgeClass = this.boutlined.default;

}
