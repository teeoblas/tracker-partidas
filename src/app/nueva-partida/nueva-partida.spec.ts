import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaPartida } from './nueva-partida';

describe('NuevaPartida', () => {
  let component: NuevaPartida;
  let fixture: ComponentFixture<NuevaPartida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuevaPartida],
    }).compileComponents();

    fixture = TestBed.createComponent(NuevaPartida);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
