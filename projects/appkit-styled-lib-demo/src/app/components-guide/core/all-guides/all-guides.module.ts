import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllGuidesComponent } from './all-guides.component';
import { AccessibilityGuideComponent } from '../accessibility-guide/accessibility-guide.component';
import { UsageGuideComponent } from '../usage-guide/usage-guide.component';
import { UsageNotGuideComponent } from '../usage-not-guide/usage-not-guide.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AllGuidesComponent,
    AccessibilityGuideComponent,
    UsageGuideComponent,
    UsageNotGuideComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AllGuidesComponent,
    AccessibilityGuideComponent,
    UsageGuideComponent,
    UsageNotGuideComponent,
  ]
})
export class AllGuidesModule { }
