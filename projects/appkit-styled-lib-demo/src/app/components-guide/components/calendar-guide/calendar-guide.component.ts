import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { generateCurrentMonthDays, generateDayNames, generateGeneralMonthDays, generateNextMonthDays, generatePreviousMonthDays } from 'rp_custom_library/src/lib/component/ngx-calendar/functions/calendar-functions';
import { IDay } from 'rp_custom_library/src/lib/component/ngx-calendar/ngx-calendar.model';
import { componentData } from './component-data';
import { GuideBaseComponent } from '../guide-base.component';
import { FormControl, FormGroup } from '@angular/forms';
import { IComponentCode, IComponentData, IComponentDemo } from '../../../model/component.model';
import { ControlsOf } from '@rp_custom_library/appkit-styled-lib/src/lib/model/ng-form-type/ng-form-type.model';
import { CalendarGuideForm } from './calendar-guide.model';
import { buildTailwindMultipleImports, htmlBuild } from '../../form-controls/form-control.model';
import { componentProperties } from '../component-properties-model';
import { calendar_Data } from '@rp_custom_library/appkit-styled-lib/src/lib/component/ngx-calendar/calendar-properties';

@Component({
  selector: 'app-calendar-guide',
  templateUrl: './calendar-guide.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarGuideComponent extends GuideBaseComponent implements OnInit {
  constructor() {
    super();
    this.componentData = componentData;
    this.componentCode = [
      {
        code: {
          languages:['html'],
          lineNumbers: false,
          text: ``
        },
        label: 'HTML',
        active: true
      },
      {
        code: {
          languages:['ts'],
          lineNumbers: false,
          text: `import { NgxCalendarModule } from '@rp_custom_library/appkit-styled-lib`
        },
        label: 'Import',
        active: false
      },
      {
        code: {
          languages:['ts'],
          lineNumbers: true,
          text: buildTailwindMultipleImports(['ngx-calendar','ngx-button'])
        },
        label: 'Tailwind config',
        active: false
      },
    ];
    this.ngx_calendarData = calendar_Data;
  }

  ngx_calendarData: componentProperties[];

  ngOnInit(): void {
    this.componentData = componentData;
    this.form.valueChanges.subscribe(types => {
      this.formChange(types as CalendarGuideForm);
    })
    this.formChange(this.form.value as CalendarGuideForm)
  }
  previousDays: Date[] = generatePreviousMonthDays();
  currentDays: Date[] = generateCurrentMonthDays();
  nextDays: Date[] = generateNextMonthDays();
  weekDay: IDay[] = generateDayNames();

  code: string | undefined;
  
  componentCode: IComponentCode[] = [];

  form: FormGroup<ControlsOf<CalendarGuideForm>> = new FormGroup<ControlsOf<CalendarGuideForm>>({
    month: new FormControl(new Date().getMonth() + 1),
    year: new FormControl(new Date().getFullYear()),
    disableFrom: new FormControl(null),
    disableTo: new FormControl(null),
  })

  formChange(attribute: Partial<CalendarGuideForm>) {
    if(this.form.value.month === null) {
      return
    }
    const componentCode = [...this.componentCode];
    componentCode[0].code.text = htmlBuild(attribute,'ngx-calendar');
    this.componentCode = componentCode;
  }
}
