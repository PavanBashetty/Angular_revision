import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsOverviewComponent } from './forms-overview.component';

describe('FormsOverviewComponent', () => {
  let component: FormsOverviewComponent;
  let fixture: ComponentFixture<FormsOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsOverviewComponent]
    });
    fixture = TestBed.createComponent(FormsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
