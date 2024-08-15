import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { CssClass } from '../../../services/api/models';
import { CssClassService } from '../../../services/api/services';
import { CssUpdateService } from '../css-update.service';

@Component({
  selector: 'css-class-form',
  templateUrl: './css-class-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CssClassFormComponent {
  constructor(
    private cssClassService: CssClassService,
    private cssUpdateService: CssUpdateService
  ) {}
  
  @Input() cssClass?: CssClass;
  @Input() cssGroupId: number;


  cssClassForm: FormGroup = new FormGroup({
    cssClassId: new FormControl(null),
    value: new FormControl('',[Validators.required]),
    shortDescription: new FormControl(''),
    description: new FormControl(''),
    cssGroupId: new FormControl('')
  });

  ngOnInit(): void {
    if (this.cssClass) {
      this.cssClassForm.patchValue(this.cssClass);
    }
  }

  create() {
    this.cssClassService.apiCssClassPost$Json({body: this.cssClassForm.value}).pipe(
      finalize(() => this.cssUpdateService.dataChange$.next())
    ).subscribe();
  }

  update() {
    this.cssClassService.apiCssClassUpdatePost({body: this.cssClassForm.value}).pipe(
      finalize(() => this.cssUpdateService.dataChange$.next())
    ).subscribe();
  }
}
