import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceMailSenderComponent } from './invoice-mail-sender.component';

describe('InvoiceMailSenderComponent', () => {
  let component: InvoiceMailSenderComponent;
  let fixture: ComponentFixture<InvoiceMailSenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoiceMailSenderComponent]
    });
    fixture = TestBed.createComponent(InvoiceMailSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
