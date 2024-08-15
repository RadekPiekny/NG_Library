import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { InstallationComponent } from './getting-started/installation/installation.component';
import { AllComponentsComponent } from './getting-started/all-components/all-components.component';
import { AllReleasesComponent } from './getting-started/all-components/all-releases/all-releases.component';
import { AccordionGuideComponent } from '../components-guide/components/accordion-guide/accordion-guide.component';
import { AvatarGuideComponent } from '../components-guide/components/avatar-guide/avatar-guide.component';
import { BreadcrumbGuideComponent } from '../components-guide/components/breadcrumb-guide/breadcrumb-guide.component';
import { ButtonGuideComponent } from '../components-guide/components/button-guide/button-guide.component';
import { CheckboxGuideComponent } from '../components-guide/form-controls/input-checkbox-guide/checkbox-guide.component';
import { InputDateGuideComponent } from '../components-guide/form-controls/input-date-guide/input-date-guide.component';
import { InputSelectGuideComponent } from '../components-guide/form-controls/input-select-guide/input-select-guide.component';
import { InputTextGuideComponent } from '../components-guide/form-controls/input-text-guide/input-text-guide.component';
import { LoadingGuideComponent } from '../components-guide/components/loading-guide/loading-guide.component';
import { ModalGuideComponent } from '../components-guide/components/modal-guide/modal-guide.component';
import { PaginatorGuideComponent } from '../components-guide/components/paginator-guide/paginator-guide.component';
import { StepperGuideComponent } from '../components-guide/components/stepper-guide/stepper-guide.component';
import { InputRadioGuideComponent } from '../components-guide/form-controls/input-radio-guide/input-radio-guide.component';
import { RichTextGuideComponent } from '../components-guide/form-controls/rich-text-guide/rich-text-guide.component';
import { SliderGuideComponent } from '../components-guide/components/slider-guide/slider-guide.component';
import { TabGuideComponent } from '../components-guide/components/tab-guide/tab-guide.component';
import { TableGuideComponent } from '../components-guide/components/table-guide/table-guide.component';
import { TextareaGuideComponent } from '../components-guide/form-controls/textarea-guide/textarea-guide.component';
import { ToggleGuideComponent } from '../components-guide/components/toggle-guide/toggle-guide.component';
import { TooltipGuideComponent } from '../components-guide/components/tooltip-guide/tooltip-guide.component';
import { InputFileGuideComponent } from '../components-guide/form-controls/input-file-guide/input-file-guide.component';

const routes: Routes = [
  { path: '', redirectTo: 'getting-started', pathMatch: 'full'},
  { path: 'getting-started', component: GettingStartedComponent },
  { path: 'installation', component: InstallationComponent },
  { path: 'all-components', component: AllComponentsComponent},
  { path: 'all-releases', component: AllReleasesComponent},
  { path: 'accordion-guide', component: AccordionGuideComponent },
  { path: 'avatar-guide', component: AvatarGuideComponent },
  { path: 'breadcrumb-guide', component: BreadcrumbGuideComponent},
  { path: 'button-guide', component: ButtonGuideComponent },
  { path: 'checkbox-guide', component: CheckboxGuideComponent },
  { path: 'input-date-guide', component: InputDateGuideComponent },
  { path: 'input-select-guide', component: InputSelectGuideComponent },
  { path: 'input-text-guide', component: InputTextGuideComponent },
  { path: 'loading-guide', component: LoadingGuideComponent },
  { path: 'modal-guide', component: ModalGuideComponent },
  { path: 'pagination-guide', component: PaginatorGuideComponent },
  { path: 'stepper-guide', component: StepperGuideComponent },
  { path: 'input-radio-guide', component: InputRadioGuideComponent },
  { path: 'rich-text-guide', component: RichTextGuideComponent},
  { path: 'slider-guide', component: SliderGuideComponent },
  { path: 'tab-guide', component: TabGuideComponent },
  { path: 'table-guide', component: TableGuideComponent },
  { path: 'textarea-guide', component: TextareaGuideComponent },
  { path: 'toggle-guide', component: ToggleGuideComponent },
  { path: 'tooltip-guide', component: TooltipGuideComponent },
  { path: 'input-file-guide', component: InputFileGuideComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
