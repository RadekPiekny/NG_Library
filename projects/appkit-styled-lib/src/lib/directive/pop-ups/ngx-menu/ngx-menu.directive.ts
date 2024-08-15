import {
  Directive,
  ElementRef,
  EmbeddedViewRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  Output,
  Renderer2,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { ConnectedPosition, Overlay, OverlayRef, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { DomPortal } from '@angular/cdk/portal';
import {
  position_1,
  position_2,
  position_3,
  position_4
} from './position.menu';
import { Subscription } from 'rxjs';
import { AnimationBuilder } from '@angular/animations';
import { slideFromBottomEnter, slideFromBottomLeave } from '@rp_custom_library/appkit-styled-lib/src/lib/animation';

@Directive({
  selector: '[menu]'
})
export class NgxMenuDirective implements OnDestroy {
  private attributeForRemovalAfterClick = 'menu-close';
  private overlayRef: OverlayRef | undefined;
  private closeMenuClickListeners: any[] = [];

  @Input()
  menu!: TemplateRef<any>; // #idOfThisContainer for use with ng template or <div #idOfThisContainer></div>
  @Input() menuAutoClose = true;
  @Input() menuClickClose = true;
  @Input() closeAfterScroll: boolean = false;
  @Input() menuCloseDelay = 600;
  @Input() connectedPositions: ConnectedPosition[] = [position_1, position_2, position_3, position_4];
  @Input() set menuClose(v: boolean) {
    if (v) {
      this.closeMenu(false);
    }
  }
  @Output() menuClickOutside: EventEmitter<void> = new EventEmitter<void>();
  @Output() menuCloseChange: EventEmitter<void> = new EventEmitter<void>();

  menuContainer: HTMLDivElement | undefined;
  embeddedViewRef: EmbeddedViewRef<any> | undefined;
  subscription: Subscription = new Subscription;

  constructor(
    private hostElement: ElementRef,
    private overlay: Overlay,
    private renderer: Renderer2,
    private _viewContainer: ViewContainerRef,
    private builder: AnimationBuilder,
    private readonly sso: ScrollStrategyOptions
  ) {}

  ngOnDestroy(): void {
    this.closeMenu(false);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  createOverlay() {
    this.overlayRef = this.overlay.create({
      scrollStrategy: this.closeAfterScroll ? this.overlay.scrollStrategies.close() : this.overlay.scrollStrategies.reposition(),
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      panelClass: 'mat-elevation-z8',
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(this.hostElement)
        .withPositions(this.connectedPositions)
        .withLockedPosition(true)
    });
  }

  open() {
    this.menuContainer = this.renderer.createElement('div');
    this.renderer.appendChild(
      document.querySelector('body'),
      this.menuContainer
    );
    if (this.overlayRef) {
      this.overlayRef.attach(new DomPortal(this.menuContainer));
    }

    this.embeddedViewRef = this._viewContainer.createEmbeddedView(this.menu);
    this.embeddedViewRef.detectChanges();

    this.embeddedViewRef.rootNodes.forEach((node: any) => {
      this.renderer.appendChild(this.menuContainer, node);
      node.addEventListener('click', this.clicked.bind(this), true);
      this.closeMenuClickListeners.push(node);
    });

    if (this.overlayRef) {      
      this.subscription = this.overlayRef.backdropClick().subscribe(() => {
        this.menuClickOutside.emit();
        if (this.menuAutoClose) {
          this.closeMenu(true);
        }
      });
    }

    const metadata = slideFromBottomEnter;
    const factory = this.builder.build(metadata);
    const player = factory.create(this.menuContainer);
    player.play();
  }

  @HostListener('click') mouseEnterListener(): void {
    this.createOverlay();
    this.open();
  }

  animateClose(fn: Function,delay: number) {
    setTimeout(() => {
      const metadata = slideFromBottomLeave;
      const factory = this.builder.build(metadata);
      const player = factory.create(this.menuContainer);
      player.play();
      player.onDone(() => {
        fn();
      })
    }, delay);
  }

  menuRemoval() {
    if (!this) {
      return;
    }
    this.removeAllClickEvents();
    this.menuCloseChange.emit();
    if (this.overlayRef) {
      this.overlayRef.detach();
    }
    if (this.embeddedViewRef) {
      this.embeddedViewRef.destroy();
    }
    if (this.menuContainer) {      
      this.renderer.removeChild(
        document.querySelector('body'),
        this.menuContainer
      );
    }
  }

  closeMenu(clickOutside: boolean) {
    let delay: number = this.menuCloseDelay;
    if (clickOutside) {
      delay = 0;
    }
    if (this.menuContainer) {
      this.animateClose(this.menuRemoval.bind(this),delay);
    } else {
      this.menuRemoval();
    }
  }

  clicked(e: any) {
    // setTimeout needs to be here becouse we need to perform first action on the element
    // that has the attribute attributeForRemovalAfterClick and only then remove the menu. and so
    // we move this to the queue stack
    // typically using routerlink would not be called etc. 
    let currentEl = e.target;
    const closed: boolean = this.ff(currentEl);
    while (currentEl !== this.menuContainer && currentEl.parentElement) {    
      currentEl = currentEl.parentElement;
      if (!closed && currentEl !== this.menuContainer) {
        const closed: boolean = this.ff(currentEl);
        if (closed) {
          return;
        }
      }
    }
  }

  ff(el: any): boolean {
    const attributes: string[] = el.getAttributeNames();
    if (this.menuClickClose) {
      this.closeMenu(false);
      return true;
    }
    if (attributes.includes(this.attributeForRemovalAfterClick)) {
      this.closeMenu(false);
      return true
    }
    return false
  }

  removeAllClickEvents() {
    this.closeMenuClickListeners.forEach((node) => {
      node.removeEventListener('click', this.clicked.bind(this), true);
    });
  }

}
