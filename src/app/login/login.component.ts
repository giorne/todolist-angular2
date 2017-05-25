import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../core/auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: String
  password: String

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
  }

  doLogin() {
    if(this.authService.login()) {
      this.router.navigate(['todos']); 
    }
  }

}

