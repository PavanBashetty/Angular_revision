import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxOverviewComponent } from './ngrx-overview.component';

describe('NgrxOverviewComponent', () => {
  let component: NgrxOverviewComponent;
  let fixture: ComponentFixture<NgrxOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgrxOverviewComponent]
    });
    fixture = TestBed.createComponent(NgrxOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
