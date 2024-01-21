import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpDescComponent } from './fp-desc.component';

describe('FpDescComponent', () => {
  let component: FpDescComponent;
  let fixture: ComponentFixture<FpDescComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FpDescComponent]
    });
    fixture = TestBed.createComponent(FpDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
