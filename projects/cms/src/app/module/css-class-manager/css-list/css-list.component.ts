import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { delay, finalize, map, repeatWhen } from 'rxjs/operators';
import { CssGroup, CssGroupFamily } from '../../../services/api/models';
import { CssGroupFamilyService, CssGroupService } from '../../../services/api/services';
import { CssUpdateService } from '../css-update.service';

@Component({
  selector: 'app-css-list',
  templateUrl: './css-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CssListComponent {

  constructor(
    private cssGroupService: CssGroupService,
    private cssGroupFamilyService: CssGroupFamilyService,
    private cssUpdateService: CssUpdateService
  ) {}

  families$ = this.cssGroupFamilyService.apiCssGroupFamilyAllGet$Json().pipe(
    repeatWhen(() => this.cssUpdateService.dataChange$)
  );

  groups$ = this.cssGroupService.apiCssGroupAllGet$Json().pipe(
    //map(allGroups => this.buildTree(allGroups)),
    repeatWhen(() => this.cssUpdateService.dataChange$)
  );

  newGroup: number = 0;
  showAddGroup: number = 0;
  selectedGroup: CssGroup;

  newFamily: boolean = false;

  addGroup(name: string) {
    if (this.newGroup === 0) {
      return;
    }
    const cssGroup: CssGroup = {
      name,
      cssGroupFamilyId: this.newGroup
    }
    this.cssGroupService.apiCssGroupPost$Json({body: cssGroup}).pipe(
      finalize(() => {
        this.cssUpdateService.dataChange$.next();
        this.newGroup = 0;
      })
    ).subscribe();
  }

  addFamily(name: string) {
    const cssGroupFamily: CssGroupFamily = {
      name
    }
    this.cssGroupFamilyService.apiCssGroupFamilyPost$Json({body: cssGroupFamily}).pipe(
      finalize(() => {
        this.cssUpdateService.dataChange$.next();
        this.newFamily = false;
      })
    ).subscribe();
  }

  deleteFamily(id: number) {
    this.cssGroupFamilyService.apiCssGroupFamilyIdDelete({id}).pipe(
      finalize(() => {
        this.cssUpdateService.dataChange$.next();
        this.newFamily = false;
      })
    ).subscribe();
  }

  changeFamiliyName(f: CssGroupFamily, newName: string) {
    const newF = {...f};
    newF.name = newName;
    this.cssGroupFamilyService.apiCssGroupFamilyUpdatePost({body: newF}).pipe(
      finalize(() => {
        this.cssUpdateService.dataChange$.next();
        this.newFamily = false;
      })
    ).subscribe();
  }

  changeGroupName(c: CssGroup, newName: string) {

  }

}
