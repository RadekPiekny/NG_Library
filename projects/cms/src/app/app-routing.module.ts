import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./module/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'element',
    loadChildren: () => import('./module/element/element.module').then(m => m.ElementModule),
  },
  {
    path: 'component',
    loadChildren: () => import('./module/component/component.module').then(m => m.ComponentModule),
  },
  {
    path: 'template',
    loadChildren: () => import('./module/template/template.module').then(m => m.TemplateModule),
  },
  {
    path: 'page',
    loadChildren: () => import('./module/page/page.module').then(m => m.PageModule),
  },
  {
    path: 'css',
    loadChildren: () => import('./module/css-class-manager/css-class-manager.module').then(m => m.CssClassManagerModule),
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
