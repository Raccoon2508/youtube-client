import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    // tslint:disable-next-line: typedef
    const fixture = TestBed.createComponent(AppComponent);
    // tslint:disable-next-line: typedef
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'youtube-client'`, () => {
    // tslint:disable-next-line: typedef
    const fixture = TestBed.createComponent(AppComponent);
    // tslint:disable-next-line: typedef
    const app = fixture.componentInstance;
    expect(app.title).toEqual('youtube-client');
  });

  it('should render title', () => {
    // tslint:disable-next-line: typedef
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    // tslint:disable-next-line: typedef
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('youtube-client app is running!');
  });
});
