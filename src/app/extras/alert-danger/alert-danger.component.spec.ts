import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDangerComponent } from './alert-danger.component';

describe('AlertDangerComponent', () => {
  let component: AlertDangerComponent;
  let fixture: ComponentFixture<AlertDangerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertDangerComponent]
    });
    fixture = TestBed.createComponent(AlertDangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
