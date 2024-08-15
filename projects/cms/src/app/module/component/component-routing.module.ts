import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentPresentationComponent } from './component-presentation/component-presentation.component';
import { ComponentComponent } from './component/component.component';

const routes: Routes = [
  { path: '', component: ComponentPresentationComponent },
  { path: 'presentation', component: ComponentComponent },
  { path: 'editor', loadChildren: () => import('../editor/editor.module').then(m => m.EditorModule), pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
