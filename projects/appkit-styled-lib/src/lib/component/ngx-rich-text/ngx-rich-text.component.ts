import { ConnectedPosition, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { take } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { SelectedLinkState } from './config';
import {
  IRichTextControlState,
  configMapToLocalState,
  IRichTextControlConfig,
  defaultConfig,
  allowedFontSizes
} from './interface';
import { overlayMappings } from './overlay-mapping';

@Component({
  selector: 'ngx-rich-text',
  templateUrl: './ngx-rich-text.component.html',
  styleUrls: ['./ngx-rich-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxRichTextComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxRichTextComponent implements OnInit, ControlValueAccessor {
  @Input() config: IRichTextControlConfig[] = defaultConfig;
  @Input() editedElement!: HTMLElement; // the rich text is only means to be an overlay or stand alone component you can put to the top of the edited element but you need to supply edited element. In HTML template you can use angular #editor and then in the <ngx-rich-text [editedElement]="editor"></ngx-rich-text>
  @Output() htmlChange: EventEmitter<string> = new EventEmitter<string>(); // output the whole innerHTML of the edited element
  @Input() variation : string;

  localConfig!: (IRichTextControlState | null)[];
  selectedLinkState: SelectedLinkState = SelectedLinkState.noLink;
  overlayData: any;

  private selection!: Selection | null;
  private selectionStartOffset!: number;
  private selectionEndOffset!: number;
  private selectionStartNode!: Node;
  private selectionEndNode!: Node;

  constructor(
    public sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef,
    public overlay: Overlay
  ) {}


  onChange!: Function;
  _disabled = false;
  onTouched!: () => void;

  writeValue(obj: any): void {
    this.editedElement.innerHTML = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.variation) {
      if(this.variation === 'simple') {
        let simpleRichText: IRichTextControlConfig[] = [];
        this.config.forEach(button => {
          if(button.visibility === true) {
            simpleRichText.push(button)
          }
        })
        this.localConfig = configMapToLocalState(simpleRichText)
      }
      else {
        this.localConfig = configMapToLocalState(this.config);
      }
    }
  }

  ngOnInit(): void {
    document.onselectionchange = () => {
      // Check if the editor is focussed
      if (this.editedElement === document.activeElement) {
        this.localConfig.forEach((control) => {
          if (control) {            
            const controlActive =
              !!this.activatedStyle(control);
            control.active = controlActive;
          }
        });
        this.cdr.markForCheck();
      }
    };
  }

  activatedStyle(control: IRichTextControlState) {
    let controlActive;
    switch (control.name) {
      case 'fontName':
        controlActive = this.activeFont();
        break;
      case 'fontSize':
        controlActive = this.activeSize();
        break;
      case 'createLink':
        controlActive = this.activeLink();
        break;
      case 'justifyLeft':
        controlActive = this.activeJustify('left');
        break;
      case 'justifyCenter':
        controlActive = this.activeJustify('center');
        break;
      case 'justifyRight':
        controlActive = this.activeJustify('right');
        break;
      case 'justifyFull':
        controlActive = this.activeJustify('justify');
        break;
      default:
        controlActive = this.activeTag(control.tag);
        break;
    }
    return controlActive;
  }

  removeFormatting(): void {
    this.unlink();
    this.format('removeFormat');
  }

  format(command: string, value?: string, event?: Event): void {
    if (command === 'fontSize' && value) {
      this.changeFontFN(value);
      return;
    }
    document.execCommand(command, false, value);
    this.update();
    // once execCommand goes bust, since it is depreciated, we need to change the whole thing to the bellow. Hopefully I am not goign to be in the company no more
    /*
    const strongElement = document.createElement("strong");
    const userSelection = window.getSelection();
    const selectedTextRange = userSelection.getRangeAt(0);
    selectedTextRange.surroundContents(strongElement);
    */
  }

  unlink(): void {
    this.editedElement.focus();
    this.getWord();
    document.execCommand('unlink');
  }

  isCommandApplied(command: string): boolean {
    return document.queryCommandState(command);
  }

  @HostListener('document:keyup', ['$event']) keyUp(event: KeyboardEvent): void {
    if (!this.fwefewfew()) return;
    this.editedElement && this.update();
  }

  update() {
    const v: string = this.editedElement.innerHTML;
    this.htmlChange.emit(v);
    this.onChange && this.onChange(v);
  }

  displayOverlay(item: IRichTextControlState, element: any) {
    const c: any = overlayMappings.find(
      (om) => om.className === item.overlay.className
    ).class;
    const position_1: ConnectedPosition = {
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'bottom'
    };
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      panelClass: ['shadow','dark:bg-neutral-800','bg-white'],
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(element.el.nativeElement)
        .withPositions([position_1])
    });
    const component = new ComponentPortal(c);
    let selectedData = this.activatedStyle(item);
    const componentRef = overlayRef.attach(component);
    (componentRef.instance as any).data = item.overlay.data;
    (componentRef.instance as any).selectedData = selectedData
      ? selectedData
      : null;
    if ((componentRef.instance as any).editorElement) {
      (componentRef.instance as any).editorElement = this.editedElement;
    }
    (componentRef.instance as any).valueChange.subscribe((val: any) => {
      if (this.selection) {
        this.restoreSelection();
        if (item.name === 'createLink') {
          this.unlink();
        }
        this.format(item.name, val);
      }
      overlayRef.detach();
      this.update();
    });
    overlayRef.backdropClick().pipe(take(1)).subscribe(() => {
      overlayRef.detach();
      this.update();
    });
  }

  controlActivate(item: IRichTextControlState | null, element: any) {
    if (!item) {
      return;
    }
    if (!this.fwefewfew()) return;
    if (item.overlay) {
      this.saveSelection();
      this.displayOverlay(item, element);
      return;
    }
    this.format(item.name);
  }

  saveSelection(): void {
    this.selection = window.getSelection();
    if (this.selection) {      
      this.selectionStartNode = this.selection.getRangeAt(0).startContainer;
      this.selectionEndNode = this.selection.getRangeAt(0).endContainer;
      this.selectionStartOffset = this.selection.getRangeAt(0).startOffset;
      this.selectionEndOffset = this.selection.getRangeAt(0).endOffset;
    }
  }

  restoreSelection(): void {
    this.editedElement.focus();
    if (this.selection) {      
      this.selection.setBaseAndExtent(
        this.selectionStartNode,
        this.selectionStartOffset,
        this.selectionEndNode,
        this.selectionEndOffset
      );
    }
  }

  activeSize(allowedSize: string[] = allowedFontSizes): string | undefined {
    const selection = window.getSelection();
    if (selection) {      
      let currentNode: any = selection.focusNode;
      while (currentNode !== this.editedElement) {
        const allowedClass = [...currentNode.parentNode.classList].find(
          (cssClass) => allowedSize.includes(cssClass)
        );
        if (allowedClass) {
          return allowedClass;
        }
        currentNode = currentNode.parentNode;
      }
    }
    return undefined;
  }

  fwefewfew(): boolean {
    const selection = window.getSelection();
    if (selection) {
      let currentNode: any = selection.focusNode;
      if (!currentNode) {
        return false;
      }
      while (currentNode.nodeName !== 'BODY') {
        if (currentNode === this.editedElement) {
          return true;
        }
        currentNode = currentNode.parentNode;
      }
    }
    return false;
  }

  activeTag(tag: string): boolean {
    const selection = window.getSelection();
    if (selection) {
      let currentNode: any = selection.focusNode;

      while (currentNode !== this.editedElement) {
        if (
          (currentNode.tagName as string)?.toLowerCase() === tag.toLowerCase()
        ) {
          return true;
        }
        currentNode = currentNode.parentNode;
      }
    }
    return false;
  }

  activeJustify(justifyType: 'left' | 'center' | 'right' | 'justify'): boolean {
    const selection = window.getSelection();
    if (selection) {
      let currentNode: any = selection.focusNode;
      while (currentNode !== this.editedElement) {
        if (currentNode.tagName === 'DIV') {
          const t = currentNode.style.textAlign === justifyType;
          return t;
        }
        currentNode = currentNode.parentNode;
      }
    }
    return false;
  }

  activeFont(): undefined | string {
    const selection = window.getSelection();
    if (selection) {
      let currentNode: any = selection.focusNode;
      while (currentNode !== this.editedElement) {
        if (currentNode.parentElement.face) {
          return currentNode.parentElement.face;
        }
        currentNode = currentNode.parentNode;
      }
    }
    return undefined;
  }

  activeLink(): string {
    const selection = window.getSelection();
    if (selection) {
      let currentNode: any = selection.focusNode;
      while (currentNode !== this.editedElement) {
        if (currentNode.pathname) {
          return currentNode.pathname.substring(1);
        }
        currentNode = currentNode.parentNode;
      }
    }
    return '';
  }

  getWord() {
    const selection: any = window.getSelection();
    selection.modify('move', 'backward', 'word');
    selection.modify('extend', 'forward', 'word');
  }

  changeFontFN(size: string): void {
    this.restoreSelection();
    document.execCommand('fontSize', false, '7');
    const fontElements = document.getElementsByTagName('font');
    for (let i = 0, len = fontElements.length; i < len; ++i) {
      if ((fontElements[i] as any).size === '7') { // new angular says error...I dont even know what this is..
        fontElements[i].removeAttribute('size');
        (fontElements[i] as any).style.fontSize = size;
        allowedFontSizes.forEach((c) => {
          fontElements[i].classList.remove(c);
        });
        fontElements[i].classList.toggle(size);
      }
    }
    this.saveSelection();
    this.restoreSelection();
  }
}
