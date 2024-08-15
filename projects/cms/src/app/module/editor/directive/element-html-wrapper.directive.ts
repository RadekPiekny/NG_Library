import { ChangeDetectorRef, Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2, SkipSelf } from '@angular/core';
import { EditorService } from '../service/editor.service';
import cloneDeep from 'lodash/cloneDeep';
import { ElementBase, ReusableComponent, WebBlocksComponent } from 'projects/cms/src/app/services/api/models';
import { IACdata } from '../model/general';

@Directive({
  selector: '[elementHTML_Wrapper]'
})
export class ElementHTML_WrapperDirective implements OnDestroy, OnInit {

  constructor(
    @SkipSelf() protected cdrParent: ChangeDetectorRef, // we need to refresh host becouse of host binding on classes and so standard cdr does not do that. This skips current host and get parent and perform change detection on it
    private editorService: EditorService,
    private host: ElementRef,
    private renderer: Renderer2
  ) {}
  ngOnInit(): void {
    this.renderer.setAttribute(this.host.nativeElement,'class',this._data.elementBase.cssClass.map(c => c.className).join(' '));
  }

  activeComponents$ = this.editorService.activeWebBlocksComponents$;

  ngOnDestroy(): void {
    console.log(`Destroy ${this._data.id} - ElementHTML_WrapperDirective`);
  }

  @Input() set elementHTML_Wrapper(v: ElementBase) {
    this._data = v;
    this.renderer.setAttribute(this.host.nativeElement,'class',this._data.elementBase.cssClass.map(c => c.className).join(' '));
  }
  @Output() wrapperEventsDataChange: EventEmitter<ElementBase> = new EventEmitter<ElementBase>();
  @Input() set data(v: ElementBase) { 
    this._data = cloneDeep(v);
    console.log("elementHTMLWrapperDataSet");
    this.renderer.setAttribute(this.host.nativeElement,'class',this._data.elementBase.cssClass.map(c => c.className).join(' '));
  };
  @Input() set acData(ac: IACdata) {
    setTimeout(() => {      
      if (ac.moveoverComponentId === this._data.elementBase.id) {
        this.renderer.addClass(this.host.nativeElement,'component-hover');
      } else {
        this.renderer.removeClass(this.host.nativeElement,'component-hover');
      }
      if (ac.activeComponentsId[0] === this._data.elementBase.id) {
        this.renderer.addClass(this.host.nativeElement,'component-active');
      } else {
        this.renderer.removeClass(this.host.nativeElement,'component-active');
      }
    });
  }
  _data: WebBlocksComponent;
  overlayRef: any;
  coponentRef: any;

  fillComponentBaseData(intance: any) {
    intance.data = this._data;
  }

  toggleActivate() {
    this.editorService.activateWebBlocksComponent(this._data);
  }

  updateLocalData(newData) {
    (this.coponentRef.instance).data = newData;
  }

}
