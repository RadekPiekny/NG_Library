import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Welcome',
    pathMatch: 'full'
  },
  {
    path: 'components',
    loadChildren: () =>
      import('./components-guide/components-guide.module').then(
        (m) => m.ComponentsGuideModule
      ),
    pathMatch: 'prefix'
  },
  {
    path: 'common-patterns',
    loadChildren: () =>
      import('./common-patterns/common-patterns.module').then(
        (m) => m.CommonPatternsModule
      ),
    pathMatch: 'prefix'
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./services-guide/services-guide.module').then(
        (m) => m.ServicesGuideModule
      ),
    pathMatch: 'prefix'
  },
  {
    path: 'composite-snippets',
    loadChildren: () =>
      import('./composite-snippets/composite-snippets.module').then(
        (m) => m.CompositeSnippetsModule
      ),
    pathMatch: 'prefix'
  },
  
  {
    path: 'style',
    loadChildren: () =>
      import('./style-guide/style-guide.module').then(
        (m) => m.StyleGuideModule
      ),
    pathMatch: 'prefix'
  },
  {
    path: 'Welcome',
    loadChildren: () =>
    import('./Welcome/welcome.module').then((m) =>
    m.WelcomeModule
    ),
    pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
