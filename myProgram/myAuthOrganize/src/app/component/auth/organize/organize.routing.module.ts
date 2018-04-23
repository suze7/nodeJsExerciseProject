import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { OrganizeComponent } from './organize.component';
import { AuthGuard } from '../../../project-config/route/auth-guard';


const appRoutes: Routes = [
  { path: '',
    component: OrganizeComponent,
    canActivate: [AuthGuard],
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule]
})
export class OrganizeRoutingModule { }
