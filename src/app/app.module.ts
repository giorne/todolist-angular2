import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Externals
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Modules
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { TodosModule } from './todos/todos.module';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    CoreModule,
    AppRoutingModule,
    LoginModule,
    TodosModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
