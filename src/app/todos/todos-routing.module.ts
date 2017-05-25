import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodosComponent } from './todos.component';

import { AuthGuard } from '../core/auth/auth-guard.service';

const todosRoutes: Routes = [
  { path: 'todos',  component: TodosComponent, canActivate: [AuthGuard] }
];
@NgModule({
  imports: [
    RouterModule.forChild(todosRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TodosRoutingModule { }