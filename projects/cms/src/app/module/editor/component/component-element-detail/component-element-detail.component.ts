import { Component, Input, OnInit } from '@angular/core';
import { WebBlocksComponent } from 'projects/cms/src/app/services/api/models';
import { defaultElements } from '../../model/default-components.model';
import { EditorService } from '../../service/editor.service';

@Component({
  selector: 'component-element-detail',
  templateUrl: './component-element-detail.component.html'
})
export class ComponentElementDetailComponent implements OnInit {

  constructor(
    private editorService: EditorService,
  ) {}

  defaultElements = defaultElements;

  ngOnInit(): void {
    
  }

  init() {
    if (this._webBlocksComponent.reusableComponentId === null) {
      // if user clicks on a component that has a parent which is the exactly same size
      // as the first children, then child selected would not have the id of reusable component
      // so we search recursivly parent till we found a component with such existing id
      
      const parent = this.editorService.getParentContainer(this._webBlocksComponent);
      parent.reusableComponentId;
      const mappedReusableComponent = this.editorService.rcMapping.find(rc => rc.id === parent.reusableComponentId);
      if (mappedReusableComponent) {
        this.componentName = mappedReusableComponent.name;
      } else {
        this.componentName = "Error in RC mapping";
      }

    } else {
      const foundStuff = defaultElements.find(de => de.obj.elementBase.className === this._webBlocksComponent.elementBase.className);
      if (foundStuff) {
        this.componentName = foundStuff.name;
        return;
      }
      const mappedReusableComponent = this.editorService.rcMapping.find(rc => rc.id === this._webBlocksComponent.reusableComponentId);
      if (mappedReusableComponent) {
        this.componentName = mappedReusableComponent.name;
      } else {
        this.componentName = "Error in RC mapping";
      }
    }
  }

  _webBlocksComponent: WebBlocksComponent;
  @Input() set webBlocksComponent(v: WebBlocksComponent) {
    this._webBlocksComponent = v;
    this.init();
  }
  componentName: string;

  dataChange(originalComponent: WebBlocksComponent, change: WebBlocksComponent) {
    this.editorService.updateWebBlocksComponentData(change);
  }

  deleteComponent(component: WebBlocksComponent) {
    this.editorService.deleteWebBlocksComponent(component);
  }

  duplicateComponent(component: WebBlocksComponent) {
    this.editorService.duplicateComponent(component);
  }
}
