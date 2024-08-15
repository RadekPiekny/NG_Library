import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { CssClass, CssGroup } from '../../../services/api/models';
import { CssClassService, CssGroupService } from '../../../services/api/services';
import { CssUpdateService } from '../css-update.service';

@Component({
  selector: 'css-group',
  templateUrl: './css-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CssGroupComponent {

  constructor(
    private cssGroupService: CssGroupService,
    private cssClassService: CssClassService,
    private cssUpdateService: CssUpdateService
  ) {}
  
  @Input() group: CssGroup;

  deleteGroup(id: number) {
    this.cssGroupService.apiCssGroupIdDelete({id}).pipe(
      finalize(() => this.cssUpdateService.dataChange$.next())
    ).subscribe();
  }

  deleteClass(id: number) {
    this.cssClassService.apiCssClassIdDelete({id}).pipe(
      finalize(() => this.cssUpdateService.dataChange$.next())
    ).subscribe();
  }

  newGroup$: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  newCssClass$: BehaviorSubject<CssClass> = new BehaviorSubject<CssClass>(null);

  newGroupClick(id: number | null) {
    if (id) {
      this.newGroup$.next(id)
    } else {
      this.newGroup$.next(-1);
    }
  }

  newCssClassClick(cssGroupId: number, cssClassc?: CssClass) {
    if (cssClassc) {
      this.newCssClass$.next(cssClassc)
    } else {
      this.newCssClass$.next({cssClassId: 0, cssGroupId});
    }
  }
}
