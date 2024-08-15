import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ReusableComponent } from '../../../services/api/models';
import { ComponentService } from '../../../services/api/services';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateComponent {

  constructor(
    private componentService: ComponentService
  ) { }

  groupModal: number = 0;
  
  ComponentGroups$ = this.componentService.apiComponentEditorComponentGroupsGet$Json({includeComponents: true, skeleton: false, type: 'template'}).pipe(
    tap(data => {
      console.log(data);
    })
  );

  deleteGroup(id: number) {
    this.componentService.apiComponentEditorComponentGroupDelete$Json({id}).subscribe();
  }

  deleteComponent(id: number) {
    this.componentService.apiComponentReusableIdDelete$Json({id}).subscribe();
  }

  createNew() {
    console.log("not exists componetn emit 'create new'");
    this.groupModal = -1;
  }
  
}
