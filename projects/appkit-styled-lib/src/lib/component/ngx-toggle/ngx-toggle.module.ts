import { NgModule } from "@angular/core";
import { NgxToggleComponent } from "./toggle/ngx-toggle.component";
import { CommonModule } from "@angular/common";
import { FormControlBaseModule } from "@rp_custom_library/appkit-styled-lib/src/lib/component/form-field/form-control-base";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [NgxToggleComponent],
    imports: [
        CommonModule,
        FormControlBaseModule,
        ReactiveFormsModule
    ],
    exports: [NgxToggleComponent]
})
export class NgxToggleModule {}