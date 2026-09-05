import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Destruction } from './destruction';

describe('Destruction', () => {
  let component: Destruction;
  let fixture: ComponentFixture<Destruction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Destruction],
    }).compileComponents();

    fixture = TestBed.createComponent(Destruction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
