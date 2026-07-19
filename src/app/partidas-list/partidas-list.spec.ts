import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidasList } from './partidas-list';

describe('PartidasList', () => {
  let component: PartidasList;
  let fixture: ComponentFixture<PartidasList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartidasList],
    }).compileComponents();

    fixture = TestBed.createComponent(PartidasList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
