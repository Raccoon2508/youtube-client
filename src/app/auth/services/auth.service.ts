import { Injectable } from '@angular/core';
import { youtubeKey } from 'src/assets/youtube-key';
import { Subject, Observable } from 'rxjs';

interface UserInfo {
  userName: string;
  loggedIn: Boolean;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public authYoutbeKeyEmit: Subject<string> = new Subject;
  public userInfo: Subject<UserInfo> = new Subject;

  constructor( ) { }

  public login(userLogin: string): void {
    localStorage.setItem('loginToken', 'token');
    localStorage.setItem('loginEmail', userLogin);
    let user: UserInfo = {
      userName: userLogin,
      loggedIn: true
    };
    this.userInfo.next(user);
    this.authYoutbeKeyEmit.next(youtubeKey);

  }

}
