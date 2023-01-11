import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProductToCartComponent } from './table-product-to-cart.component';

describe('TableProductToCartComponent', () => {
  let component: TableProductToCartComponent;
  let fixture: ComponentFixture<TableProductToCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableProductToCartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableProductToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
