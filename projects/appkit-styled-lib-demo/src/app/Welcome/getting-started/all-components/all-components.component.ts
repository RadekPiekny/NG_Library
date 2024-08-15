import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-all-components',
  templateUrl: './all-components.component.html',
})
export class AllComponentsComponent {
  constructor(
    private elementRef: ElementRef
    ) {}

  onHover: boolean = false;
  avatarOnHover: boolean = false;
  badgeOnHover: boolean = false;
  breadCrumbOnHover: boolean = false;
  buttonOnHover: boolean = false;
  checkboxOnHover: boolean = false;
  datePickerOnHover: boolean = false;
  dropDownOnHover: boolean = false;
  inputFieldOnHover: boolean = false;
  modalOnHover: boolean = false;
  progressOnHover: boolean = false;
  radioButtonOnHover: boolean = false;
  richTextEditorOnHover: boolean = false;
  sliderOnHover: boolean = false;
  tabOnHover: boolean = false;
  tableOnHover: boolean = false;
  loadingOnHover: boolean = false;
  toggleOnHover: boolean = false;
  tooltipOnHover: boolean = false;
  uploadFormOnHover: boolean = false;
  paginationOnHover: boolean = false;
}
