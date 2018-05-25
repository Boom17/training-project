import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAddReactivePageComponent } from './customer-add-reactive-page.component';

describe('CustomerAddReactivePageComponent', () => {
  let component: CustomerAddReactivePageComponent;
  let fixture: ComponentFixture<CustomerAddReactivePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAddReactivePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAddReactivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
