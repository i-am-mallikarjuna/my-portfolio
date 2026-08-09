import { TestBed } from '@angular/core/testing';

import { CustomPage } from './custom-page';

describe('CustomPage', () => {
  let service: CustomPage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomPage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
