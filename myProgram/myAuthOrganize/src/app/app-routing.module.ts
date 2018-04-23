import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthComponent } from './component/auth/auth.component';

const appRoutes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    data: { title: 'Heroes List' },
    children: [{
      path: 'organize',
      loadChildren: './component/auth/organize/organize.module#OrganizeModule'
    }]
  },
  { path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  // {
  //   path: 'organize',
  //   loadChildren: './component/auth/organize/organize.module#OrganizeModule'
  // },
  { path: '**', component: AppComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,
    {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    }
  )
  ],
  providers: []
})
export class AppRoutingModule { }
