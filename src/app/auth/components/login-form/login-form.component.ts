import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public email: string;
  public passInputType: string = 'password';

  constructor(public router: Router) { }

  public showPass(): void {
    if (this.passInputType === 'password') {
      this.passInputType = 'text';
    } else { this.passInputType = 'password'; }
  }

   public ngOnInit(): void {
  }

}
