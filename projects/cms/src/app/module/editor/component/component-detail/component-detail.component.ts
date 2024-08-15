import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ReusableComponentGroup } from 'projects/cms/src/app/services/api/models';
import { ComponentService } from 'projects/cms/src/app/services/api/services';
import { Observable } from 'rxjs';
import { EditorService } from '../../service/editor.service';

@Component({
  selector: 'component-detail',
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentDetailComponent implements OnInit {

  constructor(
    private editorService: EditorService,
    private componentService: ComponentService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { }

  @Input() set type(v: string) {
    this.groups$ = this.componentService.apiComponentEditorComponentGroupsGet$Json({type: v});
  };

  skeleton: boolean = false;
  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams);
    if (this.route.snapshot.queryParams.skeleton) {
      this.skeleton = true;
    }
    this.page$.subscribe(page => {
      if (!page) {
        return;
      }
      this.buttonForm.get('name').patchValue(page.name, { emitEvent: false });
      this.buttonForm.get('groupId').patchValue(page.editorComponentGroupId, { emitEvent: false});
    })
    this.buttonForm.valueChanges.subscribe(v => {
      console.log(v);
      this.editorService.changeWebBlocksComponentName(v.name);
      this.editorService.changeWebBlocksGroupId(v.groupId);
    })
  }

  page$ = this.editorService.page$;
  buttonForm: FormGroup = this.fb.group({
    name: ["name"],
    groupId: null,
  })

  groups$: Observable<ReusableComponentGroup[]>;

}
