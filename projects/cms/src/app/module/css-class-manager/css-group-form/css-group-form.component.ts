import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CssGroup } from '../../../services/api/models';
import { CssGroupService } from '../../../services/api/services';

@Component({
  selector: 'css-group-form',
  templateUrl: './css-group-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CssGroupFormComponent implements OnInit {
  
  constructor(
    private cssGroupService: CssGroupService
  ) {}
  
  @Input() parentId: number;
  @Input() CssGroup?: CssGroup;

  groupForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    parentId: new FormControl(null),
    shortDescription: new FormControl(''),
    description: new FormControl('')
  });

  ngOnInit(): void {
    if (this.parentId !== -1) {
      this.groupForm.get('parentId').patchValue(this.parentId);
    }
    if (this.CssGroup) {
      this.groupForm.patchValue(this.CssGroup);
    }
  }

  create() {
    this.cssGroupService.apiCssGroupPost$Json({body: this.groupForm.value}).subscribe();
  }

  update() {
    this.cssGroupService.apiCssGroupUpdatePost({body: this.groupForm.value}).subscribe();
  }
}

