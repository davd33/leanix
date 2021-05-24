import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubDetailComponent } from './github-detail.component';

describe('GithubDetailComponent', () => {
  let component: GithubDetailComponent;
  let fixture: ComponentFixture<GithubDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
