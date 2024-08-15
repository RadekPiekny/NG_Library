import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WelcomeRoutingModule } from "./wecome-routing.module";
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { ReactiveFormsModule } from "@angular/forms";
import { InstallationProcessComponent } from './getting-started/installation-process/installation-process.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { InstallationComponent } from './getting-started/installation/installation.component';
import { ProcessHeaderComponent } from './getting-started/process-header/process-header.component';
import { NgxAccordionModule } from 'rp_custom_library/src/lib/component/ngx-accordion/ngx-accordion.module';
import { NgxBadgeModule } from "rp_custom_library/src/lib/component/ngx-badge";
import { NgxButtonModule } from "rp_custom_library/src/lib/component/ngx-button/ngx-button.module";
import { AllComponentsComponent } from './getting-started/all-components/all-components.component';
import { AllReleasesComponent } from './getting-started/all-components/all-releases/all-releases.component';
import { NgxTooltipModule } from "rp_custom_library/src/lib/directive/pop-ups/ngx-tooltip/ngx-tooltip.module";

@NgModule({
    declarations: [ 
    GettingStartedComponent, InstallationProcessComponent, InstallationComponent, ProcessHeaderComponent, AllComponentsComponent, AllReleasesComponent
  ],
    imports: [
        CommonModule,
        WelcomeRoutingModule,
        ReactiveFormsModule,
        HighlightModule,
        NgxAccordionModule,
        NgxButtonModule,
        NgxBadgeModule,
        NgxTooltipModule
    ]
})
export class WelcomeModule {}