import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-floating-label',
  templateUrl: './floating-label.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FloatingLabelComponent {
  @Input() for!: string;
  @Input() err: boolean = false;
  @Input() contentPopulated: boolean = false; // if there is some value in input then we move label up otherwise it stays in the middle
  @Input() fieldFocus: boolean = false;
  @Input() leftIcon: boolean = false;
}
