import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpImgComponent } from './fp-img.component';

describe('FpImgComponent', () => {
  let component: FpImgComponent;
  let fixture: ComponentFixture<FpImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FpImgComponent]
    });
    fixture = TestBed.createComponent(FpImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
