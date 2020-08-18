import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  public email: string;
  public passInputType: string = 'password';

  constructor(public location: Location) { }

  public goBack(): void {
    this.location.back();
  }
  public showPass(): void {
    if (this.passInputType === 'password') {
      this.passInputType = 'text';
    } else { this.passInputType = 'password'; }
  }

  public ngOnInit(): void {
  }

}
