import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteControlsElementsComponent } from './component/site-controls-elements/site-controls-elements.component';
import { SiteControlsGeneralComponent } from './component/site-controls-general/site-controls-general.component';
import { SiteHistoryComponent } from './component/site-history/site-history.component';
import { NgxLibCoreModule } from '../ngx-lib-core/ngx-lib-core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorRoutingModule } from './editor-routing.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { ImageEditOverlayComponent } from './elements/image-edit-overlay/image-edit-overlay.component';
import { ComponentWrapperDirective } from './directive/component-wrapper.directive';
import { ElementHTML_WrapperDirective } from './directive/element-html-wrapper.directive';
import { WrapperEventsDirective } from './directive/wrapper-events.directive';
import { ContainerEditComponent } from './elements/container-edit/container-edit.component';
import { IconEditOverlayComponent } from './elements/icon-edit-overlay/icon-edit-overlay.component';
import { ClassBuilderComponent } from './elements/class-builder/class-builder.component';
import { EditorComponent } from './component/editor/editor.component';
import { ComponentDetailComponent } from './component/component-detail/component-detail.component';
import { SanitizeHtmlPipe } from './pipe/sanitize-html.pipe';
import { TestDirective } from './directive/test-directive.directive';
import { ElementDisplayComponent } from './elements/element-display/element-display.component';
import { ButtonElementComponent } from './elements/button-element/button-element.component';
import { ImageAttributesComponent } from './elements/attributes/image-attributes/image-attributes.component';
import { ComponentElementDetailComponent } from './component/component-element-detail/component-element-detail.component';
import { ButtonAttributesComponent } from './elements/attributes/button-attributes/button-attributes.component';
import { BaseAttributesComponent } from './elements/attributes/base-attributes.component';
import { GetAttributePipe } from './pipes/get-attribute.pipe';
import { NgxButtonModule, NgxInputTextModule } from '@rp_custom_library/appkit-styled-lib';

const drylove = [
  SiteHistoryComponent,
  SiteControlsElementsComponent,
  SiteControlsGeneralComponent,
  ElementHTML_WrapperDirective,
  TestDirective,
  ContainerEditComponent
]

@NgModule({
  declarations: [
    ...drylove,
    EditorComponent,
    ImageEditOverlayComponent,
    ComponentWrapperDirective,
    WrapperEventsDirective,
    IconEditOverlayComponent,
    ClassBuilderComponent,
    ComponentDetailComponent,
    SanitizeHtmlPipe,
    ElementDisplayComponent,
    ButtonElementComponent,
    ImageAttributesComponent,
    ComponentElementDetailComponent,
    ButtonAttributesComponent,
    BaseAttributesComponent,
    GetAttributePipe,
  ],
  imports: [
    CommonModule,
    OverlayModule,
    EditorRoutingModule,
    NgxLibCoreModule,
    FormsModule,
    ReactiveFormsModule,
    NgxInputTextModule,
    NgxButtonModule 
  ],
  exports: [
    ...drylove
  ]
})
export class EditorModule { }
