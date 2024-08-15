import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ReusableComponent, ReusableComponentGroup, WebBlocksComponent } from 'projects/cms/src/app/services/api/models';
import { ComponentService } from 'projects/cms/src/app/services/api/services';
import { defaultElements, IGenericComponent } from '../../model/default-components.model';
import { EditorService } from '../../service/editor.service';
import cloneDeep from 'lodash/cloneDeep';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'site-controls-elements',
  templateUrl: './site-controls-elements.component.html',
  styleUrls: ['./site-controls-elements.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiteControlsElementsComponent {

  constructor(
    private editorService: EditorService,
    private componentService: ComponentService 
  ) { }

  newComponent(c: IGenericComponent) {
    const newComponent: WebBlocksComponent = c.fnc();
    console.log(newComponent);
    newComponent.elementBase.id = this.editorService.idGenerate();

    if (!this.editorService.getState()) {
      this.editorService.initComponentState(newComponent);
      return;
    }

    this.editorService.addGenericWebBlocksComponent(newComponent);

  }

  _skeleton: boolean = false;
  @Input() set skeleton(v: boolean) {
    this.groups$ = this.componentService.apiComponentEditorComponentGroupsGet$Json({includeComponents: true,skeleton: v}).pipe(
      map(data => {
        let xx = [];
        const rc = data.map(g => {
          const filteredGroup = g.reusableComponents.filter(rc => rc.webBlocksComponent !== null);
          g.reusableComponents = filteredGroup;
          const mapping = g.reusableComponents.map(rc => {
            return {id: rc.id, name: rc.name}
          });
          xx = [...xx,...mapping];
          return g;
        })
        this.editorService.rcMapping = [...xx];
        return rc;
      })
    );
  };

  defaultElements = defaultElements;
  groups$: Observable<ReusableComponentGroup[]>;

  test(e: ReusableComponent) {
    const newComponent: WebBlocksComponent = cloneDeep(e.webBlocksComponent);
    const newComponentWithNewIds = this.newIds(newComponent); // for moving stuff around. Once we save the component we remove all ids and let the DB to generate those on its own
    newComponentWithNewIds.reusableComponentId = e.id;
    this.editorService.addGenericWebBlocksComponent(newComponentWithNewIds);
  }

  newIds(e: WebBlocksComponent): WebBlocksComponent {
    e.elementBase.id = this.editorService.idGenerate();
    if (e.children.length) {
      e.children.forEach(wbc => {
        this.newIds(wbc)
      })
    }
    return e
  }
}

