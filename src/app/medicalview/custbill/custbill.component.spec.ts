import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustbillComponent } from './custbill.component';

describe('CustbillComponent', () => {
  let component: CustbillComponent;
  let fixture: ComponentFixture<CustbillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustbillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
