import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAddpageComponent } from './customer-addpage.component';

describe('CustomerAddpageComponent', () => {
  let component: CustomerAddpageComponent;
  let fixture: ComponentFixture<CustomerAddpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAddpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAddpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
