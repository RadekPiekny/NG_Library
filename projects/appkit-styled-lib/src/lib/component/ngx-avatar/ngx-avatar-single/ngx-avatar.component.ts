import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-avatar',
  templateUrl: './ngx-avatar.component.html',
  styles: [':host { display: inline-block }'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxAvatarComponent {

  maskAvatarBase64 = "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDxkZWZzPgogICAgICAgIDxtYXNrIGlkPSJyZWt0Ij4KICAgICAgICAgICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IndoaXRlIiBpZD0iYXZhdGFyUmVjdCIvPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSItNDUiIGN5PSI1MCIgcj0iNjAiIGZpbGw9ImJsYWNrIiBpZD0iYXZhdGFyQXJjIi8+CiAgICAgICAgPC9tYXNrPgogICAgPC9kZWZzPgogICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IndoaXRlIiBtYXNrPSJ1cmwoI3Jla3QpIi8+Cjwvc3ZnPg==)";

  constructor(public cdr: ChangeDetectorRef) {}

  _compact: boolean= false;
  @Input() set compact(v: boolean | '') {
    this._compact = v === '' ? true : v;
  }

  _isGroup: boolean = false;
  @Input() set isGroup(v: boolean | '') {
    this._isGroup = v === '' ? true : v;
  }

  _color: string = 'bg-primary dark:bg-primary-lighten-100';
  @Input() set backgroundColor(col: string) {
    this._color = col ? col : 'bg-primary dark:bg-primary-lighten-100';
    this.cdr.markForCheck();
  }

}
