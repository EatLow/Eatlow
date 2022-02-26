import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageIngredientComponent } from './page-ingredient.component';

describe('PageIngredientComponent', () => {
  let component: PageIngredientComponent;
  let fixture: ComponentFixture<PageIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageIngredientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
