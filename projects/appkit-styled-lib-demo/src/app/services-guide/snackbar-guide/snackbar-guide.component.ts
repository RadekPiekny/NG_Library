import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxPopUpService } from 'rp_custom_library/src/lib/service/popup';
import { Subscription } from 'rxjs';
import { componentData } from './component-data';
import { GuideBaseComponent } from '../../components-guide/components/guide-base.component';
import { ControlsOf } from '@rp_custom_library/appkit-styled-lib/src/lib/model/ng-form-type/ng-form-type.model';
import { SnackbarGuideForm } from './snackbar-guide.model';
import { ISnackBarType } from '@rp_custom_library/appkit-styled-lib/src/lib/model/snack-bar';
import { buildTailwindImports } from '../../components-guide/form-controls/form-control.model';

@Component({
  selector: 'app-snackbar-guide',
  templateUrl: './snackbar-guide.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnackbarGuideComponent extends GuideBaseComponent {
  constructor(
    private ngxPopUpService: NgxPopUpService,
    private viewContainerRef: ViewContainerRef,
  ) {
    super();
    this.componentData = componentData;
    this.componentCode = [
      {
        code: {
          languages:['ts'],
          lineNumbers: false,
          text: `import { Component, ViewContainerRef } from '@angular/core';
import { NgxPopUpService } from 'rp_custom_library/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private ngxPopUpService: NgxPopUpService,
    private viewContainerRef: ViewContainerRef,
  ) {
    this.ngxPopUpService.viewContainerRef = this.viewContainerRef;
  }

  newSnack() {
    this.ngxPopUpService.newSuccess("Success");
  }

}
          `
        },
        label: 'TS',
        active: true
      },
      {
        code: {
          languages:['ts'],
          lineNumbers: false,
          text: `import { NgxPopUpService } from 'rp_custom_library/src/lib/service/popup';`
        },
        label: 'Import',
        active: false
      },
      {
        code: {
          languages:['ts'],
          lineNumbers: true,
          text: buildTailwindImports('popup', 'service')
        },
        label: 'Tailwind config',
        active: false
      },
    ];
    this.ngxPopUpService.viewContainerRef = this.viewContainerRef;
    //this.formChange();
  }

  counter = 0;

  form: FormGroup<ControlsOf<SnackbarGuideForm>> = new FormGroup<ControlsOf<SnackbarGuideForm>>({
    type: new FormControl(ISnackBarType.Success),
    changeMessagess: new FormControl(true),
  })

  formChange(e: SnackbarGuideForm) {
    console.log(e);
  }

  newSnack() {
    switch (this.form.value.type) {
      case ISnackBarType.Success:
        this.ngxPopUpService.newSuccess(this.counterMsg("Success"));
        break;
      case ISnackBarType.Warning:
        this.ngxPopUpService.newWarning(this.counterMsg("Warning"));
        break;
      case ISnackBarType.Error:
        this.ngxPopUpService.newError(this.counterMsg("Error"));
        break;
      default:
        break;
    }
    
  }

  counterMsg(msg: string) {
    if (this.form.value.changeMessagess) {
      this.counter = this.counter + 1; 
    }
    return `${msg} - ${this.counter}`
  }

}
