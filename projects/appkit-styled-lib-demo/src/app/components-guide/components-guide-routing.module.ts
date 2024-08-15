import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingBarGuideComponent } from './components/loading-bar-guide/loading-bar-guide.component';
import { ModalGuideComponent } from './components/modal-guide/modal-guide.component';
import { NavTabsRaisedGuideComponent } from './components/nav-tabs-raised-guide/nav-tabs-raised-guide.component';
import { TableGuideComponent } from './components/table-guide/table-guide.component';
import { PopupGuideComponent } from './components/popup-guide/popup-guide.component';
import { ColorPickerGuideComponent } from './components/color-picker-guide/color-picker-guide.component';
import { AvatarGuideComponent } from './components/avatar-guide/avatar-guide.component';
import { BadgeGuideComponent } from './components/badge-guide/badge-guide.component';
import { ButtonGuideComponent } from './components/button-guide/button-guide.component';
import { TabGuideComponent } from './components/tab-guide/tab-guide.component';
import { BreadcrumbGuideComponent } from './components/breadcrumb-guide/breadcrumb-guide.component';
import { TooltipGuideComponent } from './components/tooltip-guide/tooltip-guide.component';
import { LoadingGuideComponent } from './components/loading-guide/loading-guide.component';
import { CalendarGuideComponent } from './components/calendar-guide/calendar-guide.component';
import { PaginatorGuideComponent } from './components/paginator-guide/paginator-guide.component';
import { AccordionGuideComponent } from './components/accordion-guide/accordion-guide.component';
import { SliderGuideComponent } from './components/slider-guide/slider-guide.component';
import { CheckboxGuideComponent } from './form-controls/input-checkbox-guide/checkbox-guide.component';
import { InputTextGuideComponent } from './form-controls/input-text-guide/input-text-guide.component';
import { InputSelectGuideComponent } from './form-controls/input-select-guide/input-select-guide.component';
import { InputFileGuideComponent } from './form-controls/input-file-guide/input-file-guide.component';
import { TextareaGuideComponent } from './form-controls/textarea-guide/textarea-guide.component';
import { InputRadioGuideComponent } from './form-controls/input-radio-guide/input-radio-guide.component';
import { InputDateGuideComponent } from './form-controls/input-date-guide/input-date-guide.component';
import { ToggleGuideComponent } from './components/toggle-guide/toggle-guide.component';
import { InputRatioSliderGuideComponent } from './form-controls/input-ratio-slider-guide/input-ratio-slider-guide.component';
import { StepperGuideComponent } from './components/stepper-guide/stepper-guide.component';
import { RichTextGuideComponent } from './form-controls/rich-text-guide/rich-text-guide.component';
import { InputAutocompleteGuideComponent } from './form-controls/input-autocomplete-guide/input-autocomplete-guide.component';
import { MenuContainerGuideComponent } from './components/menu-guide/menu-container-guide.component';

const routes: Routes = [
  { path: 'modal-guide', component: ModalGuideComponent },
  { path: 'pagination-guide', component: PaginatorGuideComponent },
  { path: 'loading-bar', component: LoadingBarGuideComponent },
  { path: 'nav-tabs-raised', component: NavTabsRaisedGuideComponent },
  { path: 'table-guide', component: TableGuideComponent },
  { path: 'pop-up', component: PopupGuideComponent },
  { path: 'color-picker', component: ColorPickerGuideComponent },
  { path: 'avatar-guide', component: AvatarGuideComponent },
  { path: 'badge-guide', component: BadgeGuideComponent },
  { path: 'button-guide', component: ButtonGuideComponent },
  { path: 'tab-guide', component: TabGuideComponent },
  { path: 'breadcrumb-guide', component: BreadcrumbGuideComponent},
  { path: 'tooltip-guide', component: TooltipGuideComponent },
  { path: 'loading-guide', component: LoadingGuideComponent },
  { path: 'calendar-guide', component: CalendarGuideComponent },
  { path: 'accordion-guide', component: AccordionGuideComponent },
  { path: 'slider-guide', component: SliderGuideComponent },
  { path: 'toggle-guide', component: ToggleGuideComponent },
  { path: 'stepper-guide', component: StepperGuideComponent },
  // form controls
  { path: 'checkbox-guide', component: CheckboxGuideComponent },
  { path: 'input-text-guide', component: InputTextGuideComponent },
  { path: 'input-autocomplete-guide', component: InputAutocompleteGuideComponent },
  { path: 'input-select-guide', component: InputSelectGuideComponent },
  { path: 'input-file-guide', component: InputFileGuideComponent },
  { path: 'input-radio-guide', component: InputRadioGuideComponent },
  { path: 'input-date-guide', component: InputDateGuideComponent },
  { path: 'textarea-guide', component: TextareaGuideComponent },
  { path: 'input-ratio-guide', component: InputRatioSliderGuideComponent },
  { path: 'rich-text-guide', component: RichTextGuideComponent},
  { path: 'menu-container-guide', component: MenuContainerGuideComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsGuideRoutingModule {}
