import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroForm } from './carro-form';

describe('CarroForm', () => {
  let component: CarroForm;
  let fixture: ComponentFixture<CarroForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarroForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarroForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
