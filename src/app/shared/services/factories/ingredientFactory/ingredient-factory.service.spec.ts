import { TestBed } from '@angular/core/testing';

import { IngredientFactory } from './ingredient-factory.service';

describe('IngredientFactoryService', () =>
{
  let service: IngredientFactory;

  beforeEach(() =>
  {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredientFactory);
  });

  it('should be created', () =>
  {
    expect(service).toBeTruthy();
  });
});
