import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicButtonComponent } from './pic-button.component';

describe('PicButtonComponent', () => {
  let component: PicButtonComponent;
  let fixture: ComponentFixture<PicButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
