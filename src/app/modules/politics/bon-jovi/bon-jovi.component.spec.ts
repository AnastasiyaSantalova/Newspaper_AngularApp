import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonJoviComponent } from './bon-jovi.component';

describe('BonJoviComponent', () => {
  let component: BonJoviComponent;
  let fixture: ComponentFixture<BonJoviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonJoviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonJoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
