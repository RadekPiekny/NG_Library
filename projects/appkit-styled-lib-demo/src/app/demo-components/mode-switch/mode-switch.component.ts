import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'mode-switch',
  templateUrl: './mode-switch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModeSwitchComponent implements OnInit, OnDestroy {

  switch: FormGroup;

  switchSub: Subscription;

  @Output() modeChange: EventEmitter<string> = new EventEmitter<string>();
  loadMode: string;

  ngOnInit() {
    this.loadMode = window.localStorage.getItem('mode');
    this.switch = new FormGroup({
      mode: new FormControl<string>(this.loadMode || 'default')
    });
    this.switchSub = this.switch.valueChanges.subscribe(n => {
      window.localStorage.setItem('mode', n.mode);
      this.modeChange.emit(n.mode);
    });
    if(this.loadMode) {this.modeChange.emit(this.loadMode);}
  }

  ngOnDestroy() {
    this.switchSub.unsubscribe();
  }

}
