import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPartida } from './tarjeta-partida';

describe('TarjetaPartida', () => {
  let component: TarjetaPartida;
  let fixture: ComponentFixture<TarjetaPartida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TarjetaPartida],
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaPartida);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
