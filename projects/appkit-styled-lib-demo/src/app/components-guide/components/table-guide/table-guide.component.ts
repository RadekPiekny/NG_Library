// import { Component } from '@angular/core';
// import { smoothCollapse } from 'rp_custom_library/src/lib/animation/public-api';
// import { generateTable_1, ITableFakeData } from './faker.data';

// @Component({
//   selector: 'app-table-guide',
//   templateUrl: './table-guide.component.html',
//   styleUrls: ['./table-guide.component.css'],
//   animations: [smoothCollapse]
// })
// export class TableGuideComponent {
//   tableFakeData_1: ITableFakeData[] = generateTable_1();
//   tableFakeData_2: ITableFakeData[] = generateTable_1();

//   activeRow: number[] = [];

//   changeActive(i: number) {
//     const index = this.activeRow.findIndex((r) => r === i);
//   }
// }

import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { GuideBaseComponent } from '../guide-base.component';
import { componentData } from './component-data';
import { generateTable_1, ITableFakeData } from './faker.data';

@Component({
  selector: 'app-badge-guide',
  templateUrl: './table-guide.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableGuideComponent extends GuideBaseComponent implements OnInit,OnDestroy  {

  tableFakeData_1: ITableFakeData[] = generateTable_1();
  tableFakeData_2: ITableFakeData[] = generateTable_1();

  activeRow: number[] = [];

  condensed: boolean = false;
  title: boolean = true;
  striped: boolean = false;
  checkbox: boolean = false;

  changeActive(i: number) {
    const index = this.activeRow.findIndex((r) => r === i);
  }

  ngOnDestroy(): void {
    this.formSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.componentData = componentData;
    this.formSubscription = this.form.valueChanges.subscribe(d => {
      this.condensed = d.variation == 'condensed';
      this.title = d.title;
      this.striped = d.striped;
      this.checkbox = d.checkbox;
      this.code = this.tableHTMLString();
    });
    this.code = this.tableHTMLString();
  }

  code: string | undefined;

  formSubscription: Subscription = new Subscription;
  form: FormGroup = new FormGroup({
    variation: new FormControl<'default' | 'condensed'>('default'),
    title: new FormControl<boolean>(true),
    striped: new FormControl<boolean>(false),
    checkbox: new FormControl<boolean>(false),
  })

  tableHTMLString(): string {
    return `<div class="px-2 py-1 w-fit mb-5 border border-neutral-800 rounded-md bg-white dark:bg-neutral-800 dark:border-neutral-600 transition-all">
    <table class="border-separate !border-spacing-y-1">\
      ${this.title ? `\n\t\t<thead>\
        \n\t\t\t<tr>\
          ${this.checkbox ? '\n\t\t\t\t<th class="text-center p-3 h-fit rounded"><input type="checkbox" name="all" class="appearance-none opacity-75 cursor-pointer before:font-appkit-font before:content-[\'\\e98f\'] dark:checked:text-primary-lighten-200 checked:opacity-100 checked:text-primary checked:before:content-[\'\\e880\'] dark:indeterminate:text-primary-lighten-200 indeterminate:opacity-100 indeterminate:text-primary indeterminate:before:content-[\'\\e98d\']"></th>' : ''} \
          \n\t\t\t\t<th class="text-left p-3 rounded cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all">Heading 1</th>\
          \n\t\t\t\t<th class="text-left p-3 rounded cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all">Heading 2</th>\
          \n\t\t\t\t<th class="text-left p-3 rounded cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all">Heading 3</th>\
          \n\t\t\t\t<th class="text-left p-3 rounded cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all">Heading 4</th>\
        \n\t\t\t</tr>\
      \n\t\t</thead>` : ''}\
      \n\t\t<tbody class="border-spacing-1">\
        \n\t\t\t<tr class="hover:bg-neutral-100 dark:hover:bg-neutral-600 transition-all${this.striped ? ' odd:bg-neutral-50 dark:odd:bg-neutral-700' : ''}">\
          ${this.checkbox ? `\n\t\t\t\t<td class="text-left p-3 h-fit first:rounded-l last:rounded-r${this.condensed ? ' !py-1': ''}"><input type="checkbox" class="appearance-none opacity-75 cursor-pointer before:font-appkit-font before:content-['\\e98f'] dark:checked:text-primary-lighten-200 checked:opacity-100 checked:text-primary checked:before:content-['\\e880'] dark:indeterminate:text-primary-lighten-200 indeterminate:opacity-100 indeterminate:text-primary indeterminate:before:content-['\\e98d']"></td>` : ``}\
          \n\t\t\t\t<td class="text-left p-3 h-fit first:rounded-l last:rounded-r${this.condensed ? ' !py-1': ''}">Data 1</td>\
          \n\t\t\t\t<td class="text-left p-3 h-fit first:rounded-l last:rounded-r${this.condensed ? ' !py-1': ''}">Data 2</td>\
          \n\t\t\t\t<td class="text-left p-3 h-fit first:rounded-l last:rounded-r${this.condensed ? ' !py-1': ''}">Data 3</td>\
          \n\t\t\t\t<td class="text-right p-3 h-fit first:rounded-l last:rounded-r${this.condensed ? ' !py-1': ''}">Data 4</td>\
        \n\t\t\t</tr>\
      \n\t\t</tbody>
    </table>
  </div>`;
  }

}
