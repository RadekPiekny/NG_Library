import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsGuideRoutingModule } from './components-guide-routing.module';
import { ModalGuideComponent } from './components/modal-guide/modal-guide.component';
import { CoreModule } from '../core/core.module';
import { PaginationGuideComponent } from './components/pagination-guide/pagination-guide.component';
import { LoadingBarGuideComponent } from './components/loading-bar-guide/loading-bar-guide.component';
import { NavTabsRaisedGuideComponent } from './components/nav-tabs-raised-guide/nav-tabs-raised-guide.component';
import { TableGuideComponent } from './components/table-guide/table-guide.component';
import { PopupGuideComponent } from './components/popup-guide/popup-guide.component';
import { ColorPickerGuideComponent } from './components/color-picker-guide/color-picker-guide.component';
import { AvatarGuideComponent } from './components/avatar-guide/avatar-guide.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GuideBaseComponent } from './components/guide-base.component';
import { BadgeGuideComponent } from './components/badge-guide/badge-guide.component';
import { ButtonGuideComponent } from './components/button-guide/button-guide.component';
import { ModalDemoComponent } from './components/modal-guide/modal-demo/modal-demo.component';
import { TabGuideComponent } from './components/tab-guide/tab-guide.component';
import { BreadcrumbGuideComponent } from './components/breadcrumb-guide/breadcrumb-guide.component';
import { TooltipGuideComponent } from './components/tooltip-guide/tooltip-guide.component';
import { BasicTooltipDemoComponent } from './components/tooltip-guide/basic-tooltip-demo/basic-tooltip-demo.component';
import { StyledTooltipComponent } from './components/tooltip-guide/styled-tooltip/styled-tooltip.component';
import { LoadingGuideComponent } from './components/loading-guide/loading-guide.component';
import { CalendarGuideComponent } from './components/calendar-guide/calendar-guide.component';
import { PaginatorGuideComponent } from './components/paginator-guide/paginator-guide.component';
import { AccordionGuideComponent } from './components/accordion-guide/accordion-guide.component';
import { NgModalDemoComponent } from './components/modal-guide/ng-modal-demo/ng-modal-demo.component';
import { ModalContentComponent } from './components/modal-guide/modal-content/modal-content.component';
import { SliderGuideComponent } from './components/slider-guide/slider-guide.component';
import { NgxSliderModule } from 'rp_custom_library/src/lib/component/ngx-slider/ngx-slider.module';
import { SliderNgComponent } from './components/slider-guide/slider-ng/slider-ng.component';
import { GuideElementsModule } from './core/guide-elements.module';
import { BadgeGuideFormComponent } from './components/badge-guide/badge-guide-form/badge-guide-form.component';
import { AvatarGuideFormComponent } from './components/avatar-guide/avatar-guide-form/avatar-guide-form.component';
import { ButtonGuideFormComponent } from './components/button-guide/button-guide-form/button-guide-form.component';
import { ModalGuideFormComponent } from './components/modal-guide/modal-guide-form/modal-guide-form.component';
import { TabGuideFormComponent } from './components/tab-guide/tab-guide-form/tab-guide-form.component';
import { BreadcrumbGuideFormComponent } from './components/breadcrumb-guide/breadcrumb-guide-form/breadcrumb-guide-form.component';
import { TooltipGuideFormComponent } from './components/tooltip-guide/tooltip-guide-form/tooltip-guide-form.component';
import { FormControlsModule } from './form-controls/form-controls.module';
import { PaginationFormComponent } from './components/paginator-guide/pagination-guide-form/pagination-form/pagination-form.component';
import { AccordionGuideFormComponent } from './components/accordion-guide/accordion-guide-form/accordion-guide-form.component';
import { SliderGuideFormComponent } from './components/slider-guide/slider-guide-form/slider-guide-form.component';
import { ToggleGuideComponent } from './components/toggle-guide/toggle-guide.component';
import { ToggleGuideFormComponent } from './components/toggle-guide/toggle-guide-form/toggle-guide-form.component';
import { StepperGuideComponent } from './components/stepper-guide/stepper-guide.component';
import { LoadingGuideFormComponent } from './components/loading-guide/loading-guide-form/loading-guide-form.component';
import { CalendarGuideFormComponent } from './components/calendar-guide/calendar-guide-form/calendar-guide-form.component';
import { MenuContainerGuideFormComponent } from './components/menu-guide/menu-container-guide-form/menu-container-guide-form.component';
import { MenuContainerGuideComponent } from './components/menu-guide/menu-container-guide.component';

@NgModule({
  declarations: [
    ModalGuideComponent,
    PaginationGuideComponent,
    LoadingBarGuideComponent,
    NavTabsRaisedGuideComponent,
    TableGuideComponent,
    PopupGuideComponent,
    ColorPickerGuideComponent,
    AvatarGuideComponent,
    GuideBaseComponent,
    BadgeGuideComponent,
    ButtonGuideComponent,
    ModalDemoComponent,
    TabGuideComponent,
    BreadcrumbGuideComponent,
    TooltipGuideComponent,
    BasicTooltipDemoComponent,
    StyledTooltipComponent,
    LoadingGuideComponent,
    CalendarGuideComponent,
    PaginatorGuideComponent,
    AccordionGuideComponent,
    MenuContainerGuideComponent,
    NgModalDemoComponent,
    ModalContentComponent,
    ModalContentComponent,
    SliderGuideComponent,
    SliderGuideComponent,
    SliderNgComponent,
    BadgeGuideFormComponent,
    AvatarGuideFormComponent,
    ButtonGuideFormComponent,
    ModalGuideFormComponent,
    TabGuideFormComponent,
    BreadcrumbGuideFormComponent,
    TooltipGuideFormComponent,
    PaginationFormComponent,
    AccordionGuideFormComponent,
    SliderGuideFormComponent,
    ToggleGuideComponent,
    ToggleGuideFormComponent,
    StepperGuideComponent,
    LoadingGuideFormComponent,
    CalendarGuideFormComponent,
    MenuContainerGuideFormComponent
  ],
  imports: [
    CommonModule,
    ComponentsGuideRoutingModule, 
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSliderModule,
    GuideElementsModule,
    FormControlsModule,
  ]
})
export class ComponentsGuideModule {}
