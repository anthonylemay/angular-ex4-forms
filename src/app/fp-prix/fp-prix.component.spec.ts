import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpPrixComponent } from './fp-prix.component';

describe('FpPrixComponent', () => {
  let component: FpPrixComponent;
  let fixture: ComponentFixture<FpPrixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FpPrixComponent]
    });
    fixture = TestBed.createComponent(FpPrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
