import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireProduitComponent } from './formulaire-produit.component';

describe('FormulaireProduitComponent', () => {
  let component: FormulaireProduitComponent;
  let fixture: ComponentFixture<FormulaireProduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulaireProduitComponent]
    });
    fixture = TestBed.createComponent(FormulaireProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
