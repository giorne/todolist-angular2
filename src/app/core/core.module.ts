import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalStorageModule } from 'angular-2-local-storage';

import { NavComponent } from './nav/nav.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';


@NgModule({
  imports:      [ CommonModule, 
  		LocalStorageModule.withConfig({
            prefix: 'todolist',
            storageType: 'localStorage'
        })
 ],
  declarations: [ NavComponent ],
  exports:      [ NavComponent ],
  providers:	[ AuthService, AuthGuard ]
})
export class CoreModule { }
