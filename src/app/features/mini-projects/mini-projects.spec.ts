import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniProjects } from './mini-projects';

describe('MiniProjects', () => {
  let component: MiniProjects;
  let fixture: ComponentFixture<MiniProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniProjects],
    }).compileComponents();

    fixture = TestBed.createComponent(MiniProjects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
