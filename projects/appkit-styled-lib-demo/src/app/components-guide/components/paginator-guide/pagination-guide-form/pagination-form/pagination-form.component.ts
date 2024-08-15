import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PaginatorGuideForm } from '../../paginator-guide.model';
import { GuideFormBaseComponent } from '../../../guide-form-base.component';

@Component({
  selector: 'pagination-guide-form',
  templateUrl: './pagination-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationFormComponent extends GuideFormBaseComponent {

  

}
