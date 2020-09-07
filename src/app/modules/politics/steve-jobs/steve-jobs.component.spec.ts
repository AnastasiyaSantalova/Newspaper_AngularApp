import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteveJobsComponent } from './steve-jobs.component';

describe('SteveJobsComponent', () => {
  let component: SteveJobsComponent;
  let fixture: ComponentFixture<SteveJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteveJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteveJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
