import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPage } from './custom-page';

describe('CustomPage', () => {
  let component: CustomPage;
  let fixture: ComponentFixture<CustomPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
