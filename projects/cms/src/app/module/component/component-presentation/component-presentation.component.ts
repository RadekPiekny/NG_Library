import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComponentService } from '../../../services/api/services';

@Component({
  selector: 'app-component-presentation',
  templateUrl: './component-presentation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentPresentationComponent {

  constructor(
    private componentService: ComponentService
  ) { }
  
  ComponentGroups$ = this.componentService.apiComponentEditorComponentGroupsGet$Json({includeComponents: true, skeleton: true, type: 'component'});

  deleteGroup(id: number) {
    this.componentService.apiComponentEditorComponentGroupDelete$Json({id}).subscribe();
  }

  deleteComponent(id: number) {
    this.componentService.apiComponentReusableIdDelete$Json({id}).subscribe();
  }
}
