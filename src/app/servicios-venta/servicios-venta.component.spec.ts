import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosVentaComponent } from './servicios-venta.component';

describe('ServiciosVentaComponent', () => {
  let component: ServiciosVentaComponent;
  let fixture: ComponentFixture<ServiciosVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosVentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
