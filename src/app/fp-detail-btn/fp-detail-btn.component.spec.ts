import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpDetailBtnComponent } from './fp-detail-btn.component';

describe('FpDetailBtnComponent', () => {
  let component: FpDetailBtnComponent;
  let fixture: ComponentFixture<FpDetailBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FpDetailBtnComponent]
    });
    fixture = TestBed.createComponent(FpDetailBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
