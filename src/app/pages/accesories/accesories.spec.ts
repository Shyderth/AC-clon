import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accesories } from './accesories';

describe('Accesories', () => {
  let component: Accesories;
  let fixture: ComponentFixture<Accesories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accesories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Accesories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
