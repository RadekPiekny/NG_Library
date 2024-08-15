import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReusableComponentGroup } from '../../../services/api/models';
import { ComponentService } from '../../../services/api/services';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html'
})
export class ComponentComponent {
  
  constructor(
    private componentService: ComponentService
  ) { }

  ComponentGroups$ = this.componentService.apiComponentEditorComponentGroupsGet$Json({includeComponents: true});

  deleteComponent(id: number) {
    this.componentService.apiComponentReusableIdDelete$Json({id}).subscribe();
  }

  deleteGroup(id: number) {
    this.componentService.apiComponentEditorComponentGroupDelete$Json({id}).subscribe();
  }





  createComponent(id: number) {
    
  }

}
