import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUserComponent } from './product-user.component';

describe('ProductUSerComponent', () => {
  let component: ProductUserComponent;
  let fixture: ComponentFixture<ProductUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
