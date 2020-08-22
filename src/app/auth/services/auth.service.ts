import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( ) { }

  public login(userLogin: string): void {
    localStorage.setItem('loginToken', 'token');
    localStorage.setItem('loginEmail', userLogin);

  }
}
