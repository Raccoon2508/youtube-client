import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  public loginEmail: string;
  public loginPassword: string;
  public passInputType: string = 'password';

  constructor(
    public router: Router,
    public location: Location,
    public auth: AuthService
  ) {}

  public login(): void {
    if (this.loginEmail && this.loginPassword) {
      this.auth.login(this.loginEmail);
      this.router.navigate(['']);
    }
  }

  public goBack(): void {
    this.location.back();
  }
  public showPass(): void {
    if (this.passInputType === 'password') {
      this.passInputType = 'text';
    } else {
      this.passInputType = 'password';
    }
  }

  public ngOnInit(): void {}
}
