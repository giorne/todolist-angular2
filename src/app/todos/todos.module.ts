import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListComponent } from './todo-list/todo-list.component';
import { TodosComponent } from './todos.component';
import { TodosRoutingModule } from './todos-routing.module';
 

@NgModule({
  imports: [
    CommonModule,
    TodosRoutingModule
  ],
  declarations: [TodoListComponent, TodosComponent]
})
export class TodosModule { }
