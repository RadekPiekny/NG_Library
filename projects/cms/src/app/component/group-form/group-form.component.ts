import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReusableComponentGroup } from '../../services/api/models';
import { ComponentService } from '../../services/api/services';

@Component({
  selector: 'group-form',
  templateUrl: './group-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupFormComponent {

  constructor(
    private componentService: ComponentService
  ) { }

  newGroup: FormGroup = new FormGroup({
    name: new FormControl(''),
    parentId: new FormControl(null),
    type: new FormControl(null),
    description: new FormControl(null),
  });

  newComponentGroups(form: FormGroup) {
    const rc: ReusableComponentGroup = {
      name: form.get('name').value,
      parentId: form.get('parentId').value,
      type: form.get('type').value,
      description: form.get('description').value
    } 
    this.componentService.apiComponentEditorComponentGroupPost$Json({body: rc}).subscribe();
  }
}
