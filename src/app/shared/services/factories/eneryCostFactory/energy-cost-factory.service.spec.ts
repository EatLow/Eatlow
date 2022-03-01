import { TestBed } from '@angular/core/testing';

import { EnergyCostFactory } from './energy-cost-factory.service';

describe('EnergyCostFactoryService', () =>
{
  let service: EnergyCostFactory;

  beforeEach(() =>
  {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnergyCostFactory);
  });

  it('should be created', () =>
  {
    expect(service).toBeTruthy();
  });
});
