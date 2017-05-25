import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from './nav/nav.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ NavComponent ],
  exports:      [ NavComponent ],
  providers:	[ AuthService, AuthGuard ]
})
export class CoreModule { }
