import { TestBed } from '@angular/core/testing';

import { SelectedProductState } from './selected-product.state';

describe('SelectedProductService', () => {
  let service: SelectedProductState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedProductState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
