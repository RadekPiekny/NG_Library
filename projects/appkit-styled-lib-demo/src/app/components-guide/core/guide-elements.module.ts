import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { ComponentCodeShowComponent } from "./component-code-show/component-code-show.component";
import { ComponentShowcaseComponent } from "./component-showcase/component-showcase.component";
import { ModeSwitchComponent } from "../../demo-components/mode-switch/mode-switch.component";
import { HighlightModule } from "ngx-highlightjs";
import { AllGuidesModule } from "./all-guides/all-guides.module";
import { NgxButtonModule, NgxTabModule } from 'rp_custom_library/src/public-api';

@NgModule({
    declarations: [
        ComponentCodeShowComponent,
        ComponentShowcaseComponent,
        ModeSwitchComponent
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        HighlightModule,
        NgxButtonModule,
        AllGuidesModule,
        NgxTabModule
    ],
    exports: [
        ComponentCodeShowComponent,
        ComponentShowcaseComponent,
        ModeSwitchComponent,
        AllGuidesModule
    ]
})
export class GuideElementsModule { }