import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceGeneratorComponent } from './invoice-generator.component';

describe('InvoiceGeneratorComponent', () => {
  let component: InvoiceGeneratorComponent;
  let fixture: ComponentFixture<InvoiceGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoiceGeneratorComponent]
    });
    fixture = TestBed.createComponent(InvoiceGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
