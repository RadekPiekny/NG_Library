/*import { ApplicationRef, ChangeDetectorRef, ComponentFactoryResolver, Directive, ElementRef, EventEmitter, Injector, Input, Output, Renderer2, SkipSelf, ViewChild, ViewContainerRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { IElement } from '../../site/model/element.model';
import { IComponentEditMapping } from '../model/compoent/component-edit.model';
import { IElementState, newDefaultState } from '../model/element.model';
import { Overlay } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { getEditMenuOverlay } from '../model/compoent/_component-edit-list.model';
import { EditorService } from '../service/editor.service';
import { componentEditMapping } from '../model/compoent/_component-edit-list.model';
import cloneDeep from 'lodash/cloneDeep';
import { widthClasses } from '../model/css-classes';
import { debounceTime, take } from 'rxjs/operators';
import { ILock, IPropertyDisplay } from '../model/general.model';
import { ElementBase } from 'projects/cms/src/app/services/api/models';*/

import { Directive } from "@angular/core";

@Directive({
  selector: '[componentWrapper]'
})
export class ComponentWrapperDirective {

  /*constructor(
    @SkipSelf() protected cdrParent: ChangeDetectorRef, // we need to refresh host becouse of host binding on classes and so standard cdr does not do that. This skips current host and get parent and perform change detection on it
    public cdr: ChangeDetectorRef,
    public fb: FormBuilder,
    public overlay: Overlay,
    public host: ElementRef,
    private vcr: ViewContainerRef,
    public injector: Injector,
    public componentFactoryResolver: ComponentFactoryResolver,
    public appRef: ApplicationRef,
    private editorService: EditorService,
    private renderer: Renderer2,
  ) {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.activeComponentSubs.unsubscribe();
    this._dataSubscription.unsubscribe();
    this._containerBorder.unsubscribe();
    this._deleteSubscription?.unsubscribe();
    this.removeOverlay();
  }

  ngAfterViewInit(): void {
    // the compoent is appkit or custom having styleClass and style for data binding on itself. For example you can see a button component having #c as angular id
    // TODO probably delete this shit cos I deleted appkit...
    if (this.c) {      
      console.log("ngAfterViewInit");
      this.insertCssClasses(this.c);
      this.insertStyle(this.c);
    }
  }

  componentEditMapping = componentEditMapping;
  coponentRef: any;
  containerBorder: Observable<boolean> = this.editorService.containerBorder.asObservable();
  _deleteSubscription: Subscription;

  @ViewChild('c') c: any;
  _state: IElementState = newDefaultState();
  _data: ElementBase;

  _data$: BehaviorSubject<ElementBase> = new BehaviorSubject<ElementBase>(null); // if we use only standard object then changedetection does not work well despite the fact we change the reference which should trigger it

  _stateSubscription: Subscription;
  _dataSubscription: Subscription;
  _textComponentClick: Subscription;
  _containerBorder: Subscription;
  _form: FormGroup;
  displayMenu: boolean = false;
  overlayRef: any;
  subscription: Subscription;
  activeComponentSubs: Subscription;
  delayChange: number = 150;
  textStuffFuckery: any;

  @Input() set data(val: IElement | any) {   
    this._data$.next(val)
  }; 
  
  @Output() fileChange: EventEmitter<File> = new EventEmitter<File>();

  updateLocalData(newData) {
    this._data$.next(newData);
    (this.coponentRef.instance).data = newData;
    this.cdrParent.markForCheck();
  }

  update() {
    if (this.textStuffFuckery) {
      const whatever: ElementBase = this._data$.getValue();
      whatever.config = this.textStuffFuckery;
      this.editorService.updateComponentData(whatever);
      return;
    }
    this.editorService.updateComponentData(this._data$.getValue() as ElementBase);
  }

  stateChange(newState) {
    if (newState === null) {
      return;
    }
    if (JSON.stringify(this._state) === JSON.stringify(newState)) {
      console.log("same state");
      return;
    }
    this._state = newState;
    if (this._state.active) {
      this.activate();
    } else {
      this.deactivate();
    }
  }

  ngOnInit(): void {
    this._data = this._data$.getValue();
    if (this._data.config) {      
      const form = this.generateFormGroup(this._data.config); // automatic generation of the form for all components based on default model;
      if (this._data.lock) {
        this.formDisableChange(form,this._data.lock?.config);
      }
      this._form = form;

      this.subscription = this._form.valueChanges.pipe(
        debounceTime(this.delayChange)
      ).subscribe(d => {
        //valuechanges does not emit disabled controls...so we use _form
        console.log(d);
        if (this._data.className === 'TextComponent') {
          //this._data.config = d;
          //this._data$.next(d);\
          this.textStuffFuckery = this._form.getRawValue();
          return;
        }
        const newData = cloneDeep(this._data); // we need to change reference so that this gets updated 
        if (this._form.getRawValue()) {
          newData.config = this._form.getRawValue();
        }
        this.updateLocalData(newData);
      })
      setTimeout(() => {
        this._form.patchValue(this._data.config);
      }, 10);
    }
    this.createComponent();
    this.changeCssClasses(this._data.cssClass);
    if (this._data.className === 'TextComponent') { // we need to reduce delay as the user can be faster than initial 500ms clicking outside the text element. For instance when only click on Bold and then click away from the textelement. Generally noone will be faster than 33ms.
      this.delayChange = 33;
    }
    this._containerBorder = this.containerBorder.subscribe(border => {
      if (border && this._data.className === 'ContainerEditComponent') {
        if (this._data.cssClass.find(cssClass => cssClass.startsWith('bg-'))) {
          return; // if there is a background then we dont need border to show the container. TODO -> this might fail if the background is transparent or has parent with the same color etc...
        }
        this.addParentClass('bordered');
      }
    });

    
    this._dataSubscription = this._data$.subscribe(d => {
      this.changeCssClasses(d.cssClass);
    })
    this.activeComponentSubs = this.editorService.activeComponents$.subscribe(componentGroups => {
      let newState: IElementState;
      if (componentGroups.find(componentGroup => componentGroup.id === this._data.id)) {
        newState = {
          active: true,
          editMode: true,
          hover: false
        };
      } else {
        newState = {
          active: false,
          editMode: true,
          hover: false
        };
      }
      if (JSON.stringify(this._state) === JSON.stringify(newState) ) {
        return;
      }
      this.stateChange(newState);
    })
  }

  generateFormGroup(obj: Object): FormGroup {
    const form = new FormGroup({});
    Object.keys(obj).forEach(key => {
      if (Array.isArray(obj[key])) {
        form.addControl(key, new FormControl(obj[key]));
        return;
      }
      if (typeof obj[key] === 'object') {
        const nestedForm = this.generateFormGroup(obj[key])
        form.addControl(key, nestedForm);
        return;
      }
      form.addControl(key, new FormControl(obj[key]));
    })
    return form
  }

  insertCssClasses(c: any) { // dynamic component
    c.styleClass = (this._data$.getValue().config as IElement).cssClass;
  }

  changeCssClasses(classList: string[]) {
    let newClassList: string[] = [];
    if (this._state.active) {
      newClassList = [...classList, 'element-edit-active'];
    } else {
      newClassList = [...classList];
    }
    if (this.vcr.element.nativeElement.parentElement.children[0]) { // div is only for dragging but there is only one child with all the data inside
      const widthClass: string[] = newClassList.filter(cssClass => widthClasses.some(v => v.value === cssClass));
      let elementClassList: string[] = [...newClassList];
      if (widthClass.length > 1) {
        throw('there are more than 1 width class. Fix this shit dev!')
      }
      if (widthClass.length === 1) {
        let parentCssClasses: string[] = [...this.vcr.element.nativeElement.parentElement.classList];
        parentCssClasses = parentCssClasses.filter(cssClass => !widthClasses.some(v => v.value === cssClass));
        this.changeParentClasses([...parentCssClasses,widthClass[0]]);
        elementClassList = elementClassList.filter(cssClass => cssClass !== widthClass[0]);
      }
      this.renderer.setAttribute(this.vcr.element.nativeElement.parentElement.children[0],'class',elementClassList.join(' '));
    }
  }

  addParentClass(cssClass: string) {
    const parentCssClasses: string[] = [...this.vcr.element.nativeElement.parentElement.classList, cssClass];
    this.renderer.setAttribute(this.vcr.element.nativeElement.parentElement,'class',parentCssClasses.join(' '));
  }

  changeParentClasses(cssClasses: string[]) {
    this.renderer.setAttribute(this.vcr.element.nativeElement.parentElement,'class',cssClasses.join(' '));
  }

  insertStyle(c: any) {
    c.style = (this._data$.getValue().config as IElement).style;
  }

  toggleActivate() {
    this.editorService.activateComponent(this._data);
  }

  activate() {
    this.changeCssClasses(this._data$.getValue().cssClass);
    const editMapping: IComponentEditMapping = getEditMenuOverlay(this._data$.getValue().className);
    if (editMapping.editComponent.editMenuOverlay) {
      this.displayOverlay();
    }
  }
  
  deactivate() {
    this.removeOverlay();
    this.update(); // update the whole page component tree with the local value of this component
    this._textComponentClick?.unsubscribe();
  }


  displayOverlay() {
    const editMapping: IComponentEditMapping = getEditMenuOverlay(this._data$.getValue().className);
    const backdrop: boolean = editMapping.editComponent.editMenuBehavior.hasBackdrop;
    this.overlayRef = this.overlay.create({
      hasBackdrop: backdrop,
      backdropClass: "cdk-overlay-transparent-backdrop",
      panelClass: "",
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(this.vcr.element.nativeElement.parentElement)
        .withPositions(editMapping.editComponent.editMenuBehavior.connectedPosition)
    });
    const component = new ComponentPortal(editMapping.editComponent.editMenuOverlay);

    const componentRef = this.overlayRef.attach(component);
    this.fillComponentBaseData(componentRef.instance);
    this._deleteSubscription = componentRef.instance.delete.subscribe(() => {
      this.editorService.deleteComponent(this._data)
    })
    if (backdrop) {
      this.overlayRef.backdropClick().pipe(take(1)).subscribe(() => this.toggleActivate());
    }
  }

  fillComponentBaseData(intance: any) {
    intance.data = this._data$.getValue();
    intance.form = this._form;
    intance.elementBaseChange && intance.elementBaseChange.subscribe((d: ElementBase) => {
      console.log("element base change");
      const newData = cloneDeep(this._data$.getValue());
      newData.classList = d.cssClass;
      newData.style = d.style;
      //this._data = newData;
      this._data$.next(newData);
    })

    intance.elementLockChange && intance.elementLockChange.subscribe((d: ILock) => {
      const newData: ElementBase = cloneDeep(this._data$.getValue());
      newData.lock = d;
      this.formDisableChange(this._form,d.config);
      this._data = newData;
      this._data$.next(newData);
    })
  }

  formDisableChange(f: FormGroup = this._form, lock: IPropertyDisplay[]) {
    Object.keys(f.controls).forEach(key => {
      const control: AbstractControl = f.get(key);
      const x = lock.filter(l => l.name === key)[0];
      if (!x) {
        throw(`there is no lock key for ${key}`);
      }
      if (control instanceof FormGroup) {
        console.log("this is form group:", f.get(key));
        this.formDisableChange(control,x.children)
        return;
      }
      if (x.locked) {
        control.disable();
      } else {
        control.enable();
      }
    });
  }

  removeOverlay() {
    this.overlayRef?.detach();
    this._deleteSubscription?.unsubscribe();
  }

  createComponent() {
    const editComponent: IComponentEditMapping = this.componentEditMapping.find(f => f.sourceComponent === this._data.className);
    if (!editComponent) {
      console.log(`There is no mapped component to a ${this._data.className}. It has not been properly added to the list. Please read wiki on how to create a new component. If you dont know what wiki, than it has not been created and you are pretty much fucked and will spent 3 days analazing how this shit works. GL HF`);
      return;
    }
    this.coponentRef =  this.vcr.createComponent(editComponent.editComponent.class as any);
    (this.coponentRef.instance).data = this._data;
    if (editComponent.editComponent.editMenuOverlay === null) {
      this.fillComponentBaseData(this.coponentRef.instance);
    }
  }*/

}
