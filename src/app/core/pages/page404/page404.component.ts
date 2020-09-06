import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss']
})
export class Page404Component implements OnInit {

  constructor( public router: Router) { }

  public ngOnInit(): void {
  }

  public navigateToLoginPage(): void {
    this.router.navigate(['auth']);
  }

  public navigateToYoutubePage(): void {
    this.router.navigateByUrl('https://www.youtube.com/');
  }

}
