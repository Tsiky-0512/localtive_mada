import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesFormComponent } from './properties-form.component';

describe('PropertiesFormComponent', () => {
  let component: PropertiesFormComponent;
  let fixture: ComponentFixture<PropertiesFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertiesFormComponent]
    });
    fixture = TestBed.createComponent(PropertiesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
