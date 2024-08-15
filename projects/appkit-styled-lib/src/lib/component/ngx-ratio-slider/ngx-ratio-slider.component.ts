import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgxRatioSlider, NgxRatioSliderBoundaryBox, NgxRatioSliderPoint, _NgxRatioSliderSegment, _NgxRatioSlider, NgxRatioSliderSegment, NgxRatioSliderOutput, NgxRatioSliderManualInput } from './ngx-ratio-slider.model';
import { cloneDeep, isEqual } from 'lodash';
import { calculateStepBorders, countDecimalPlaces, findClosestDivisibleNumber, findDividers, findStepSegmentIndex, getStepPxPosition, roundToDecimalPlaces } from './ngx-ratio-slider.function';
import { MouseTrackerMouseMove, MouseTrackerMouseStart } from '@rp_custom_library/appkit-styled-lib/src/lib/directive/mouse-tracker';

@Component({
  selector: 'ngx-ratio-slider',
  templateUrl: './ngx-ratio-slider.component.html',
  styleUrls: ['./ngx-ratio-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxRatioSliderComponent implements AfterViewInit, OnChanges {

  constructor(
    private cdr: ChangeDetectorRef
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['min'] || changes['max'] || changes['step']) {
      this.upd();
    }
  }

  @ViewChild('boundaryBox')
  boundaryBox!: ElementRef;

  @Input() max: number = 100;
  @Input() min: number = 0;
  @Input() step: number = 1;
  @Input() showScale: boolean = true;
  @Input() disabled: boolean = false;

  decimalsStep: number = 0;
  oneStepSize!: number;
  mouseMoving: boolean = false;
  stepInPxRepresentation: number[] = [];
  stepScale: { cssClass: string; left: number; step: number; heading?: { cssClass: string; value: number; }; }[] = [];

  slidersCopy!: NgxRatioSlider[];
  ratioSliderManualInput: NgxRatioSliderManualInput[] = [];
  @Input() set sliders(v: NgxRatioSlider[]) {
    if (isEqual(this.slidersCopy,v)) {
      return;
    }
    this._sliders = [];
    this.slidersCopy = cloneDeep(v);
    this._sliders = v.map((s,i) => {
      const position: NgxRatioSliderPoint = {
        x: 0,
        y: 0
      }
      const _s: _NgxRatioSlider = {...s,position,index: i,errors: []}
      return _s
    })
    this.upd();
  }

  @Input() set segments(v: NgxRatioSliderSegment[]) {
    if (this._segments.length) {
      if (this._segments.length === v.length) {
        this._segments = this._segments.map((s,i) => {
          s.cssClass = v[i].cssClass;
          return s
        })
      } else {
        this._segments = v.map((s,i) => {
          const _s: _NgxRatioSliderSegment = {...s,start: {x: 0,y: 0},end: {x: 0,y: 0},width: 0}
          return _s
        })
        this.updateSegments();
      }
      return
    }
    this._segments = v.map(s => {
      const _s: _NgxRatioSliderSegment = {...s,start: {x: 0,y: 0},end: {x: 0,y: 0},width: 0}
      return _s
    })
  }
  @Output() valueChange = new EventEmitter<NgxRatioSliderOutput>();

  sliderWidth = 32;
  _sliders: _NgxRatioSlider[] = [];
  _segments: _NgxRatioSliderSegment[] = [];

  boundaryBoxData!: NgxRatioSliderBoundaryBox;

  ngAfterViewInit(): void {
    this.upd();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.upd();
  }

  upd() {
    if (!this.boundaryBox) {
      return;
    }
    const elementWidth = this.boundaryBox.nativeElement.offsetWidth;
    const boundingBox: DOMRect = this.boundaryBox.nativeElement.getBoundingClientRect();

    this.boundaryBoxData = {
      start: {
        x: boundingBox.x,
        y: boundingBox.y
      },
      end: {
        x: boundingBox.x + boundingBox.width,
        y: boundingBox.y + boundingBox.height
      },
      width: boundingBox.width,
      height: boundingBox.height
    }
    if (this._sliders) {
      this._sliders.forEach((s,i) => {
        let newPosition;
        if (s.value > this.max) {
          const msg = `Ngx-ratio-slider - Value of slider${i} is higher than maximum allowed. It will be displayed at 0`;
          console.warn(msg);
          newPosition = 0;
          if (!s.errors.find(m => m === msg)) {
            s.errors.push(msg);
          }
        } else {
          newPosition = (s.value / this.max) * boundingBox.width - this.sliderWidth / 2;
          s.errors = [];
        }
        s.position = {
          x: this.stepAdjustment(newPosition),
          y: 8
        }
      })
    };
    if (!this._segments.length) {
      this.initSegments();
    } else {
      this.updateSegments();
    }
    if (this.step && this.max) {
      this.oneStepSize = this.boundaryBoxData.width / this.max * this.step;
      this.decimalsStep = countDecimalPlaces(this.step);
    }
    this.stepInPxRepresentation = calculateStepBorders(this.min,this.max,this.step,this.boundaryBoxData.width);

    const dividers = findDividers(0,this.stepInPxRepresentation.length - 1);
    this.stepScale = this.stepInPxRepresentation.map((s,index) => {
      let cssClass = 'h-1';
      let heading = {cssClass: '', value: null}
      if (index % dividers[0] === 0) {
        cssClass = 'h-2'
      }
      if (index % dividers[1] === 0) {
        cssClass = 'h-3';
        heading = {cssClass: '', value: index*this.step};
      }
      return {
        left: s,
        step: index,
        cssClass,
        heading
      }
    });
    this.ratioSliderManualInput = this._sliders.map(slider => {
      return {
        cssClass: '!w-[3ch] text-center',
        left: slider.position.x,
        max: 0,
        min: 0,
        show: true,
        value: slider.value,
        containerCssClass: 'top-14',
        arrowCssClass: ''
      }
    })
    this.wfewfewf();
    this.cdr.detectChanges();
  }

  mouseDownTrigger(event: MouseTrackerMouseStart) {
    this.sliderMouseDownPosition = event.xPositionHostClick;
  }

  mouseMoveEnd() {
    setTimeout(() => {
      // we move this to callback queue so that it wont trigger click even too
      this.mouseMoving = false;
    });
  }

  sliderMouseDownPosition: number = -1;
  mouseMove(e: MouseTrackerMouseMove, slider: _NgxRatioSlider) {
    if (this.disabled) {
      return;
    }
    this.mouseMoving = true;
    const sliderMiddlePositionWindow = e.event.clientX - (this.sliderMouseDownPosition - this.sliderWidth / 2);
    const sliderMiddlePositionContainer = sliderMiddlePositionWindow - this.boundaryBoxData.start.x;
    this.fewewf(sliderMiddlePositionContainer,slider);
    this.outputUpdate();
  }

  stepAdjustment(pos: number, negative: boolean = true): number {
    if (pos < 0 && negative) {
      return pos
    }
    if (this.oneStepSize) {
      const posAdjutWithSliderWidth = pos;
      const stepSegmentIndex = findStepSegmentIndex(this.stepInPxRepresentation,posAdjutWithSliderWidth);
      if (stepSegmentIndex) {        
        const stepBorder = this.stepInPxRepresentation[stepSegmentIndex];
        return stepBorder
      }
    }
    return pos;
  }

  fewewf(sliderMiddlePositionContainer: number, slider: _NgxRatioSlider) {
    const sliderMiddlePositionContainerStepAdjusted = this.stepAdjustment(sliderMiddlePositionContainer,false);
    let resultLeftPosition;
    if (sliderMiddlePositionContainerStepAdjusted > this.boundaryBoxData.width) {
      resultLeftPosition = this.boundaryBoxData.width - this.sliderWidth / 2;
    } else {
      resultLeftPosition = sliderMiddlePositionContainerStepAdjusted - this.sliderWidth / 2;
    }

    if (sliderMiddlePositionContainerStepAdjusted < - this.sliderWidth / 2) {
      resultLeftPosition = - this.sliderWidth / 2;
      slider.position.x = resultLeftPosition;
      this.updateSegments();
      this.wfewfewf();
      return;
    }
    if (slider.index < this._sliders.length - 1) {
      if (sliderMiddlePositionContainerStepAdjusted - this.sliderWidth / 2 >= this._sliders[slider.index+1].position.x) {
        resultLeftPosition = this._sliders[slider.index+1].position.x;
        slider.position.x = resultLeftPosition;
        slider.value = this._sliders[slider.index+1].value;
        this.updateSegments();
        this.wfewfewf();
        return;
      }
    }
    if (slider.index > 0) {
      if (sliderMiddlePositionContainerStepAdjusted - this.sliderWidth / 2 <= this._sliders[slider.index-1].position.x) {
        resultLeftPosition = this._sliders[slider.index-1].position.x;
        slider.position.x = resultLeftPosition;
        slider.value = this._sliders[slider.index-1].value;
        this.updateSegments();
        this.wfewfewf();
        return;
      }
    }
    slider.position.x = resultLeftPosition;
    this.updateSegments();
    this.wfewfewf();
  }

  initSegments() {
    this._sliders.forEach((s,i) => {
      const startX = i === 0 ? 0 : this._sliders[i-1].position.x + this.sliderWidth / 2;
      const endX = this._sliders[i].position.x + this.sliderWidth / 2;
      const segment: _NgxRatioSliderSegment = {
        cssClass: 'bg-red-400',
        start: {
          x:  startX,
          y: 0
        },
        end: {
          x: endX,
          y: 0
        },
        width: endX - startX
      }
      this._segments.push(segment);
    })

    const startX = this._sliders[this._sliders.length - 1].position.x + this.sliderWidth / 2;
    const endX = this.boundaryBoxData.width + this.sliderWidth / 2;
    const segment: _NgxRatioSliderSegment = {
      cssClass: 'bg-red-200',
      start: {
        x: startX,
        y: 0
      },
      end: {
        x: endX,
        y: 0
      },
      width: endX - startX
    }
    this._segments.push(segment);
  }

  updateSegments() {
    if (this._sliders.length + 1 !== this._segments.length) {
      return;
    }
    this._sliders.forEach((s,i) => {
      const startX = i === 0 ? 0 : this._sliders[i-1].position.x + this.sliderWidth / 2;
      const endX = this._sliders[i].position.x + this.sliderWidth / 2;
      this._segments[i].start.x = startX;
      this._segments[i].end.x = endX;
      this._segments[i].width = endX - startX;
    })

    const startX = this._sliders[this._sliders.length - 1].position.x + this.sliderWidth / 2;
    const endX = this.boundaryBoxData.width + this.sliderWidth / 2;
    this._segments[this._sliders.length].start.x = startX;
    this._segments[this._sliders.length].end.x = endX;
    this._segments[this._sliders.length].width = endX - startX;
    this.calculateStuff();
  }

  moveSteps(slider: _NgxRatioSlider, steps: number = 1):number {
    if (this.mouseMoving) {
      return slider.value;
    }
    let newPosition;
    if (this.oneStepSize) {
      newPosition = slider.position.x + steps * this.oneStepSize;
    } else {
      newPosition = slider.position.x + steps * 1;
    }
    if (slider.index >= 0 && this._sliders.length - 1 > slider.index && steps > 0) {
      const nextSlider = this._sliders[slider.index + 1];
      if (newPosition > nextSlider.position.x) {
        this.updateSegments();
        return slider.value;
      }
    }
    if (slider.index > 0 && steps < 0) {
      const previousSlider = this._sliders[slider.index - 1];
      if (newPosition < previousSlider.position.x) {
        this.updateSegments();
        return slider.value;
      }
    }
    if ((newPosition + this.sliderWidth / 2) > this.boundaryBoxData.width) {
      slider.position.x = this.boundaryBoxData.width - this.sliderWidth / 2;
      this.updateSegments();
      return slider.value;
    }
    if ((newPosition + this.sliderWidth / 2) < 0) {
      slider.position.x = -1 * this.sliderWidth / 2;
      this.updateSegments();
      return slider.value;
    }
    slider.position.x = newPosition;
    this.updateSegments();
    this.outputUpdate();
    this.wfewfewf();
    return 0
  }

  movePosition(slider: _NgxRatioSlider, newStep: number) {
    const steps = newStep;
    this.moveSteps(slider,steps);
  }

  calculateStuff() {
    this._sliders.forEach((s,i) => {
      const t =  (s.position.x + (this.sliderWidth / 2)) / this.boundaryBoxData.width;
      let t2 = roundToDecimalPlaces(t * this.max, this.decimalsStep);
      s.value = t2;
      this.slidersCopy[i].value = t2;
    })
  }

  outputUpdate() {
    this.valueChange.emit({
      sliders: this.slidersCopy
    })
  }


  sliderManualInput(newValue: number,index: number) {
    const origVal = this._sliders[index].value;
    const newStep = newValue - this._sliders[index].value;
    const newV = this.moveSteps(this._sliders[index],newStep);
    if (newV === origVal) {
      setTimeout(() => {
        this._sliders[index].value = origVal;
      });
    }
  }

  wfewfewf() {
    this.ratioSliderManualInput.forEach((slider,i) => {
      slider.left = this._sliders[i].position.x,
      slider.value = this._sliders[i].value
    })
    const maxDistance = 48;
    for (let i = 1; i < this._sliders.length; i += 2) {
      const currentPosition = this._sliders[i].position.x;
      const previousPosition = this._sliders[i-1]?.position.x;
      const nextPosition = this._sliders[i+1]?.position.x;
      let previousDistance: number = 0;
      let nextDistance: number = 0;
      let containerCssClass = 'top-14';
      let arrowCssClass = '';
      if (previousPosition) {
        previousDistance = Math.abs(previousPosition - currentPosition);
      }
      if (nextPosition) {
        nextDistance = Math.abs(nextPosition - currentPosition);
      }
      if (previousDistance < maxDistance || nextDistance < maxDistance) {
        containerCssClass = ' -translate-y-[5.5rem]';
        arrowCssClass = 'rotate-180 translate-y-8';
      }
      this.ratioSliderManualInput[i].containerCssClass = containerCssClass;
      this.ratioSliderManualInput[i].arrowCssClass = arrowCssClass;
    }

  }
}
