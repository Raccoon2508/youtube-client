import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginEmail: string;
  constructor(public router: Router,
              public authService: AuthService) {
    this.authService.userInfo.subscribe((userInfo) => {
      if ( userInfo ) { localStorage.setItem('userName', userInfo.userName);
                        console.log('User logged-in'); }
     });
  }

  public loginNavigate(): void {
    localStorage.removeItem('loginToken');
    localStorage.removeItem('login');
    localStorage.removeItem('searchResponse');
    this.router.navigate(['/auth']);
  }

  public ngOnInit(): void {
    this.loginEmail = localStorage.getItem('userName');
  }
}
