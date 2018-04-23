import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizeComponent } from './organize.component';
import { OrganizeRoutingModule } from './organize.routing.module';

@NgModule({
  declarations: [
    OrganizeComponent
  ],
  imports: [
    OrganizeRoutingModule
  ],
  providers: []
})
export class OrganizeModule { }
