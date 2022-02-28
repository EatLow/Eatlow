import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryEmptyComponent } from './history-empty.component';

describe('HistoryEmptyComponent', () => {
  let component: HistoryEmptyComponent;
  let fixture: ComponentFixture<HistoryEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryEmptyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
