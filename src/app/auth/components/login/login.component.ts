import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginEmail: string = localStorage.getItem('loginEmail');
  constructor(public router: Router) {}

  public loginNavigate(): void {
    localStorage.removeItem('loginToken');
    localStorage.removeItem('loginEmail');
    this.router.navigate(['/auth']);
  }

  public ngOnInit(): void {}
}
