import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, RouterStateSnapshot } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthComponent } from './component/auth/auth.component';
import { OrganizeModule } from './component/auth/organize/organize.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './project-config/route/auth-guard';
import { AuthService } from './project-config/route/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    // OrganizeModule,
    AppRoutingModule,
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
