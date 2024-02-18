import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablePromisesComponent } from './observable-promises.component';

describe('ObservablePromisesComponent', () => {
  let component: ObservablePromisesComponent;
  let fixture: ComponentFixture<ObservablePromisesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservablePromisesComponent]
    });
    fixture = TestBed.createComponent(ObservablePromisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
