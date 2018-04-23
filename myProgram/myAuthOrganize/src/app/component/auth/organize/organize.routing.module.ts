import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { OrganizeComponent } from './organize.component';


const appRoutes: Routes = [
  { path: '',
    component: OrganizeComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule]
})
export class OrganizeRoutingModule { }
