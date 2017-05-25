import { Injectable } from '@angular/core';

import { LocalStorageService } from 'angular-2-local-storage'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';


@Injectable()
export class AuthService {

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private localStorageService: LocalStorageService){}
  	

  login() : boolean {
      this.localStorageService.set('isLoggedIn', true);
      return true;
  }

  logout(): void {
    this.localStorageService.remove('isLoggedIn');
  }

  isLoggedIn() : boolean {
    return this.localStorageService.get('isLoggedIn') != null ? true : false;
  }

}
