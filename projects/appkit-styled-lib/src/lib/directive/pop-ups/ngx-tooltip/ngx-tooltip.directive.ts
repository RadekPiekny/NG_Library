import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  Output,
  Renderer2,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import {
  ConnectionPositionPair,
  Overlay,
  OverlayRef
} from '@angular/cdk/overlay';
import { DomPortal } from '@angular/cdk/portal';

@Directive({
  selector: 'tooltip,[tooltip]'
})
export class NgxTooltipDirective implements OnDestroy {
  private overlayRef: OverlayRef | undefined;
  private tooltipRef: HTMLElement | undefined;

  //dev can change behavior of the positioning
  @Input() positions: ConnectionPositionPair[] = [
    new ConnectionPositionPair(
      { originX: 'center', originY: 'top' },
      { overlayX: 'center', overlayY: 'bottom' }
    ),
    new ConnectionPositionPair(
      { originX: 'start', originY: 'top' },
      { overlayX: 'start', overlayY: 'bottom' }
    ),
    new ConnectionPositionPair(
      { originX: 'end', originY: 'top' },
      { overlayX: 'end', overlayY: 'bottom' }
    ),
    new ConnectionPositionPair(
      { originX: 'center', originY: 'bottom' },
      { overlayX: 'center', overlayY: 'top' }
    ),
    new ConnectionPositionPair(
      { originX: 'start', originY: 'bottom' },
      { overlayX: 'start', overlayY: 'top' }
    ),
    new ConnectionPositionPair(
      { originX: 'end', originY: 'bottom' },
      { overlayX: 'end', overlayY: 'top' }
    ),
  ];

  _tooltip: any = '';
  @Input() set tooltip(v: any) {
    this._tooltip = v;
    if (this.tooltipRef) {
      this.tooltipRef.innerHTML = this._tooltip;
    }
  };
  @Output() tooltipExit: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private element: ElementRef,
    private overlay: Overlay,
    private renderer: Renderer2,
    private vcr: ViewContainerRef
  ) {

  }

  ngOnDestroy(): void {
    this.removal();
  }

  @HostListener('mouseenter') mouseEnterListener(): void {
    const overlayConfig = this.overlay
    .position()
    .flexibleConnectedTo(this.element)
    .withPositions(this.positions);
  this.overlayRef = this.overlay.create({
    positionStrategy: overlayConfig
  });
    if (this.empty) {
      return;
    }
    this.tooltipRef = this.renderer.createElement('div');


    // tooltip has only text. By W3C standard that is what tooltip should be but some apps want additional complexity so we
    // can use template ref like <ng-template in the condition -> this._tooltip instanceof TemplateRef)

    const defaultClasses: string[] = [
      'text-xs', 
      'rounded-md',
      'min-w-12',
      'text-center',
      'whitespace-nowrap',
      'shadow-md',
      'dark:bg-[rgba(255,255,255,0.72)]',
      'dark:text-[black]',
      'text-white',
      'bg-[rgba(0,0,0,0.72)]',
      'backdrop-blur-[5px]'
    ]
    if (typeof this._tooltip === 'string') {

      // only if the tooltip is simple text we want to style it. Otherwise if dev uses <ng-template #XXX> then let the dev use their styling
      if (this.tooltipRef) {        
        this.tooltipRef.classList.add(
          'my-1', 
          'mx-3', 
          'px-3', 
          'py-1',
          ...defaultClasses
        );
      }
    }
    // this is the <ng-template #XXX>some content<ng-template>
    // code looks like:
    //
    // <div [tooltip]="myOwnTooltip">element</div>
    // <ng-template #myOwnTooltip>
    //    <div class="some-class">custom tooltip</div>
    // <ng-template>
    if (this.tooltipRef) {
        
      if (this._tooltip instanceof TemplateRef) {
  
        this.tooltipRef.classList.add();
        const view = this.vcr.createEmbeddedView(<TemplateRef<any>>this._tooltip);
        view.rootNodes.forEach((node) => {     
          this.renderer.appendChild(this.tooltipRef, node);
        });
      } else {
        this.tooltipRef.innerHTML = this._tooltip;
      }
      this.renderer.appendChild(document.querySelector('body'), this.tooltipRef);
      if (this.overlayRef) {
        this.overlayRef.attach(new DomPortal(this.tooltipRef));
      }
    }
  }

  @HostListener('mouseleave') mouseLeaveListener(): void {
    this.removal();
  }

  removal() {
    this.overlayRef?.detach();
    this.tooltipExit.emit();
    if (this.tooltipRef) {
      this.renderer.removeChild(
        document.querySelector('body'),
        this.tooltipRef
      );
    }
  }

  // easier for a dev to conditionally change html template. With this they do not have to do something like [attr.tooltip]="condition ? true : null" but use just normal binding
  get empty() {
    return this._tooltip === '' || this._tooltip === null;
  }

}

