import { TestBed } from '@angular/core/testing';

import { MealFactory } from './meal-factory.service';

describe('MealFactoryService', () =>
{
  let service: MealFactory;

  beforeEach(() =>
  {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealFactory);
  });

  it('should be created', () =>
  {
    expect(service).toBeTruthy();
  });
});
