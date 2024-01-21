import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpInfoComponent } from './fp-info.component';

describe('FpInfoComponent', () => {
  let component: FpInfoComponent;
  let fixture: ComponentFixture<FpInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FpInfoComponent]
    });
    fixture = TestBed.createComponent(FpInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
