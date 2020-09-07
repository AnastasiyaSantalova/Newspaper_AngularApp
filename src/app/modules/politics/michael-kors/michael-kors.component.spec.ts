import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MichaelKorsComponent } from './michael-kors.component';

describe('MichaelKorsComponent', () => {
  let component: MichaelKorsComponent;
  let fixture: ComponentFixture<MichaelKorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MichaelKorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MichaelKorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
