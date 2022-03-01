import { TestBed } from '@angular/core/testing';

import { SubGroupFactory } from './sub-group-factory.service';

describe('SubGroupFactoryService', () =>
{
  let service: SubGroupFactory;

  beforeEach(() =>
  {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubGroupFactory);
  });

  it('should be created', () =>
  {
    expect(service).toBeTruthy();
  });
});
