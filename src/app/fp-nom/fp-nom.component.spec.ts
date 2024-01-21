import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpNomComponent } from './fp-nom.component';

describe('FpNomComponent', () => {
  let component: FpNomComponent;
  let fixture: ComponentFixture<FpNomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FpNomComponent]
    });
    fixture = TestBed.createComponent(FpNomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
