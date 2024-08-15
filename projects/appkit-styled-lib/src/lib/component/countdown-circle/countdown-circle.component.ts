import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ngx-countdown-circle',
  templateUrl: './countdown-circle.component.html',
  styleUrls: ['./countdown-circle.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountdownCircleComponent implements OnInit {

  running: boolean = false;
  _duration: number = 2000;
  _frames: number = this._duration / 16;
  _frame: number = 0;
  @Input() width: number = 40;
  @Input() set duration(v: number | undefined) {
    if (v) {      
      this._duration = v;
      this._frames = this._duration / 16;
    }
  };
  @Output() stopped = new EventEmitter<void>();

  playAnimation() {
    this._frame++;
    const ratio = this._frame / this._frames * 100;
    this.setProgress(ratio)
    if (this._frame < this._frames && this.running === true) {
      window.requestAnimationFrame(this.playAnimation.bind(this))
    }
  }

  toggle() {
    // TODO we want to send output but then in service we need to stop counddown if we use this in service
    /*if (this.running) {
      this.stop();
      this.stopped.emit();
    } else {
      this.resume();
    }*/
  }

  stop() {
    this.running = false;
  }

  resume() {
    this.running = true;
    this.playAnimation();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.radius =  this.progressCircle.nativeElement.r.baseVal.value;
      this.circumference = this.radius * 2 * Math.PI;
      this.progressCircle.nativeElement.style.strokeDasharray = this.circumference;
      this.running = true;
      this.playAnimation();
    });

  }
  @ViewChild('progress') progressCircle!: ElementRef;
  radius!: number;
  //circumference of a circle = 2πr;
  circumference!: number;

  setProgress(percent: number) {
    this.progressCircle.nativeElement.style.strokeDashoffset = this.circumference - (percent / 100) * this.circumference;
  }
}
