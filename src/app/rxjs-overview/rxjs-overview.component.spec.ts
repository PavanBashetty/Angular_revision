import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsOverviewComponent } from './rxjs-overview.component';

describe('RxjsOverviewComponent', () => {
  let component: RxjsOverviewComponent;
  let fixture: ComponentFixture<RxjsOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjsOverviewComponent]
    });
    fixture = TestBed.createComponent(RxjsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
