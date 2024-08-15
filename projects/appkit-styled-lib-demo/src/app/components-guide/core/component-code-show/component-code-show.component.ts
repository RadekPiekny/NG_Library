import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { IComponentCode } from '../../../model/component.model';

@Component({
  selector: 'component-code-show',
  templateUrl: './component-code-show.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentCodeShowComponent implements OnInit {

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    this.currentCode = this.componentCode[0];
  }

  @Output() viewChange: EventEmitter<string> = new EventEmitter<string>;
  @Input() list: string[];
  @Input() view: string;
  @Input() code: string;

  currentCode: IComponentCode;
  @Input() componentCode: IComponentCode[];

  copyToClipboard() {
    this.clipboard.copy(this.currentCode.code.text);
  }

  currentCodeChange(componentCode: IComponentCode) {
    this.currentCode = componentCode;
  }

}
